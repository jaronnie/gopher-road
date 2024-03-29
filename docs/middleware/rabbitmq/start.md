# 消息队列之 rabbit mq

在此之前我们必须理解几个概念。

* 什么是中间件？
* 什么是单体架构以及什么是分布式架构？
* 什么是同步调用？什么是异步调用？
* 什么是消息队列？

## 中间件

**中间件是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的。**

典型如mysql，redis就是中间件。通俗来讲，中间件是一个非业务类型的技术类组件。

再举个生动形象的例子，比如我开了一个炸鸡店，向用户售卖炸鸡（业务层），我难道要和养鸡场的老板去商讨鸡的价格么（底层）。

显然为了更有效的进货，我会去优选选择一个专门整合鸡场资源的第三方代理商（中间件）去批量购买鸡。因为我并不需要从养鸡场买鸡，然后杀鸡。为了更快更有效的赚钱（提高开发效率），我只需要购买已经处理好的鸡，直接炸好给用户就行。

那我做的事情就很简单，选择一个优质鸡肉的鸡场代理商，而不用考虑到底是公鸡还是母鸡，不用考虑鸡是吃什么长大的。

鸡场代理商做的事情也很简单，与养鸡场老板协商，购买鸡，然后统一处理好鸡，并向商家拟定一个价格（接口）。

整个过程都井然有序，各有各的职责，分工明确，效率更高。

这就是中间件的作用。



## 单体架构和分布式架构

### 单体架构

单体架构将所有的服务混合运行在同一个服务端口中。

当某个模块需要修改功能时，需要将所有的模块组件重新编译，打包，上线。

当服务越来越大，模块间的依赖将会越来越强，耦合性将会越来越大。逐渐的随着业务增长，将会成为一座巨大的“shit”。

这时候，微服务就起到重要的作用了。

### 分布式架构

微服务架构是目前广为关注的一种分布式架构。


将不同的业务拆分成不同的服务，使用不同的数据表，各个服务间不相互依赖。并独立运行在不同的服务端口。

好处就是低耦合，功能改变时只需要将相应的服务进行升级即可。并且项目团队更利于管理，出现问题更容易定位。

## 同步调用和异步调用

### 同步调用

同步调用是一种阻塞式调用，一段代码调用另一端代码时，必须等待这段代码执行结束并返回结果后，代码才能继续执行下去。

同步调用可以认为是打电话。比如我要和鸡场第三方代理商买鸡，我必须要先打通电话才能进一步商讨购买鸡的数量。如果没有打通，我就一直等待电话打通（进程阻塞）。

## 异步调用

异步调用是一种非阻塞式调用，一段异步代码还未执行完，可以继续执行下一段代码逻辑，当代码执行完以后，通过回调函数返回继续执行相应的逻辑，而不耽误其他代码的执行。

异步调用可以认为是发短信。我不用管代理商手机是否是开机装态还是关机状态，我直接发短信告诉代理商我要购买鸡的数量。

## 消息队列

前面介绍了这么多基础，终于可以说说消息队列了。

## 队列

当然首先是介绍队列的概念了。

它是先进先出的一种数据结构。

可以理解为有不同的商家向代理商购买鸡，当然是谁先买鸡就先把鸡给谁了。

### 消息队列

