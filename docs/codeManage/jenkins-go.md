# jenkins部署go程序(自动编译部署)

## 什么是jenkins?

【官方介绍】

Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。

【白话说jenkins】

jenkins可以自动化的编译，测试以及部署代码。当代码发生变化时，只需要点一个按钮就可以自动化的重新编译程序发步程序，你甚至还可以设置定时检测代码是否发生变化。比如你把代码放在了github上，jenkins可以绑定你的github仓库，当你的Github有新的提交时，jenkins可以自动检测到变化，重新拉取仓库，通过你写的脚本进行重新编译，再重新部署。省去了很多的人力。

## 安装jenkins

使用清华镜像下载

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/war/2.263/jenkins.war
```

为了解决启动慢的问题

修改~/.jenkins/hudson.model.UpdateCenter.xml为如下

```xml
<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>http://mirror.xmission.com/jenkins/updates/update-center.json</url>
  </site>
</sites>
```

## 启动jenkins

`java -jar jenkins.war --httpPort=8080`

通过 ip:8080访问 jenkins

选择社区推荐安装那一选项

## jenkins配置文件

所有的配置文件以及插件都在$HOME/.jenkins

不得不说这个项目做的是真的好

很优美，一个war包搞定！

## 使用jenkins部署一个任务(定时构建)

### 首先创建一个仓库

```bash
mkdir jenkins-go-first
cd jenkins-go-first
git init
```

写一个最简单web程序(hello.go)

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
            c.JSON(200, gin.H{
                    "message": "pong",
            })
    })
    r.Run(":9000") 
}
```

```bash
# 提交到本地仓库
git add hello.go
git commit -m "add hello.go"
git branch -M main
```

在github上建立一个仓库jenkins-go-first

```bash
git remote add origin git@github.com:gocloudcoder/jenkins-go-first.git
# 提交到远程仓库
git push -u origin main
```

### jenkins中构建任务

第一步 新建 item

![image-20210119202716239](http://resource.gocloudcoder.com/image-20210119202716239.png)

写入jenkins-go-first，选择 freestyle project 点击确定

![image-20210119202826071](http://resource.gocloudcoder.com/image-20210119202826071.png)

选择源码管理，使用git

填写github账号和密码

![image-20210119203114039](http://resource.gocloudcoder.com/image-20210119203114039.png)

制定分支看你远程仓库的主分支是master还是main

我这里是用main作为主分支，所以制定分支填写*/main

![image-20210119203226354](http://resource.gocloudcoder.com/image-20210119203226354.png)

选择源码管理，增加构建步骤选择执行Shell

![image-20210119203353292](http://resource.gocloudcoder.com/image-20210119203353292.png)

```bash
# shell中写入
go build -o hello
BUILD_ID=DONTKILLME
nohup ./hello &>hello.log &
```

![image-20210119203545809](http://resource.gocloudcoder.com/image-20210119203545809.png)

点击保存

立即构建

![image-20210119203642498](http://resource.gocloudcoder.com/image-20210119203642498.png)

点击箭头处

![image-20210119203724869](http://resource.gocloudcoder.com/image-20210119203724869.png)

点击控制台输出

![image-20210119203759284](http://resource.gocloudcoder.com/image-20210119203759284.png)

构建成功

![image-20210119203917582](http://resource.gocloudcoder.com/image-20210119203917582.png)

直接访问

ip:9000/ping

在 $HOME/.jenkins/workspace/jenkins-go-first目录下

你会看到所有从Github上拉取得代码

以及自动编译好的hello二进制文件

为了能够实现自动化部署还需要配置Github，在每次提交代码之后，jenkins能够自动触发拉取Github上的代码以及重新编译部署。但是当重新部署的时候，由于端口被占用，所以还需要一个Shell脚本自动杀死该进程。

### 编写shell(deploy.sh)

> 我使用的是root用户
>
> 如果不是root用户，需要使用sudo

```bash
kill -9 $(lsof -i:9000 -t)
go build -o hello
BUILD_ID=DONTKILLME
nohup ./hello &>hello.log &
```

将deploy.sh推动到Github远程仓库中

将jenkins中的执行shell那一部分改为

```bash
bash ./deploy.sh
```

这样的话离自动化部署就更近了一步

但是每次还是需要手动去点击构建

### 配置Github，每次检测到push就自动构建

安装Github plugin(如果一开始你选择的是安装推荐插件，这个默认是安装的)

#### 配置jenkies的Webhook接收地址

系统设置中的Github高级设置中

记录好webhook的地址

http://nj-jay.com:8080/github-webhook/

![](http://resource.gocloudcoder.com/image-20210119234032454.png)

### 配置Github项目仓库

settings ->webhooks->Add webhooks

填写在jenkins中的webhook地址

然后Add webhooks即可

![image-20210119234345968](http://resource.gocloudcoder.com/image-20210119234345968.png)

### 生成Personal access tokens

Jenkins访问GitHub工程的时候，有的操作是需要授权的，所以我们要在GitHub上生成授权的token给Jenkins使用，这就是Personal access tokens，生成步骤如下:

登录GitHub，进入"Settings"页面，点击左下角的"Developer settings"，如下图：

![image-20210119234542585](http://resource.gocloudcoder.com/image-20210119234542585.png)

![image-20210119234609198](http://resource.gocloudcoder.com/image-20210119234609198.png)

如果怕出问题，所有的选项全部勾选上

### jenkins配置

GitHub Plugin插件，在"系统管理->管理插件"位置检查此插件是否已经安装，没有的话请先安装；
配置GitHub，点击“系统管理->系统设置”，如下图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191112153416973.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0lUc2h1,size_16,color_FFFFFF,t_70)

弹出的页面中，“Kind"选择"Secret text”，"Secret"填入前面在GitHub上生成的Personal access tokens，Description随便写一些描述信息，如下图：

![image-20210119235016727](http://resource.gocloudcoder.com/image-20210119235016727.png)

填写完毕后，点击右侧的"Test connection"按钮，如果信息没有填错，显示的内容如下图所示：

![image-20210119234942760](http://resource.gocloudcoder.com/image-20210119234942760.png)

最后点击保存即可

### 项目构建

在上面的基础上增加几个配置即可

![image-20210119235214118](http://resource.gocloudcoder.com/image-20210119235214118.png)

![image-20210119235229294](http://resource.gocloudcoder.com/image-20210119235229294.png)

![image-20210119235250730](http://resource.gocloudcoder.com/image-20210119235250730.png)

然后再push就会自动的检测。重新编译部署！

有个小坑，由于我的机子有点垃圾，所以push两分钟后才自动检测到，不是配置的原因!

![image-20210120090405451](http://resource.gocloudcoder.com/image-20210120090405451.png)