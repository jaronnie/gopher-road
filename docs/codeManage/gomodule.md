# 实战 go module 使用

作为一个 gopher，对于 go module 的一些规则还是要明白的，否则工作中会遇到一些问题。

或许我们已经习惯了使用别人已经开发好的包，我们只需要 `go get` 即可。

但是 如果不搞清楚 go module 的一些规则，我们在使用的过程中就会出现一些问题。

另外，在公司中开发项目的时候，我们需要写一个 package 供其他模块使用，那么就必须要搞清楚 go module 的机制了。

下面我们就从开发一个 package 来实战 go module 的各种机制。

## 环境准备

* go（GO111MODULE=on）
* git
* github

## 初始化 package

> 注意：请将 jaronnie 替换成你自己的 github 用户名

```shell
mkdir tourmod
cd tourmod
go mod init github.com/jaronnie/tourmod
touch tour.go
```

在 `tour.go`中写入如下内容：

```go
package tourmod

var (
	version = "v0.1.0"
)

func GetVersion() string {
	return version
}
```

```shell
git init
git add *
git commit -m "v0.1.0"
```

然后在 github 上创建一个仓库，仓库名为 tourmod。

```shell
git remote add origin git@github.com:jaronnie/tourmod.git
git push -u origin master
```

此时，可以在 github 上看到如下内容：

![](https://oss.jaronnie.com/image-20210822135145682.png)

## 版本管理

首先初始化我们的项目，需要依赖上面我们写的 package.

```shell
mkdir mytour
cd mytour
go mod init mytour
touch main.go
```

在 main.go 中写入如下内容：

```go
package main

import (
	"fmt"

	"github.com/jaronnie/tourmod"
)

func main() {
	fmt.Println(tourmod.GetVersion())
}
```

然后 go get 下载模块：

```shell
go get github.com/jaronnie/tourmod
```

![](https://oss.jaronnie.com/image-20210822135941366.png)

此时查看 go.mod 文件的内容.

![](https://oss.jaronnie.com/image-20210822140432205.png)

由于我们没有指定版本，而且我们的仓库中没有打 tag，所以 go module 按照自己的内部规则进行拉取。其中 v0.0.0 是版本信息，一串数字是拉取版本的 commit 时间，后面的字符串为所拉取版本的 commit 哈希值。

下面我们发布我们的第一个正式版 `v1.0.0`：

```shell
cd tourmod
```

修改 tour.go 的内容为如下：

```go
package tourmod

var (
	version = "v1.0.0"
)

func GetVersion() string {
	return version
}
```

```shell
git add *
git commit -m "v1.0.0"
git push -u origin master
```

可以看到：

![](https://oss.jaronnie.com/image-20210822141300914.png)

下面我们为此次提交的代码打一个 tag：

点击 create a new release.

![](https://oss.jaronnie.com/image-20210822141521858.png)

![](https://oss.jaronnie.com/image-20210822141546091.png)

v1.0.0 发布成功，下面我们进入我们写项目目录：

```shell
cd mytour
go get github.com/jaronnie/tourmod@v1.0.0
```

![](https://oss.jaronnie.com/image-20210822142117320.png)

可以看到，版本替换成功。此时运行 `go run main.go`

![](https://oss.jaronnie.com/image-20210822142213472.png)

现在由于某种原因，我们对 package 进行了一个重大的重构，版本从 v1 上升到 v2.

```shell
cd tourmod
```

修改 `tour.go`为如下内容：

```go
package tourmod

var (
	version = "v2.0.0"
)

func GetVersion() string {
	return version
}
```

修改 go.mod 为：

```go
module github.com/jaronnie/tourmod/v2
```

```shell
git add *
git commit -m "v2.0.0"
git push -u origin master
```

再来打一个 tag：

![](https://oss.jaronnie.com/image-20210822142938912.png)

![](https://oss.jaronnie.com/image-20210822143102782.png)

再进入我们的 mytour 项目

```shell
cd mytour
```

修改 go.mod 为：

```go
module mytour

go 1.16

require github.com/jaronnie/tourmod/v2 v2.0.0
```
执行 `go mod tidy` 将会把版本替换为 v2.0.0

修改 main.go 为如下内容：

```go
package main

import (
	"fmt"

	"github.com/jaronnie/tourmod/v2"
)

func main() {
	fmt.Println(tourmod.GetVersion())
}
```

## go package 发布版本的一些规则

一般来说，格式为如下：

v1.2.3-xxx

* 1 为主版本号（做不了兼容的api修改）
* 2 为次版本包（做了向下兼容的功能性新增）

* 3 为修订号：做了向下兼容的问题修正
* xxx 为一些自己设置的环境，如 v1.2.3-develop，为 develop环境

打 tag 的时候，如果未遵循规则，该版本是无法使用 go get 拉取的。

如果发布了 v2 开头的一些版本，那么 go.mod 文件需要在尾部加上 /v2，否则无法被正常拉取。

如 `module github.com/jaronnie/tourmod/v2`

在使用该库的时候，也需要在尾部加上 /v2

如 `import "github.com/jaronnie/tourmod/v2"`

