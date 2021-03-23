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

【ENV】

ENV指令用来在镜像构建过程中设置环境变量。

```Dockerfile
FROM ubuntu:latest
ENV GOROOT /usr/local/bin/go
WORKDIR $GOROOT
```

![image-20210323111357270](http://picture.nj-jay.com/image-20210323111357270.png)

这些环境变量会持久保存到从我们的镜像创建的任何容器中。

我们也可以使用在docker run命令中使用-e参数来传递环境变量。这只在运行时有效。

```shell
docker run -e "GOROOT=/usr/loca/bin/go2" gocloudcoder/test1:v6 env
```

![image-20210323112127294](http://picture.nj-jay.com/image-20210323112127294.png)

【USER】

USER指令用来指定该镜像会以什么样的用户去运行。

默认用户是root。

【VOLUME】

用于持久化或者在宿主机和容器之间共享数据，这个指令非常的重要。

* 卷可以再容器间共享和重用
* 一个容器可以不是必须和其他容器共享卷
* 对卷的修改是立即生效的
* 对卷的修改不会对更新镜像产生影响
* 卷会一直存在直到没有任何容器再使用它

卷功能让我们将数据如源代码数据库等其他内容添加到镜像中而不是将这些内容提交到镜像中，并且允许我们在多个容器间共享这些内容。

我们可以利用此功能来测试容器和内部的应用程序代码，管理日志，或者处理容器内部的数据库。

这个我们一般在docker run命令式使用-v参数使用

后续在实战中会使用这个参数使用，非常的重要。

【ADD】

ADD指令用来将构建环境下的文件和目录复制到镜像中。

ADD指令需要源文件位置和目的文件位置两个参数。

```shell
ADD softwart.lic /opt/application/sortware.lic
```

ADD指令会将构建目录下的software.lic文件复制到镜像中的/opt/application/software.lic。

ADD指定也可以添加目录。通过末尾的`/`判定位目录，否则位文件。所以需要注意这一点。

> 注意：ADD在处理本地归档文件时会自动将归档文件解开。
>
> 如果目的位置不存在的话，Docker将会为我们创建一个全路径，包括路径中的任何目录，即mkdir -p的作用。

【COPY】

COPY指令类似ADD，它们根本的不同是COPY只关心在构建上下文中复制本地文件，而不会做文件提取和解压工作。

必须要把上传的文件或目录放在与Dockerfile同目录下，否则将会无效。

COPY指令的目的位置必须是容器内部绝对路径。

【ONBUILD】

ONBUILD指令能为镜像添加触发器。当一个镜像被用作其他镜像的基础镜像时，该镜像中的触发器将会被执行。

这个功能用的不是很多。

