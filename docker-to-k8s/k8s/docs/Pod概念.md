# Pod

* 自主式 Pod：手动创建
* 控制器管理的 Pod：由控制器创建

## 概念

Pod 是 Kubernetes 最重要的基本概念，可由多个容器组成，它是系统中资源分配和调度的最小单位。

pod中会初始化一个pause容器，用于共享 pod 内的网络栈和存储卷。

使得几个容器可以直接通过localhost访问。

> 参考：https://mp.weixin.qq.com/s/ji0Pj00xeHOeispNhsPKZw
>
> Pause 容器的状态标识了一个 Pod 的状态，也就是代表了 Pod 的生命周期。另外 Pod 中其余容器共享 Pause 容器的命名空间，使得 Pod 内的容器能够共享 Pause 容器的 IP，以及实现文件共享。
>
> ![image-20210716220512319](https://picture.nj-jay.com/image-20210716220512319.png)
>
> EndPoint : PodIP + containerPort，代表一个服务进程的对外通信地址。一个 Pod 也存在具有多个 Endpoint 的情 况，比如当我们把 Tomcat 定义为一个 Pod 时，可以对外暴露管理端口与服务端口这两个 Endpoint。

## Pod 文件定义

```yaml
apiVersion: v1  # 分组和版本
kind: Pod       # 资源类型
metadata:
  name: myWeb   # Pod名
  labels:
    app: myWeb # Pod的标签
spec:
  containers:
  - name: myWeb # 容器名
    image: kubeguide/tomcat-app:v1  # 容器使用的镜像
    ports:
    - containerPort: 8080 # 容器监听的端口
    env:  # 容器内环境变量
    - name: MYSQL_SERVICE_HOST
      value: 'mysql'
    - name: MYSQL_SERVICE_PORT
      value: '3306'
    resources:   # 容器资源配置
      requests:  # 资源下限，m表示cpu配额的最小单位，为1/1000核
        memory: "64Mi"
        cpu: "250m"
      limits:    # 资源上限
        memory: "128Mi"
        cpu: "500m"
```