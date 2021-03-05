package initalize

import (

	"fmt"

	"github.com/nj-jay/gorm/model"

	"github.com/spf13/viper"

	"gorm.io/driver/mysql"

	"gorm.io/gorm"

	"os"

	"strings"

)

func GormMysql() *gorm.DB {

	viper.SetConfigName("config")

	viper.SetConfigType("toml")

	viper.AddConfigPath("./conf")

	err := viper.ReadInConfig()

	if err != nil {

		fmt.Println("read error")

		os.Exit(0)
	}

	username := viper.GetString("mysql.username")

	password := viper.GetString("mysql.password")

	ip := viper.GetString("mysql.ip")

	port := viper.GetString("mysql.port")

	database := viper.GetString("mysql.database")

	path := strings.Join([]string{username, ":", password,
		"@(", ip, ":", port, ")/", database, "?charset=utf8&parseTime=true&loc=Local"}, "")

	if db, err := gorm.Open(mysql.Open(path), &gorm.Config{}); err != nil {

		os.Exit(0)

		return nil


	} else {

		sqlDB, _ := db.DB()

		sqlDB.SetMaxIdleConns(10)

		sqlDB.SetMaxOpenConns(100)

		return db

	}

}


func MysqlTables(db *gorm.DB) {


	err := db.AutoMigrate(

		&model.User{},

		)

	if err != nil {

		fmt.Println("register table error")

	}

}