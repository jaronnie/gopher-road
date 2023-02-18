# k8s 拉取镜像策略之 always 是如何实现的

## 准备环境

* 两台有 docker 的宿主机
  * 一台制作镜像
  * 一台运行服务
* 运行服务的一台宿主机安装 k8s 或者 minikube等

## 探究过程

```shell
// 制作镜像的 docker 宿主机
docker build -t "gocloudcoder/kube-image-pull:develop" .
docker push gocloudcoder/kube-image-pull:develop
```

```shell
// 运行服务的宿主机
git clone git@github.com:jaronnie/k8s-explorer.git
cd k8s-explorer/k8s-image-pull-policy
kubectl apply -f deploy-service.yaml
```

**docker images(运行服务的宿主机)**

![image-20211119013519266](https://oss.jaronnie.com/image-20211119013519266.png)

**docker ps | grep kube-image-pull**

![image-20211119013620285](https://oss.jaronnie.com/image-20211119013620285.png)

重新修改镜像，上传到 dockhub

修改 main.go 中打印的内容为 Hello World1

```shell
// 制作镜像的 docker 宿主机
docker build -t "gocloudcoder/kube-image-pull:develop" .
docker push gocloudcoder/kube-image-pull:develop
```

```shell
// 运行服务的宿主机
kubectl apply -f deploy-service-change.yaml
```

**docker images(运行服务的宿主机)**

![image-20211119014513818](https://oss.jaronnie.com/image-20211119014513818.png)

发现端倪了吧

原来的镜像 TAG 变成了 none, 新更新的镜像是最新的 develop tag

这就是 k8s image pull 策略之 always 原理！

## 深入探究

首先看我们的服务

![image-20211119105503742](https://oss.jaronnie.com/image-20211119105503742.png)

![image-20211119105540765](https://oss.jaronnie.com/image-20211119105540765.png)

如果我们删掉第一个 deplpyment 的副本，让他重新起一个，那再 curl 服务的时候，是 Hello World 还是 Hello World1 呢？

```shell
kubectl delete pod backend-5c988f5d4b-6jmw9
```

可以看到又起了一个新的 pod

![image-20211119105813194](https://oss.jaronnie.com/image-20211119105813194.png)

再次 curl 该服务，果然变成了 Hello World1

![image-20211119105908374](https://oss.jaronnie.com/image-20211119105908374.png)

