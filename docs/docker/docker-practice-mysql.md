# docker实战二：运行mysql容器

适用场景：

* 简化编程环境安装
* 版本控制

由于种种原因，安装这类型软件的时候比较麻烦，容器出问题。

因此直接使用Docker官方镜像比较好。

并且提供了多个版本，可以运行多个容器跑多个版本的服务。

## 拉取镜像

在此之前我们可以使用docker search mysql查看。

> 小tips
>
> 后面OFFICIAL OK说明是官方的镜像。都是开源的！
>
> 类似corcleci/mysql都是其他用户个人定制的镜像。谨慎使用

![image-20210312134046996](http://oss.jaronnie.com/image-20210312134046996.png)

查看具体的版本需要在[官网](hub.docker.com)上进行查看。

由于网站在国外，电脑访问非常慢，所以我用手机翻墙演示一下。

<img src="http://oss.jaronnie.com/image-20210312135250312.png" alt="image-20210312135250312" style="zoom: 67%;" />

```shell
docker pull mysql:5.7
```

## 创建mysql容器并后台运行服务

第一步骤也可省略。直接运行下面的命令。

-e 表示指定环境变量 用于设置登录密码。否则容器无法正常运行。

```shell
 docker run -d --name=mymysql -p 33060:3306 -e MYSQL_ROOT_PASSWORD="123456"  mysql:5.7
```

## 进入容器创建一个数据库hello

```shell
 docker exec -i -t mymysql bash
 mysql -uroot -p123456
 create database hello;
```

## 测试

使用gorm进行测试

```go
package main
import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Student struct {
	Name string
	Age int
}

func main() {
	dsn := "root:123456@tcp(localhost:33060)/hello?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("连接成功")
	err = db.AutoMigrate(&Student{})
	if err != nil {
		fmt.Println("创建失败")
		return
	}
	db.Create(&Student{
		Name : "nj",
		Age : 21,
	})
	var stu Student
	db.First(&stu, "name = ?", "nj")
	fmt.Println(stu.Age)
}
```

<img src="http://oss.jaronnie.com/image-20210312162544468.png" alt="image-20210312162544468" style="zoom:150%;" />

