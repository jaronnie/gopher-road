package main

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

type Student struct {
	Name string
	Age int32
}

func main() {
	// 设置客户端连接配置
	clientOptions := options.Client().ApplyURI("mongodb://nj-jay.com:27017")
	// 连接到MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	// 检查连接
	err = client.Ping(context.TODO(), nil)
	defer client.Disconnect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}
	collection := client.Database("hello").Collection("student")

	////插入一条文档
	//s1 := Student{
	//	Name : "zyf",
	//	Age  : 21,
	//}
	//res, err := collection.InsertOne(context.TODO(), s1)
	//if err != nil {
	//	log.Fatal(err)
	//}
	//fmt.Println(res.InsertedID)
	//
	////插入多条文档
	//s2 := Student{
	//	Name: "gocloudcoder",
	//	Age: 22,
	//}
	//s3 := Student{
	//	Name: "hs",
	//	Age: 21,
	//}
	//resm, err := collection.InsertMany(context.TODO(), []interface{}{s2, s3})
	//if err != nil {
	//	fmt.Println(err)
	//}
	//fmt.Println(resm.InsertedIDs)
	//
	////更新文档
	//filter := bson.D{{"name", "zyf"}}
	////update := bson.M{"$set":Student{Name: "njnjnj"}}
	////one, err := collection.UpdateOne(context.TODO(), filter, update)
	////if err != nil {
	////	log.Fatal(err)
	////}
	////fmt.Println(one.ModifiedCount)
	//
	////查询文档
	//var stu Student
	//err = collection.FindOne(context.TODO(), filter).Decode(&stu)
	//if err != nil {
	//	log.Fatal(err)
	//}
	//fmt.Println(stu)
	filter := bson.D{{"name", "zyf"}}
	res, err := collection.DeleteOne(context.TODO(), filter)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(res.DeletedCount)
}
