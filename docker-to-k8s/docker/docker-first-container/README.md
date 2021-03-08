# 运行我们的第一个容器

教程所使用的环境

![image-20210307200220343](http://picture.nj-jay.com/image-20210307200220343.png)

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

![image-20210307235009406](http://picture.nj-jay.com/image-20210307235009406.png)

```shell

```

