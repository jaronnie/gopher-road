# Go 程序部署的演进之路

## 宿主机运行

先给出一个最简单的 go web 程序：

* 监听 8888 端口
* 访问 localhost:8888，执行 index 回调函数，返回 hello world

```go
// filename: main.go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", index)
    http.ListenAndServe(":8888", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>Hello World</h1>")
}
```

最开始的部署也很简单，将该程序编译成二进制程序，丢到服务器上运行即可。

```shell
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o go-app main.go
nohup ./go-app &> go-app.log &
```

由于程序运行在宿主机上，因此可直接通过 localhost 访问。

![image-20210720104741924](http://picture.nj-jay.com/image-20210720104741924.png)

## docker 容器中运行

随着近几年容器化技术的发展，我们的服务渐渐都开始容器化。

### Dockerfile 构建 docker 镜像

```dockerfile
FROM golang:alpine
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o go-app main.go
EXPOSE 8888
CMD ["/app/go-app"]
```
```shell
docker build -t "gocloudcoder/kube-go-app:v1" .
```
### 运行 映射端口 8888

* 程序运行在容器内，无法直接通过 localhost 访问
* 通过 -p 选项将容器内的 8888 端口服务 映射在宿主机的 8888 端口
* 通过 localhost 访问

```shell
docker run --rm -p 8888:8888 gocloudcoder/kube-go-app:v1
```

![image-20210720104741924](http://picture.nj-jay.com/image-20210720104741924.png)

## docker-compose 部署

我们知道，项目不可能只有后端，需要数据库，后端，前端共同组成一个项目。

> 这里为了方便，我们只演示后端与前端。

当然，可以把所有的服务都放在一个容器里面，但这并不推荐，一般一个容器我们只运行一个服务。

这将带来一个问题，多个容器之间怎么共享服务：

比如，我们的 golang 后端服务在端口 8888，在我们的前端中需要调用后端接口，但是两者不运行在同一个容器中，无法直接通过localhost调用。

当然，docker 提供了可以调用的方式，但是这无疑增加了我们部署的难度。

那么 docker-compose 给我们提供了一个新的方式。

首先我们创建一个 nginx 镜像。

nginx 配置文件如下：

* 将 kube-go-app:8888 端口转发到 Backend
* 将 go 后端服务通过 nginx 转发
* 监听 8080，用于前端页面 

```nginx
upstream Backend {
    # hello is the internal DNS name used by the backend Service inside Kubernetes
    server kube-go-app:8888;
}

server {
    listen 8888;
    location / {
        # The following statement will proxy traffic to the upstream named Backend
        proxy_pass http://Backend;
    }
}

server {
     listen 8080;
     location / {
            root /usr/share/nginx/html;
     }
}
```

创建 nginx 镜像：

```dockerfile
FROM nginx:alpine
COPY conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY . .
```

```shell
docker build -t "gocloudcoder/kube-nginx:v1" .
```

docker-compose 配置文件：

```yaml
version: "2.0"
services:
  kube-go-app:
    image: "gocloudcoder/kube-go-app:v1"
    container_name: kube-go-app
    restart: always
    ports:
      - '8888:8888'
  kube-go-web:
    image: "gocloudcoder/kube-nginx:v1"
    container_name: kube-nginx
    restart: always
    ports:
      - '8080:8080'
    depends_on:
      - kube-go-app    
```

启动服务：
```shell
docker-compose up
```

浏览器访问：

nginx 服务启动正常

![image-20210720115623629](http://picture.nj-jay.com/image-20210720115623629.png)

go 后端服务正常：

![image-20210720104741924](http://picture.nj-jay.com/image-20210720104741924.png)

## k8s 部署

我们慢慢的并不能满足于此，因为现在都是集群化呀，docker-compose 只能用于单机版，出事故了服务没办法快速回复。

现在 k8s 就是云计算时代的操作系统，是王者般的存在！

如果你想了解 k8s 的详细内容，请查阅官网：https://kubernetes.io/zh/docs/concepts/overview/what-is-kubernetes/

它有以下优点：

- **服务发现和负载均衡**

  Kubernetes 可以使用 DNS 名称或自己的 IP 地址公开容器，如果进入容器的流量很大， Kubernetes 可以负载均衡并分配网络流量，从而使部署稳定。

- **存储编排**

  Kubernetes 允许你自动挂载你选择的存储系统，例如本地存储、公共云提供商等。

- **自动部署和回滚**

  你可以使用 Kubernetes 描述已部署容器的所需状态，它可以以受控的速率将实际状态 更改为期望状态。例如，你可以自动化 Kubernetes 来为你的部署创建新容器， 删除现有容器并将它们的所有资源用于新容器。

- **自动完成装箱计算**

  Kubernetes 允许你指定每个容器所需 CPU 和内存（RAM）。 当容器指定了资源请求时，Kubernetes 可以做出更好的决策来管理容器的资源。

- **自我修复**

  Kubernetes 重新启动失败的容器、替换容器、杀死不响应用户定义的 运行状况检查的容器，并且在准备好服务之前不将其通告给客户端。

- **密钥与配置管理**

  Kubernetes 允许你存储和管理敏感信息，例如密码、OAuth 令牌和 ssh 密钥。 你可以在不重建容器镜像的情况下部署和更新密钥和应用程序配置，也无需在堆栈配置中暴露密钥

我们的 程序的部署终极方式便是采用 k8s 部署。

由于部署 k8s 集群非常的麻烦，有兴趣的朋友可以查阅官网。这里我们只是演示如何使用 k8s 部署我们的程序。

### 使用部署对象（Deployment）创建后端

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  selector:
    matchLabels:
      app: kube-go-app
      tier: backend
      track: stable
  replicas: 3
  template:
    metadata:
      labels:
        app: kube-go-app
        tier: backend
        track: stable
    spec:
      containers:
        - name: kube-go-app
          image: "gocloudcoder/kube-go-app:v1"
          ports:
            - name: http
              containerPort: 8888
```

### 创建 `kube-go-app` Service 对象

```yaml
apiVersion: v1
kind: Service
metadata:
  name: kube-go-app
spec:
  selector:
    app: kube-go-app
    tier: backend
  ports:
  - protocol: TCP
    port: 8888
    targetPort: http  
```

### 使用部署对象（Deployment）创建前端应用

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  selector:
    matchLabels:
      app: kube-go-app
      tier: frontend
      track: stable
  replicas: 1
  template:
    metadata:
      labels:
        app: kube-go-app
        tier: frontend
        track: stable
    spec:
      containers:
        - name: kube-nginx
          image: "gocloudcoder/kube-nginx:v1"
          lifecycle:
            preStop:
              exec:
                command: ["/usr/sbin/nginx","-s","quit"]
```

### 创建前端 `Service` 对象

```yaml
apiVersion: v1
kind: Service
metadata:
  name: frontend
spec:
  selector:
    app: kube-go-app
    tier: frontend
  ports:
  - protocol: "TCP"
    name: "kube-go-app"
    port: 8888
    targetPort: 8888
  - protocol: "TCP"
    name: "frontend"
    port: 8080
    targetPort: 8080
  type: LoadBalancer
```

```shell
kubectl apply -f go-app-deployment.yaml
kubectl apply -f go-app-service.yaml
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml
```

浏览器访问：

nginx 服务启动正常

![image-20210720115623629](http://picture.nj-jay.com/image-20210720115623629.png)

go 后端服务正常：

![image-20210720104741924](http://picture.nj-jay.com/image-20210720104741924.png)

至此我们部署的方式从本地，docker，docker-compose，到终极解决方案 k8s，已经全部完成。

相关代码也已经托管到 github 上：

https://github.com/jaronnie/gopher-road/tree/main/docker-to-k8s/k8s/example/deploy-with-go

当然上述仍然不是一个完整的项目流程，没有加入数据库服务，但是包含了大致的流程。

如果你想完整体验一个项目使用 docker-compose 和 k8s 部署的话：

访问：https://github.com/jaronnie/music-player

## 参考链接

* https://github.com/docker/awesome-compose/tree/master/nginx-golang-mysql
* https://kubernetes.io/zh/docs/tasks/access-application-cluster/connecting-frontend-backend/
