# 初探 k8s

> 前言：
>
> 从接触docker 到 现在能接触 k8s 大概过了一年多。
>
> 说这个话的意思是，学习是一个循序渐进的过程，只有从开始使用docker，慢慢熟悉docker，会写Dockerfile，到能使用docker-compose一键部署项目，再来学习k8s是我认为最合适的一个线路。

## 预备

### docker

* [家庭版windows安装使用docker](https://blog.gocloudcoder.com/?p=1235)
* [linux上安装docker](https://github.com/jaronnie/gopher-road/tree/main/docker-to-k8s/docker/docker-install)
* [docker介绍与使用](https://github.com/jaronnie/gopher-road/tree/main/docker-to-k8s)

### docker-compose

* 实践：[一键部署music-player(mysql + go + nginx)](https://github.com/jaronnie/music-player)

## 部署k8s

> 参考自知乎：
>
> [windows10 部署 docker+k8s 集群 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/163558476)

为了部署方便，我们可以选择部署[k3s](https://k3s.io/)。

但是我在使用k3s过程中还是有点问题，所以还是换了k8s。

此方法前期条件是安装了docker for desktop.

接下来就是安装一些k8s相关的镜像。

```shell
git clone https://github.com/AliyunContainerService/k8s-for-docker-desktop.git
cd k8s-for-docker-desktop
# git checkout v1.21.2 # 切换指定的版本，这个需要docker for desktop 中 k8s 的版本
Set-ExecutionPolicy RemoteSigned # powershell 管理员权限运行
.\load_images.ps1 # 执行脚本
```

<img src="http://picture.nj-jay.com/image-20210715172934927.png" alt="image-20210715172934927" style="zoom:80%;" />

![image-20210715172819188](http://picture.nj-jay.com/image-20210715172819188.png)

最后 Enable Kubernetes

![image-20210715173031134](https://picture.nj-jay.com/image-20210715173031134.png)

## 测试安装

```shell
kubectl cluster-info
```

![image-20210715173223726](http://picture.nj-jay.com/image-20210715173223726.png)

```shell
kubectl get nodes
```

![image-20210715173256046](http://picture.nj-jay.com/image-20210715173256046.png)

## 运行第一个 k8s 应用

> 参考自 k8s 权威指南。

相关的配置文件已托管在我的[github](https://github.com/jaronnie/gopher-road/tree/main/docker-to-k8s/k8s/first)上。

### 1、首先为MySql服务创建一个RC定义文件：mysql-rc.yaml

```shell
touch mysql-rc.yaml
# 将github上的该文件的内容复制上去
```

### 2、发布到Kubernetes集群

```shell
kubectl create -f mysql-rc.yaml
```

### 3、验证是否成功

```shell
kubectl get rc
```

![image-20210715173936566](https://picture.nj-jay.com/image-20210715173936566.png)

```shell
kubectl get pods
```

![image-20210715174027183](http://picture.nj-jay.com/image-20210715174027183.png)

### 4、构建Mysql Kubernetes Service定义文件

```shell
touch mysql-svc.yaml
# 将github上的该文件的内容复制上去
```

```shell
kubectl create -f mysql-svc.yaml
```

### 5. 验证创建的 service

```shell
kubectl get svc
```

![image-20210715174655176](http://picture.nj-jay.com/image-20210715174655176.png)

> 注意到MySql服务被分配了一个值为10.110.175.148的ClusterIP地址，这是一个虚地址，随后Kubernetes集群中其他新创建的Pod就可以通过Service的ClusterIP+端口号3306来连接和访问它。根据Service的唯一名字，容器可以从环境变量中获取到Service对应的ClusterIP地址和端口，从而发起TCP/IP连接请求了。

### 6. 创建 tomcat 对应的RC文件myweb-rc.yaml

```shell
touch myweb-rc.yaml
# 将github上的该文件的内容复制上去
```

```shell
kubectl create -f myweb-rc.yaml
```

### 7. 构建Tomcat Kubernetes Service定义文件

```shell
touch myweb-svc.yaml
# 将github上的该文件的内容复制上去
```

```shell
kubectl create -f myweb-svc.yaml
```

### 8. 访问 localhost:30001

![image-20210715233500357](http://picture.nj-jay.com/image-20210715233500357.png)

