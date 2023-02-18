# docker实战一：用docker构建可ssh登录的ubuntu等容器

适用场景：

* 可用于教学。假如你是一个linux老师，为了更好更方便的进行讲课，你需要保证你的每个学生都有linux使用。你可以使用docker搭建多个可ssh登录的容器给学生使用。

* 个人使用。在debian发行版上需要使用其他发行版特有的功能，如kail。可以使用docker运行一个可ssh登录的kail容器，而并不需要先登录到Docker宿主机，再使用docker命令行工具进入到kail容器使用。

## 拉取镜像

```shell
docker pull ubuntu:latest
# latest为版本号，latest为最新版，也可将latest换成18.04 20.04等
```

![image-20210311235804784](http://oss.jaronnie.com/image-20210311235804784.png)

## 创建容器并后台运行，映射端口1234

```shell
docker run -i -t -d --restart=always --name=myubuntu -p 1234:22 ubuntu
```

即后台运行一个有交互的tty终端，这样我们登录进去之后直接进入终端。

![image-20210312130710318](http://oss.jaronnie.com/image-20210312130710318.png)

## 进入容器，下载ssh

```shell
docker exec -i -t myubuntu /bin/bash
apt update
apt upgrade
apt install ssh
```

## 修改配置文件以及配置登录密码

```shell
echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
passwd # 设置密码 假设为123456
service ssh restart # 重启ssh服务
```

## 测试

由于我使用服务器，如果你是在本地安装的docker，请使用localhost

```shell
ssh -p 1234 root@localhost
```

![image-20210312132108337](http://oss.jaronnie.com/image-20210312132108337.png)