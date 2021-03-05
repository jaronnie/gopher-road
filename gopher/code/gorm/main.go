package main

import (

	"github.com/nj-jay/gorm/global"

	"github.com/nj-jay/gorm/initalize"

	"github.com/nj-jay/gorm/service"

)

func main() {

	global.GMD_DB = initalize.GormMysql()

	initalize.MysqlTables(global.GMD_DB)

	service.Add()

	service.Query()

	service.Upgrade()

	service.Delete()

}