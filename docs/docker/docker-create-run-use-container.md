# 运行我们的第一个容器并使用容器

教程所使用的环境

![image-20210307200220343](http://oss.jaronnie.com/image-20210307200220343.png)

## 查看docker是否安装

```shell
docker info
```

```shell
Client:
 Context:    default
 Debug Mode: false
 Plugins:
  app: Docker App (Docker Inc., v0.9.1-beta3)
  buildx: Build with BuildKit (Docker Inc., v0.5.1-docker)

Server:
 Containers: 15
  Running: 1
  Paused: 0
  Stopped: 14
 Images: 6
 Server Version: 20.10.2
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Native Overlay Diff: true
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: runc io.containerd.runc.v2 io.containerd.runtime.v1.linux
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 269548fa27e0089a8b8278fc4fc781d7f65a939b
 runc version: ff819c7e9184c13b7c2607fe6c30ae19403a7aff
 init version: de40ad0
 Security Options:
  apparmor
  seccomp
   Profile: default
 Kernel Version: 4.19.0-10-amd64
 Operating System: Debian GNU/Linux 10 (buster)
 OSType: linux
 Architecture: x86_64
 CPUs: 1
 Total Memory: 1.948GiB
 Name: iZ2zeg3h4a24fht4sr97x1Z
 ID: X3U6:MMCR:ZIXP:YLOQ:A4FR:F5VU:CHTZ:DDCJ:QZEH:YBLS:Z37F:OCH7
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Username: gocloudcoder
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Registry Mirrors:
  https://docker.mirrors.ustc.edu.cn/
 Live Restore Enabled: false

```

我们使用了docker可执行程序的info命令，该命令会返回所有容器和镜像的数量，Docker使用的执行驱动和存储驱动，以及Docker的基本配置。

## 配置镜像源

配置文件保存在`/etc/docker/daemon.json`中，如果没有就创建此文件。

文件内容如下：

```shell
{
        "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```

 修改完地址后，重新加载配置文件，重启docker服务

```shell
systemctl daemon-reload
systemctl restart docker
```

## 运行第一个容器

我们可以使用docker run命令创建容器。它的功能是提供了Docker容器的创建到启动。

![image-20210307235009406](http://oss.jaronnie.com/image-20210307235009406.png)

```shell
docker run -i -t ubuntu /bin/bash
```

指定-i -t两个参数，-i表示interactive，-t表示tty伪终端。

它告诉Docker为要创建的容器分配一个伪tty终端，这样我们能够与之进行交互，而不是一个运行后台服务的容器。

我们可以使用`man docker-run`查看run命令所有的参数使用。

然后我们告诉Docker基于什么镜像来创建容器，示例使用的是ubuntu镜像。它可以称为一个基础(base)镜像。它由Docker公司提供，保存在Docker Hub Registry中。但是由于我们使用的镜像源是ustc(中国科学技术大学)，所以实际上是从ustc中获取的。

在运行这个命令的时候，Docker首先会检查本地上是否存在ubuntu:latest镜像，其中latest代表版本(tag)。如果本地没有的话，将会从镜像源搜索是否有该镜像，如果有，将下载该镜像并保存在本地宿主机中。

随后，Docker在文件系统内部用这个镜像创建了一个新容器，该容器拥有自己的网络，IP地址，以及一个用来和宿主机进行通信的桥接网络接口。最后，我们告诉Docker在容器中要运行什么命令。我们使用了是/bin/bash命令，即启动了一个bash shell。

退出该容器使用`exit`

我们再精简一下这个命令。不启动交互式的终端，并执行ls命令。

![image-20210308070132830](http://oss.jaronnie.com/image-20210308070132830.png)

那这个容器运行以及就终止了。

我们使用docker ps -a查看所有的容器，docker ps查看正在运行中的容器。

```shell
CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS                    PORTS     NAMES
c3fbd9db71fd   ubuntu         "ls"                     15 hours ago   Exited (0) 15 hours ago             xenodochial_beaver
2638a8f44bff   ubuntu         "/bin/bash"              15 hours ago   Exited (0) 38 hours ago             nostalgic_colden
```

我们使用docker images查看镜像

```shell
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
ubuntu        latest    f643c72bc252   3 months ago    72.9MB
```

即基于一个ubuntu镜像，我们创建了两个容器。每run一次，就会创建一个容器。

 那我们如何进入之前创建的容器呢？

我们可以使用restart命令重启容器，并使用attach进入该容器。

```shell
docker restart 2638a8f44bff
docker attach 2638a8f44bff
```

这一串ID记不住是个问题，我们可以指定一个name。

```shell
docker rename 2638a8f44bff ubuntu1
docker restart ubuntu1
docker attach ubuntu1
```

当然我们也可以在run的时候就指定容器的名字。使用--name选项

```shell
docker  docker run -i -t --name ubuntu2 ubuntu /bin/bash
```

此时我们再使用docker ps -a

```shell
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                          PORTS     NAMES
174065c2336f   ubuntu         "/bin/bash"              48 seconds ago   Exited (127) 6 seconds ago                ubuntu2
c3fbd9db71fd   ubuntu         "ls"                     16 hours ago     Exited (0) 16 hours ago                   xenodochial_beaver
2638a8f44bff   ubuntu         "/bin/bash"              39 hours ago     Exited (0) About a minute ago             ubuntu1
```

基于同一个镜像我们一共创建了3个容器。

那如何删除容器呢？可以使用rm命令。

```shell
docker rm ubuntu1
docker rm c3fbd9db71fd
```

如果我们连ubuntu镜像都不要，可以使用rmi命令。

由于ubuntu镜像又分为各种版本，所以删除的时候需要带上tag

```shell
docker rmi ubuntu:latest
```

![image-20210309151146187](http://oss.jaronnie.com/image-20210309151146187.png)

由于ubuntu2容器还在依赖这个镜像，所以无法删除。

先删除ubuntu2容器，才能删除ubuntu:latest镜像。

```shell
docker rm ubuntu2
docker rmi ubuntu:latest
```

![image-20210309151308966](http://oss.jaronnie.com/image-20210309151308966.png)

## 创建守护式容器

在某些场景下，我们需要创建长期运行的容器，必须让他在后台运行才可以。

```shell
docker run -i -t -d --name ubuntu666 ubuntu echo "hello world"
```

![image-20210309152121185](http://oss.jaronnie.com/image-20210309152121185.png)

使用-d选项，可以创建守护式容器，只返回容器ID。

我们可以使用日志logs命令，获取容器的日志。

```shell
docker logs ubuntu666
```

就可以看到hello world。

## 在容器内部运行进程

我们可以使用exec命令在容器内部额外启动新进程。

可以在容器内运行的进程分为后台任务和交互式任务。

```shell
docker run -i -t -d --name ubuntu123 ubuntu
```

docker ps查看，ubuntu123正在后台运行。

```shell
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS                  PORTS     NAMES
ab99a424b7d8   ubuntu        "/bin/bash"              5 seconds ago   Up 4 seconds                      ubuntu123
```

![image-20210309202831399](http://oss.jaronnie.com/image-20210309202831399.png)

我们使用exec命令让容器新开一个进程执行一个任务。

```shell
docker exec ubuntu123 echo hello
```

![image-20210309202956904](http://oss.jaronnie.com/image-20210309202956904.png)

使用exec命令让容器后台执行一个任务。在/root下创建hello.txt文件。

```shell
docker exec -d ubuntu123 touch /root/hello.txt
```

![image-20210309205110318](C:\Users\烨轩墨\AppData\Roaming\Typora\typora-user-images\image-20210309205110318.png)

```shell
注意：
使用docker attach进入容器之后，使用exit退出后，容器也不再运行在后台了。
一般我们使用docker exec进入容器交互终端。exit之后容器还在运行！
```

使用exec命令执行交互式任务。

```shell
docker start ubuntu123
docker exec -i -t ubuntu123 /bin/bash
```

![image-20210309210157402](http://oss.jaronnie.com/image-20210309210157402.png)

## 停止正在运行的容器

```shell
docker stop ubuntu123
```

## 自动重启容器

当由于某种错误或者宿主机重启等造成容器停止运行，那对应的服务也将停止。

我们应该设置容器可以自动重启。使用--restart=always标记。

首先我们删除ubuntu123容器。

```
docker rm ubuntu123
```

重新创建一个容器。无论容器退出的代码是什么，将会自动重启该容器。

```shell
 docker run --restart=always -i -t --name ubuntu123 ubuntu /bin/bash
```