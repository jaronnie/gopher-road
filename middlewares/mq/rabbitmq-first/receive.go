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
	//使用goroutine获取消息
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