![img](https://pic1.zhimg.com/80/v2-1c69d2be58358e9743e39130b41993a3_720w.jpg?source=1940ef5c)

我们把它称为MQ(Message Queue)。

消息队列在上述的比喻中，可以认为是一个电信服务商。首先需要明白的一点是我们发信息不是直接把信息发送给另一个人，而需要经过电信服务商（移动，电信，联通）的转送。

有不同的卖鸡的商家向鸡场代理商发短信商讨买鸡的事情，发完短信之后，信息发送到了电信服务商那里，电信服务商把信息存在一个消息队列中，然后再把信息转送给鸡场代理商。这当然遵循的原则是先进先出了。所以鸡场代理商接收到信息的时间也不一样，先收到谁的消息就先把鸡卖给谁！

### 消息队列的特性

解耦，在不同业务间必须要通过协议去进行沟通（如需要同步数据库等），我们通过一个消息队列进行沟通，低耦合。

削峰，在高并发的时候，消息队列可以起到减压的作用。因为它是异步调用，不会阻塞。

提高系统的拓展性，消息队列可以搭建集群。

## rabbit mq

介绍了这么多，我们终于大概清楚了消息队列。

常用的消息队列有

* rabbit mq
* active mq
* rocker mq
* kafka

本篇主要介绍rabbit mq的使用。

### 介绍

rabbit mq是一个消息代理：它接受并转发消息。你可以把它想象成一个邮局：当你把你想要邮寄的邮件放进一个邮箱时，你可以确定邮差先生或女士最终会把邮件送到你的收件人那里。在这个比喻中，rabbit mq是一个邮箱、一个邮局和一个邮递员。

rabbit mq和邮局的主要区别在于它不处理纸张，而是接受、存储和转发二进制数据块——消息。

它是一个生产消费模型。生产即是发送消息，消费即接受消息。

支持多个协议，常用的协议是amqp。

### rabbit mq入门之hello world

在下图中，“ P”是我们的生产者，“ C”是我们的消费者。中间的框是一个队列——rabbit mq代表消费者保存的消息缓冲区。

![(P) -> [|||] -> (C)](https://www.liwenzhou.com/images/Go/rabbitmq/tutorials01/python-one.png)

我们做的Demo就是通过P将hello world发送到消息队列中，再从消息队列中把消息发送给C。

P可以认为是一个服务端，C可以认为是一个客户端。

首先安装rabbit mq软件到linux操作系统上。

上篇我们介绍了Docker，所以我们直接使用Docker来运行rabbit mq容器。

```shell
docker run -d --restart=always --name myrabbitmq -p 5672:5672  rabbitmq
# -d 表示后台运行
# --restart=always 表示自动重启
# --name myrabbitmq 指定容器名字
# -p 5672:5672 暴露容器端口号5672，并映射到宿主机端口5672
# rabbitmq 使用官方镜像rabbitmq
```

![image-20210310193558444](http://oss.jaronnie.com/image-20210310193558444.png)

接下来我们安装golang rabbitmq客户端 amqp

```shell
go get github.com/streadway/amqp
```

#### 发送消息

* 连接到rabbitmq服务器
* 创建一个通道
* 声明队列
* 将消息发送到队列中

```go
package main
import (
	"fmt"
	"github.com/streadway/amqp"
	"log"
)
func main() {
	// 连接rabbitmq服务器
	conn, err := amqp.Dial("amqp://guest:guest@nj-jay.com:5672")
	failOnError(err, "连接rabbitmq失败")
	defer conn.Close()
	//创建一个通道
	ch, err := conn.Channel()
	defer ch.Close()
	failOnError(err, "创建ch通道失败")
	//声明要发送到的队列 "hello"
	q, err := ch.QueueDeclare(
		"hello",
		false,
		false,
		false,
		false,
		nil,
	)
	//消息
	message := "hello world"
	//将消息发送到声明的队列
	err = ch.Publish(
		"",
		q.Name,
		false,
		false,
		amqp.Publishing{
			ContentType: "text/plain",
			Body: []byte(message),
		},
	)
	failOnError(err, "发送失败")
	fmt.Println("发送成功")
}
func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}
```

每当我们运行该代码，运行rabbitmq的容器将会接收到相应。

使用docker logs -f myrabbitmq就可以查看

![image-20210310195251559](http://oss.jaronnie.com/image-20210310195251559.png)

每运行一次，将建立连接，然后运行完毕连接断开。

接下来，我们应该要从rabbitmq中间件中获取消息。

#### 接收消息

```go
package main

import (
	"fmt"
	"github.com/streadway/amqp"
	"log"
)
func main() {
	// 连接到rabbitmq中
	conn, err := amqp.Dial("amqp://guest:guest@nj-jay.com:5672")
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()
	//创建一个通道用于与发送消息的通道连接
	ch, err := conn.Channel()
	failOnError(err, "创建通道失败")
	//声明队列
	q, err := ch.QueueDeclare(
		"hello",
		false,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to declare a queue")
	//创建获取消息的通道
	msgs, err := ch.Consume(
		q.Name,
		"",
		true,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "注册获取消息的通道失败")
	//使用goroutine获取消息，并一直阻塞在这里，不让通道退出
	exit := make(chan bool, 1)
	go func() {
		for m := range msgs {
			fmt.Println(string(m.Body))
		}
	}()
	<- exit
}
func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}
```

我们运行接收消息的程序，再运行发送消息的命令。可以看到正常接收到消息。

或者我们先运行发送消息，再运行接收消息，依然可以正常接收到消息。邮箱的机制保证了消息传递的可靠性。

![image-20210310202348798](http://oss.jaronnie.com/image-20210310202348798.png)

### rabbit mq重大意义

在一个项目中，通过这个中间件，我们可以用多种语言同时开发。

如支付服务采用java，查询业务采用Go，修改业务采用python。

并能保证消息消息传递和接收的可靠性。

并且是异步调用的，不仅效率高，而且高并发性能好，在微服务架构中非常的适合。

因此在开发大型项目中，rabbit mq经常使用。