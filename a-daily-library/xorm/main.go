package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"xorm.io/xorm"
)

func main() {
	driverName := "mysql"
	//dataSourceName := "root:ag0IX0T21ZlvLkKz@tcp(localhost:3306)/test"
	dataSourceName := "root:Blocface@123@tcp(172.16.30.173:3306)/blocface"
	// new engine
	engine, err := xorm.NewEngine(driverName, dataSourceName)
	if err != nil {
		panic(err)
	}
	err = engine.Ping()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("connect db success")
	condition := "dri_type=?"

	var orderBy string
	if orderBy == "" {
		orderBy = "time_create DESC"
	}
	offset := 0
	size:= 10
	rs, err := engine.Query(fmt.Sprintf("SELECT *, (SELECT version FROM driver WHERE machine.driver_id=driver.id) AS driver_version, (SELECT uuid FROM driver WHERE machine.driver_id=driver.id) AS driver_uuid FROM machine WHERE %s ORDER BY %s LIMIT %d,%d", condition, orderBy, offset, size), "docker")
	fmt.Println(err)
	for _, v := range rs {
		fmt.Println(string(v["time_create"]))
		fmt.Println(string(v["driver_version"]))
		fmt.Println(string(v["driver_uuid"]))
	}
}