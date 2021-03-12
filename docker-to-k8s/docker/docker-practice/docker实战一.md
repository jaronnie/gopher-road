# docker实战一：用docker构建可ssh登录的ubuntu等容器

适用场景：

* 可用于教学。假如你是一个linux老师，为了更好更方便的进行讲课，你需要保证你的每个学生都有linux使用。你可以使用docker搭建多个可ssh登录的容器给学生使用。

* 个人使用。在debian发行版上需要使用其他发行版特有的功能，如kail。可以使用docker运行一个可ssh登录的kail容器，而并不需要先登录到Docker宿主机，再使用docker命令行工具进入到kail容器使用。

## 拉取镜像

```shell
docker pull ubuntu:latest
# latest为版本号，latest为最新版，也可将latest换成18.04 20.04等
```

![image-20210311235804784](http://picture.nj-jay.com/image-20210311235804784.png)

## 创建容器并后台运行，映射端口1234

```shell
docker run -d --restart=always --name=myubuntu -p 1234:22 ubuntu
```

