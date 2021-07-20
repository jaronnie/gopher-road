# Deployment 相关操作

## 版本迭代

当我们的后端代码需要更新时，我们可以非常方便的进行迭代更新。

为了演示，仍然以我们当前的仓库作为基础：

首先运行我们已经存在的服务，请查阅README.md

下面，我们对 go代码进行更新，然后打包成一个新的版本 v2。

```go
package main

import (
    "fmt"
    "net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>Hello World V2</h1>")
}


func main() {
    http.HandleFunc("/", index)
    http.ListenAndServe(":8888", nil)
}
```

```shell
docker build -t "gocloudcoder/kube-go-app:v2" .
```

更新镜像

```shell
kubectl set image deployment/backend kube-go-app=gocloudcoder/kube-go-app:v2 --record
```

![image-20210720231933106](https://picture.nj-jay.com/image-20210720231933106.png)

![image-20210720232005151](http://picture.nj-jay.com/image-20210720232005151.png)

说实话是真的牛逼！

## 版本回退

若更新的版本线上出问题了，需要回退的话，也是非常的方便。

再次更改为 v3版本：

```go
package main

import (
    "fmt"
    "net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>Hello World V3</h1>")
}


func main() {
    http.HandleFunc("/", index)
    http.ListenAndServe(":8888", nil)
}
```

```shell
docker build -t "gocloudcoder/kube-go-app:v3" .
```

```shell
kubectl set image deployment/backend kube-go-app=gocloudcoder/kube-go-app:v3 --record
```

检查 Deployment 上线历史

```shell
kubectl rollout history deployment.v1.apps/backend
```

![image-20210720232718249](https://picture.nj-jay.com/image-20210720232718249.png)

我们回滚到 V2，先查看 V2 的一些信息：

```shell
kubectl rollout history deployment.v1.apps/backend --revision=2
```

回滚到 V2：

```shell
kubectl rollout undo deployment.v1.apps/backend
```

或者指定回滚到哪一个 REVISION：

```shell
kubectl rollout undo deployment.v1.apps/backend --to-revision=2
```

![image-20210720233116261](http://picture.nj-jay.com/image-20210720233116261.png)

## 缩放 Deployment

设置副本数，开始我们go后端程序配置文件中设置的副本数为3，我们由于服务的需要，需要设置成10个副本数，也是非常的容易：

```shell
 kubectl scale deployment.v1.apps/backend --replicas=10
```

![image-20210720233503598](http://picture.nj-jay.com/image-20210720233503598.png)

## 参考链接

* https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/