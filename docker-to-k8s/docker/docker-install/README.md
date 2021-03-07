# docker安装

推荐在linux上使用。本教程也在linux环境上进行讲解。

当然一般来说我们使用windows或者mac上进行开发，所以有必要在windows和mac上进行安装使用，但稍微麻烦点，因为Docker是基于Linux内核特性开发而成。

所以必须先安装虚拟机，在虚拟机中安装linux环境，然后再安装Docker。

现在不管在哪个平台上安装docker都是很简单的事情，在linux上有一键安装脚本，在win或者mac上有打包好的exe文件。

## linux上安装（root用户）

使用官方脚本一键安装即可

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

或者

```shell
curl -sSL https://get.daocloud.io/docker | sh
```

启动docker

```shell
sudo systemctl start docker
```

如果你是非root用户，可以将用户名添加到docker组中，使得普通用户可以直接使用。

## windows上安装

官方提供了安装包

https://hub.docker.com/editions/community/docker-ce-desktop-windows

但是仅适用于 Windows 10 操作系统专业版、企业版、教育版和部分家庭版！

如果存在问题，可以使用toolbox等工具进行安装

## mac上安装

还没入手mac

敬请期待！