# 为什么程序员需要学习 linux

**本文仅针对程序员而言**

**讲述我的linux使用情况**

**以及从细节浅谈为什么程序员为什么要学习 linux**

**文章很长，有兴趣可细看**

**并不是说我用和别人不一样的操作系统而有任何优越感**

**而是它确确实实能让程序员认知到更多的东西**

**本文不谈安全性**

**暂且不谈多用户多线程**

* 体验性(linux 提高程序员的专注度，无各种弹窗广告)
* 提高程序员的效率(前提当你学会了各种操作，自定义各种快捷键，以及各种开源的工具)
* 提升视野，了解更多关于计算机的知识(了解更多底层的东西)
* 拥抱开源(github 很多开源代码)
* "一劳永逸"(配置一次，持续受益)
* 增强动手能力(万事需要自己动手敲方能熟悉)
* 包管理．删除时不会存在垃圾文件．linux分配200G完全够用

## 开始使用linux

19年8月至今，使用 linux 已经半年多

因寒假疫情期间看了几本关于 linux 的书籍

初步使用：细讲linux基础知识(配合 b 站的 linux 教学视频)

[兄弟连linux教学视频](https://www.bilibili.com/video/av18156598?from=search&seid=15716871197481579593)

可以说我们使用windows从来都没有好好的去学习过

仅仅停留在会用windows

**而对于程序员来说，仅仅会用是不行的**

**更重要的是了解底层的东西，如文件系统，进程，虚拟内存等等**

建议从 linux 的一个发行版 ubuntu 开始入手(装双系统)

你会发现开始的时候是这样的

![](https://resource.gocloudcoder.com/3.22.12.31.png)

也仅仅会用

cd ls mv rm vim cp 等命令

安装一个pycharm qq 微信 网易云音乐等软件都有点不知所措

没有windows那么容易上手

而且很多东西弄起来麻烦

可以说刚入门毫无体验

不断的google......

## 慢慢完善 linux (不断的减少使用 windows 的次数)

当你会装各种软件

如Pycharm vscode qq wps 微信 网易云音乐等软件

基本可以正常使用 linux 后

没有 windows 那么容易上手

而且很多东西弄起来麻烦开始不满足于ubuntu原始的桌面主题

于是,稍微美化了一下(MAC 主题优化)

![](https://resource.gocloudcoder.com/3.22.13.02.png)

此时，你会更加喜欢上 linux

**很多人说美化linux就是在浪费时间**

**我并不完全认同这句话**

虽然说美化一下的确是会浪费几个钟头的

那我想理论一下

你有多少时间被你浪费了

发呆，玩游戏等等

而当你美化了一下你的 linux 之后

使用感受完全提升了一个档次

体验感极其的好

**学习linux也是需要时间的吧**

**不是逐步的学习怎么能够熟练的玩转纯命令行界面**

不得不去喷某些人

总是误导新手

总以为学习某些东西是一下子就会的

**任何东西能玩的熟练都是一个逐渐学习的过程**

## 进阶linux

当你完全把 linux 当做你日常用的操作系统后

开始深入进阶学习 linux command line

推荐一本英文书籍

[下载链接](https://resource.gocloudcoder.com/%28by-William-E.-Shotts%29-The-Linux-Command-Line-A-C-3704056-%28z-lib.org%29.pdf)

<img src="https://resource.gocloudcoder.com/3.22.13.07.png" style="zoom:67%;" />

不是特别建议新手看鸟哥的linux私房菜

这本英文书籍很好的讲述的linux的基础知识

当你学会了

* 命令行下载需要的软件或者一些工具(sudo apt install /  sudo apt remove)
* 查看文件的各种方式(cat less head tail等)
* 利用命令行查找需要的文件(locate find等)
* 通配符(* / [A-Z] )
* 输入输出重定向
* 管道符的使用
* 终端运行c c++ java python程序
* 使用链接命令(ln)　挂载命令(mount)
* 学会设置文件权限(chmod chown 等)
* 根据网址下载资源(wget url)
* git / github 的使用(git add / git commit / git push等 )
* 设置alias 理解环境变量 并添加自己的环境变量
* 进阶使用vim(一些快捷键的使用)
* 简单的脚本书写(避免做重复的工作)
* 简单修改各种配置文件(bash 的 ~/.bashrc vim的 ~/.vimrc 等等)
* 等等

最喜欢的莫过于设置alias别名(助力理解Everything is a file.)

可以简化命令操作

可以看到我打开网易云音乐等软件都是用命令

原因是在理解了linux下一切皆为文件后

想到软件的启动方式肯定也是通过一个文件的

于是利用locate命令找到相关的启动文件

将相关的文件运行并用别名表示

![](https://resource.gocloudcoder.com/tty.gif)

以及unix设计哲学：环境变量

可执行程序放在某些文件夹下会被shell自动检索

​![](https://resource.gocloudcoder.com/test2.gif)



## 入门服务器

作为程序员你必须明白的是

我们现在的很多东西都依赖于服务器

如网站,app等都部署在服务器上(公网ip)

云计算等在这个时代大放光彩

玩linux必须是要学会玩服务器的

* ssh 登录服务器
* 搭建博客，云笔记本等

通过玩服务器提高继续学习linux的兴趣

因为这个时候你可以利用它做一些实际的东西了

比如搭建一个网站

运行一个app等

![](https://resource.gocloudcoder.com/test3.gif)

当然 remote 是我用了 alias 简写后的命令

实际上是用了 ssh 命令

搭建博客网上有很多教程

![](https://resource.gocloudcoder.com/3.22.15.29.png)

## 高阶linux

推荐

<img src="https://resource.gocloudcoder.com/3.22.16.08.png" style="zoom: 67%;" />

全书介绍脚本的书写

作用很大

会有一个全新的见解！

* sed / gawk
* 判断if 
* 循环for / while / until
* 函数function
* 各种特殊符号(~ / \$# \$*  )
* 正则表达式
* 有界面的脚本
* 编译自己写的c程序生成二进制可执行文件(放进可检索的文件夹，重复利用)
* python + shell 脚本　无敌！

![](https://resource.gocloudcoder.com/test5.gif)

## 那对于程序员来说为什么要费这么大力气学这些东西呢？

不妨从各种使用细节来看

* windows没有一个好用的命令行界面

而linux(配置后的vim+tmux分屏后的效果)

![](https://resource.gocloudcoder.com/test4.gif)

linux配置各种环境很方便

* gcc(c / c++)
* java 
* python + anaconda
* mysql
* tensorflow / pytorch / caffe
* 配置适合自己的vim编辑器(其他编辑器基本可以不需要使用了)

![](https://resource.gocloudcoder.com/3.22.20.28.png)

**见过太多使用windows的，老是出各种各样的问题**

所以推荐coder 使用 linux

使用linux后

感觉变化挺大的

开始熟练使用各种工具

命令行敲的也越来越熟练

开阔了很多的视野