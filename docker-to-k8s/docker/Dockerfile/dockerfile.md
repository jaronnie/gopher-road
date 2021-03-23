# Dockerfile.md

不推荐使用docker commit的方法来构建镜像。

推荐使用被称为Dockfile的定义文件和docker build命令来构建镜像。

Dockerfile使用基本的基于DSL语法的指令来构建一个Docker镜像，之后使用docker build命令基于该Dockerfile中的指令构建一个新的镜像。

Dockerfile由一系列指令和参数组成。每条指令如FROM都必须为大写字母，且后面要跟一个参数：FROM ubuntu:latest。

Dockerfile中的指令会按顺序从上到下执行。每条指令都会创建一个新的镜像层并对镜像进行提交。

Dockerfile构建镜像的流程：

* Docker从基础镜像运行一个容器
* 执行一条指令，对容器进行修改
* 指令类似docker commit的操作，提交一个新的镜像层
* Docker再基于刚提交的镜像运行一个新容器
* 执行Dockerfile中的下一条指令，直到所有指令都执行完毕

## Dockerfile指令

【CMD】

CMD指令用于指定一个容器启动时要运行的命令。

> 注意：
>
> 最后使用docker run命令可以覆盖CMD指令。
>
> 如果我们在Dockerfile里指定了CMD指令，而同时在docker run命令行也指定了要运行的命令，命令行中指定的命令会覆盖Dockerfile中的CMD指令。

```Dockerfile
FROM ubuntu:latest
#输出日期信息
CMD ["date"]
```

使用docker build构建此镜像。

`.`表示在这个目录下，即Dockerfile文件必须在此目录中。或者是远程仓库的Dockerfile文件。如git@github.com:gocloudcoder/test1

v1表示标签，如果没有指定，则为latest。

```shell
docker build -t="gocloudcoder/test1:v1" .
```

<img src="http://picture.nj-jay.com/image-20210322150510611.png" alt="image-20210322150510611" style="zoom:150%;" />

使用docker images命令即可看到构建好的镜像

我们使用docker run命令运行这个镜像

<img src="http://picture.nj-jay.com/image-20210322150627575.png" alt="image-20210322150627575" style="zoom:150%;" />

上面提到我们可以在docker run命令中覆盖Dockerfile中的CMD指令

```shell
docker run gocloudcoder/test:v1 ls -l
```

![image-20210322151342346](http://picture.nj-jay.com/image-20210322151342346.png)

> **注意**：在Dockerfile中只能指定一条CMD指令。如果指定了多条，只有最后一条生效。如果想在容器启动时运行多个进程或者多条命令，可以考虑使用Supervistor等服务管理工具。

【ENTRYPOINT】

  ENTRYPOINT指令与CMD指令非常类似。

但是CMD指令会在启动容器时被覆盖，为了能够让容器按照我们想象的那样去工作，那么CMD就不太适合了。

ENTRYPOINT指令提供的命令则不容易在启动容器时被覆盖。实际上，docker run命令中指定的任何参数都会被当做参数再次传递给ENTRYPOIINT指令中指定的命令。

```Dockerfile
 FROM ubuntu:latest
 ENTRYPOINT ["ls"]
```

```shell
docker build -t="gocloudcoder/test1:v2" .
```

![image-20210322195916619](http://picture.nj-jay.com/image-20210322195916619.png)

接下来我们指定一个-l选项，那么实际运行的就是 ls -l

![image-20210322200015865](http://picture.nj-jay.com/image-20210322200015865.png)

如果我们在Dockerfile中指定ENTRYPOINT中指定ls的参数，在docker run的时候再指定一下参数会如何呢？

Dockerfile中的ENTRYPOINT中的参数一定会执行，docker run中指定的参数也会执行。

![image-20210322213959242](http://picture.nj-jay.com/image-20210322213959242.png)

我们可以组合使用ENTRYPOINT和CMD指令来完成一些巧妙的工作

如

```Dockerfile
 FROM ubuntu:latest
 ENTRYPOINT ["ls"]
 CMD ["-l"]
```

```shell
 docker build -t="gocloudcoder/test1:v4" .
```

将默认执行 ls -l

-l参数可以更换成-a等参数

![image-20210322214553320](http://picture.nj-jay.com/image-20210322214553320.png)

![image-20210322214609541](http://picture.nj-jay.com/image-20210322214609541.png)

这个搭配起来非常的巧妙啊！

【WORKDIR】

WORKDIR指令用来在从镜像创建一个新容器时，在容器内部设置一个工作目录，ENTRYPOINT和/或CMD指定的程序会在这个目录下执行。

我们可以使用该指令为Dockerfile中后续的一系列指令设置工作目录，也可以为最终的容器设置工作目录。

相当于linux命令中的cd命令。

在docker run命令时使用-w参数在运行时覆盖工作目录

```Dockerfile
 FROM ubuntu:latest
 WORKDIR /etc
 ENTRYPOINT ["ls"]
```

```shell
 docker build -t="gocloudcoder/test1:v5" .
```

![image-20210322215649494](http://picture.nj-jay.com/image-20210322215649494.png)

使用-w参数覆盖WORKDIR

![image-20210322215751656](http://picture.nj-jay.com/image-20210322215751656.png)

