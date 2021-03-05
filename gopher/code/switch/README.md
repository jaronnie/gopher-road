# go switch 骚操作

> go中的switch很灵活。可以接受任意形式的表达式
>
> 类型不被限于常量或整数，但必须是相同的类型。或者最终结果为相同类型的表达式
>
> 还可以同时测试多个符合条件的值，使用都好进行分割
>
> 如果在执行完每个分支的代码之后，还希望继续执行后续的分支的代码，可以使用fallthrough关键字来达到目的	

```go
switch result := calculate() { //可以有一个初始化的值，写法相当的优雅
	case result < 0: //可以是一个表达式
		...
	case result > 0:
		...
	default:
		// 0
}
```

```go
switch a, b := x[i], y[j] { //可以平行初始化，并作为判断条件
	case a < b: t = -1
	case a == b: t = 0
	case a > b: t = 1
}
```

```go
	var num1 int = 100

	switch num1 {
	case 98, 99: //可以有多个条件
		fmt.Println("It's equal to 98")
	case 100: 
		fmt.Println("It's equal to 100")
	default:
		fmt.Println("It's not equal to 98 or 100")
	}
}
```

```go
switch i {
	case 0: fallthrough //使用fallthrough关键字
	case 1:
		f() // 当 i == 0 时函数也会被调用
}
```

