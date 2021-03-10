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
	failOnError(err, "声明队列失败")
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