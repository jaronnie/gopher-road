# 构建自己的镜像

## 什么是Docker镜像

Docker镜像是由文件系统叠加而成。最底层是一个引导文件系统，即bootfs。

但是Docker封装性比较好，基本上我们永远不会和引导文件系统有什么交互。

实际上，当一个容器启动后，它将会移到内存中，而引导文件系统将会被卸载，以留出更多的内存供initrd磁盘镜像使用。

在传统的Linux引导过程中，root文件系统会最先以只读方式加载，当引导结束并完成了完整性检查之后，它才会被切换为读写模式。

但是在Docker里，root文件系统永远只能是只读状态，并且Docker利用联合加载技术又会在root文件系统层上加载更多的文件系统。

联合文件系统值得是一次同时加载多个文件系统，但是在外面只能看到一个文件系统。

联合加载会将各层文件系统叠加到一起，这样最终的文件系统会包含所有底层的文件和目录。

Docker将这样的文件系统称为镜像。一个镜像可以放到另一个镜像的顶部。位于下面的镜像称为父镜像，可以依次类推，直到镜像栈的最底部，最底部的镜像称为基础镜像。

最后当从一个镜像启动一个容器时，Dcoker会在该镜像的最顶层加载一个读写文件系统。

当Docker第一次启动一个容器时，初始的读写层是空的，当文件系统发生变化时，这些变化都会应用到这一层上，比如，如果想修改一个文件，这个文件首先会从该读写层下面的只读层复制到该读写层。该文件的只读版本依然存在，但是已经被读写层中的该文件副本所隐藏。

这种机制被称为写时复制（copy on write），这也是Docker如此强大的技术之一。

每个只读镜像层都是只读的，并且以后永远不会变化。

当创建一个新容器时，Docker会构建一个新的镜像栈，并在栈的最顶端添加一个读写层。

这个读写层再加上其下面的镜像层以及一些配置数据，就构成了一个容器。

在前面提到，容器是可以修改的，他们都有自己的状态，并且是可以启动和停止的。

容器这种特点加上镜像分层框架，使我们可以快速构建镜像并运行包含我们自己的应用程序和服务的容器。



## 构建我们自己的镜像：跑网页版hello world

### 创建Docker hub账号

链接：https://hub.docker.com/account

注册并认证邮箱后，可以使用docker命令行登录。

```shell
docker login
```

![image-20210320212442286](http://resource.gocloudcoder.com/image-20210320212442286.png)

### 构建镜像

* 使用docker commit命令
* 使用docker build命令和Dockerfile文件

docker commit是基于已有的容器进行二次修改，运行我们自己的服务。

【使用docker commit】

先运行一个ubuntu容器，命名为myubuntu

```shell
docker run -i -t -d --restart=always --name=myubuntu ubuntu
```

我们在此容器上构建我们的服务，再重新commit即可。

进入容器，运行我们的服务。

```shell
 docker exec -i -t myubuntu bash
```

![image-20210320215057180](http://resource.gocloudcoder.com/image-20210320215057180.png)

```shell
apt update
apt upgrade
apt install apache2 # 安装apache2服务器
/etc/init.d/apache2 start # 启动apache服务
```

接下来我们将修改后的容器重新commit成一个新的容器

```
docker commit -m="a new image which runs apache2" --author="gocloudcoder" -p 9001:80 myubuntu gocloudcoder/apache2
```

进入该容器后，启动apache2服务后，在浏览中输入localhost:9001即可看到内容

但是这种方式不推荐

我们应当使用Dockerfile进行编写

