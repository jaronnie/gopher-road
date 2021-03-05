# git打包并安装库

## 打包库

我们知道当使用其他开发者所写的库的时候

安装方式为　go get github.com/xx/xx

那么如果需要将自己写的库也打包到github上的时候

该怎么操作呢？

首先创建一个工程目录 然后git进行初始化

去github上面创建一个仓库

然后添加所有文件到仓库并提交

```shell
mkdir uc
cd uc
go mod init
git init
git add *	
git commit -m "xxxxx"
git remote add origin git@github.com:×××××/uc.git
git remote add origin git@github.com:NNNN/uc.git  
```

测试用例在uc目录中

```go
package uc

func HelloWorld() string {

    return "HelloWorld"

}
```

此时在github个人主页上可以查看相关文件

## 安装所写的库并测试

```shell
go get -u github.com/xx/xx
```

```go
package main

import (
    "fmt"
    "github.com/nj-jay/uc"
)

func main() {
    fmt.Println(uc.HelloWorld())
}
//运行结果:HelloWorld
```

## 更新库

使用git tag

比如创建第一个版本v0.0.1

```shell
git tag v0.0.1
git add
git commit
git push -u origin master --tags #上传v0.0.1版本

go get -u github.com/nj-jay/uc@v0.0.1

#修改代码后
git tags v0.0.2
git add
git commit
git push -u origin master --tags
go get -u github.com/nj-jay/uc@v0.0.2

#这样的话代码就更新了
```

