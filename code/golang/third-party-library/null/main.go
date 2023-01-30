package main

import (
	"fmt"
	"gopkg.in/guregu/null.v4"
)

type Info struct {
	IntType    null.Int
	StringType null.String
	FloatType  null.String
	BoolType   null.Bool
}

func main() {
	info := Info{StringType: null.StringFrom("1")}
	fmt.Println(info.StringType.Valid)
}
