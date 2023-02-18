## 新概念

**comparable**

> 官方解释: the `comparable` constraint is predeclared in Go. It allows any type whose values may be used as an operand of the comparison operators `==` and `!=`. 
>
> 可比较的类型

**any**

> 官方解释: `any` is an alias for interface{} and is equivalent to interface{} in all ways.
>
> 等同于 interface{}

**constraint**

> 类型约束声明为接口. For example:
>
> ```go
> type Number interface {
>  int64 | float64
> }
> ```
> ```go
> type Number interface {
> 	~int64 | ~float64 // ~ 表示所有的 int64, float64, 即用户自定义的别名
> }
> ```

## 源码

* [go-generic/start](https://github.com/jaronnie/go-generics)

## 参考资料

* [https://go.dev/doc/tutorial/generics](https://go.dev/doc/tutorial/generics)

