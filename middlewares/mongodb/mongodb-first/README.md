# mongodb入门之增删改查

## 相关概念

| **MongoDB术语/概念** | **说明**                            | **对比SQL术语/概念** |
| -------------------- | ----------------------------------- | -------------------- |
| database             | 数据库                              | database             |
| collection           | 集合                                | table                |
| document             | 文档                                | row                  |
| field                | 字段                                | column               |
| index                | index                               | 索引                 |
| primary key          | 主键 MongoDB自动将_id字段设置为主键 | primary key          |

## Docker容器运行mongo服务

```shell
docker run -d --name=mymongo --restart=always -p 27017:27017 mongo:latest
```

## 使用mongo

进入mongo解释器

```shell
docker exec -i -t mymongo mongo
```

### 数据库相关命令

* 查看数据库

```shell
show dbs
```

![image-20210312224911034](http://picture.nj-jay.com/image-20210312224911034.png)

* 切换到制定数据库hello，如果没有则创建

```shell
use hello
```

<img src="http://picture.nj-jay.com/image-20210312224950504.png" alt="image-20210312224950504" style="zoom:200%;" />

* 显示当前所在数据库

```shell
db
```

<img src="http://picture.nj-jay.com/image-20210312225038087.png" alt="image-20210312225038087" style="zoom:200%;" />

* 删除当前数据库

```shell
db.dropDatabase()
```

<img src="http://picture.nj-jay.com/image-20210312225255723.png" alt="image-20210312225255723" style="zoom:200%;" />

### 集合常用命令

* 查看所有的集合

```shell
show collections
```

* 创建集合

```shell
db.createCollection("student")
```

<img src="http://picture.nj-jay.com/image-20210312225547424.png" alt="image-20210312225547424" style="zoom: 150%;" />

* 删除指定集合

```shell
db.student.drop()
```

<img src="http://picture.nj-jay.com/image-20210312225859358.png" alt="image-20210312225859358" style="zoom:200%;" />

### 文档常用命令

* 插入一条文档

```shell
 db.student.insertOne({"name":"gocloudcoder","age":21})
```

* 插入多条文档

```shell
db.student.insertMany([
	{name:"ch",age:21},
	{name:"dww",age:21}
])
```

* 查询某集合中所有的文档

```shell
db.student.find()
```

<img src="http://picture.nj-jay.com/image-20210312232142468.png" alt="image-20210312232142468" style="zoom:150%;" />

* 更新文档

```shell
db.student.update({"name":"dww"},{"name":"dww", "age":18})
```

![image-20210312232731764](http://picture.nj-jay.com/image-20210312232731764.png)

* 删除一条文档

```shell
db.student.deleteOne({"name":"dww"})
```

![image-20210312232955870](http://picture.nj-jay.com/image-20210312232955870.png)

* 查询文档

```shell
db.student.find({"age":21}) # 查询年龄等于21
```

| 操作       | 格式                     | 范例                                           | RDBMS中的类似语句 |
| :--------- | :----------------------- | :--------------------------------------------- | :---------------- |
| 等于       | `{<key>:<value>`}        | `db.student.find({"age":21}).pretty()`         | `where age = 21`  |
| 小于       | `{<key>:{$lt:<value>}}`  | `db.student.find({"age":{$lt:21}}).pretty()`   | `where age < 21`  |
| 小于或等于 | `{<key>:{$lte:<value>}}` | `db.student.find({"age":{$lte:21}}).pretty()`  | `where age <= 21` |
| 大于       | `{<key>:{$gt:<value>}}`  | `db.student.find({"age":{$gt:21}}).pretty()`   | `where age > 21`  |
| 大于或等于 | `{<key>:{$gte:<value>}}` | `db.studentl.find({"age":{$gte:21}}).pretty()` | `where age >= 21` |
| 不等于     | `{<key>:{$ne:<value>}}`  | `db.student.find({"age":{$ne:21}}).pretty()`   | `where age != 50` |



## go操作mongodb

* 连接数据库

```go
package main
import (
	"context"
	"fmt"
	"log"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)
func main() {
	// 设置客户端连接配置
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	// 连接到MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	// 检查连接
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to MongoDB!")
}
```