package service

import (
	"fmt"
	"github.com/nj-jay/gorm/global"
	"github.com/nj-jay/gorm/model"
)

//添加
func Add() {

	user := model.User{Name: "Jinzhu", Age: 18, Birthday: "2000.06.19"}

	global.GMD_DB.Create(&user)

}


//删除
func Delete() {

	global.GMD_DB.Delete(&model.User{}, 10)


}


//更新
func Upgrade() {

	var user model.User

	global.GMD_DB.Model(&model.User{}).Where("name=?", "nj-jay").Update("name", "hello")

	global.GMD_DB.Where("id=?", 6).First(&user)

	fmt.Println(user)

}

//查询
func Query() {

	var user model.User

	global.GMD_DB.First(&user)

	fmt.Println("============first=============")

	fmt.Println(user)

	fmt.Println("=============all==============")

	var users []model.User

	global.GMD_DB.Find(&users)

	fmt.Println(users)

	fmt.Println("==========WHERE===========")

	global.GMD_DB.Where("name=?", "nj-jay").Find(&users)

	fmt.Println(users)
}
