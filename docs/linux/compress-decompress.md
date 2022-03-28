# 解压缩命令

本文介绍几种常见的解压缩命令

常见压缩包形式

* .gz形式
* .zip
* .bz2
* .tar.gz

<!--more-->

## .gz

```
$ gzip filename # 压缩
$ gunzip filename # 解压
```
可以看到压缩之后源文件没了

解压之后源文件也没了

注意：

gzip命令是不能压缩目录的

## .tar.gz 

tar命令是用来给目录打包

一般配合.gz使用

打包并压缩

```
$ tar -zcvf newcontent content
# 压缩
$ tar -zxvf content
# 解压
```

-z 进行解压缩

-c 创建压缩文件

-x 创建解压文件

-f 指定解压文件

-v 显示详细信息(可不加)

## .zip

这个形式的压缩文件在各个系统中通用

```
$ zip newfilename filename
$ zip -r newcontentname contentname
$ unzip filename
$ unzip -O cp936 filename #乱码时使用此选项有效
$ unzip contentname
```

## .bz2

```
$ bzip2 -k filename
# -k保留源文件
# 仍旧不能压缩目录 配合.tar可以压缩目录
$ bunzip2 filename
```
## .tar.bz2

```
$ tar -cjf newcontentname contentname
# 压缩
$ tar -xjf contentname
# 解压
```
