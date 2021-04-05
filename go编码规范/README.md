# go编码规范（uber）

> 参考链接
>
> https://github1s.com/gocloudcoder/uber_go_guide_cn

- [指向 interface 的指针](#指向-interface-的指针)

- [Interface 合理性验证](#interface-合理性验证)

 - [接收器 (receiver) 与接口](#接收器-receiver-与接口)

 - [零值 Mutex 是有效的](#零值-mutex-是有效的)

 - [在边界处拷贝 Slices 和 Maps](#在边界处拷贝-slices-和-maps)

  - [接收 Slices 和 Maps](#接收-slices-和-maps)

  - [返回 slices 或 maps](#返回-slices-或-maps)

 - [使用 defer 释放资源](#使用-defer-释放资源)

 - [Channel 的 size 要么是 1，要么是无缓冲的](#channel-的-size-要么是-1要么是无缓冲的)

 - [枚举从 1 开始](#枚举从-1-开始)

 - [使用 time 处理时间](#使用-time-处理时间)

  - [使用 `time.Time` 表达瞬时时间](#使用-timetime-表达瞬时时间)

  - [使用 `time.Duration` 表达时间段](#使用-timeduration-表达时间段)

  - [对外部系统使用 `time.Time` 和 `time.Duration`](#对外部系统使用-timetime-和-timeduration)

 - [错误类型](#错误类型)

 - [错误包装 (Error Wrapping)](#错误包装-error-wrapping)

 - [处理类型断言失败](#处理类型断言失败)

 - [不要 panic](#不要-panic)

 - [使用 go.uber.org/atomic](#使用-gouberorgatomic)

 - [避免可变全局变量](#避免可变全局变量)

 - [避免在公共结构中嵌入类型](#避免在公共结构中嵌入类型)

 - [避免使用内置名称](#避免使用内置名称)

 - [避免使用 `init()`](#避免使用-init)

 - [追加时优先指定切片容量](#追加时优先指定切片容量)

- [性能](#性能)

 - [优先使用 strconv 而不是 fmt](#优先使用-strconv-而不是-fmt)

 - [避免字符串到字节的转换](#避免字符串到字节的转换)

 - [指定容器容量](#指定容器容量)

  - [指定Map容量提示](#指定map容量提示)

  - [指定切片容量](#指定切片容量)

- [规范](#规范)

 - [一致性](#一致性)

 - [相似的声明放在一组](#相似的声明放在一组)

 - [import 分组](#import-分组)

 - [包名](#包名)

 - [函数名](#函数名)

 - [导入别名](#导入别名)

 - [函数分组与顺序](#函数分组与顺序)

 - [减少嵌套](#减少嵌套)

 - [不必要的 else](#不必要的-else)

 - [顶层变量声明](#顶层变量声明)

 - [对于未导出的顶层常量和变量，使用_作为前缀](#对于未导出的顶层常量和变量使用_作为前缀)

 - [结构体中的嵌入](#结构体中的嵌入)

 - [使用字段名初始化结构体](#使用字段名初始化结构体)

 - [本地变量声明](#本地变量声明)

 - [nil 是一个有效的 slice](#nil-是一个有效的-slice)

 - [缩小变量作用域](#缩小变量作用域)

 - [避免参数语义不明确(Avoid Naked Parameters)](#避免参数语义不明确avoid-naked-parameters)

 - [使用原始字符串字面值，避免转义](#使用原始字符串字面值避免转义)

 - [初始化结构体](#初始化结构体)

  - [使用字段名初始化结构](#使用字段名初始化结构)

  - [省略结构中的零值字段](#省略结构中的零值字段)

  - [对零值结构使用 `var`](#对零值结构使用-var)

  - [初始化 Struct 引用](#初始化-struct-引用)

 - [初始化 Maps](#初始化-maps)

 - [字符串 string format](#字符串-string-format)

 - [命名 Printf 样式的函数](#命名-printf-样式的函数)

- [编程模式](#编程模式)

 - [表驱动测试](#表驱动测试)

 - [功能选项](#功能选项)

- [Linting](#linting)

 - [Lint Runners](#lint-runners)

- [Stargazers over time](#stargazers-over-time)

## 1.指向interface的指针

接口在底层的表示：

* 一个指向某些特定类型信息的指针。可以视为"type"。
* 数据指针。如果存储的数据是指针，则直接存储。如果存储的数据是一个值，则存储指向该值得指针。

如果希望接口方法修改基础数据，则必须使用指针传递（将对象指针赋值给接口变量）。

[完整代码示例](code/1.go)

```go
type F interface {
  f()
}

type S1 struct{}

func (s S1) f() {}

type S2 struct{}

func (s *S2) f() {}

// f1.f()无法修改底层数据
// f2.f() 可以修改底层数据,给接口变量f2赋值时使用的是对象指针
var f1 F = S1{}
var f2 F = &S2{}
```

## 2.interface合理性验证

在编译时验证接口的符合性。这包括：

* 将实现特定接口的导出类型作为接口API的一部分进行检查
* 时间同一接口的（导出和非导出）类型属于实现类型的集合
* 任何违反接口合理性检查的场景都会终止编译，并通知给用户

补充：上面3条是编译器对接口的检查机制，大体意思是错误使用接口会在编译期报错，所以可以利用这个机制让部分问题在编译期暴露。

[完整代码示例](code/2.go)

### Bad

```go
// 如果Handler没有实现http.Handler,会在运行时报错
type Handler struct {
  // ...
}
func (h *Handler) ServeHTTP(
  w http.ResponseWriter,
  r *http.Request,
) {
  ...
}
```

### Good

```go
type Handler struct {
  // ...
}
// 用于触发编译期的接口的合理性检查机制
// 如果Handler没有实现http.Handler,会在编译期报错
var _ http.Handler = (*Handler)(nil)
func (h *Handler) ServeHTTP(
  w http.ResponseWriter,
  r *http.Request,
) {
  // ...
}
```

## 3.接收器(receiver)与接口

使用值接收器的方法既可以通过值调用，也可以通过指针调用。

带指针接收器的方法只能通过指针或addressable values调用。

```go
type S struct {
  data string
}

func (s S) Read() string {
  return s.data
}

func (s *S) Write(str string) {
  s.data = str
}

sVals := map[int]S{1: {"A"}}

// 你只能通过值调用 Read
sVals[1].Read()

// 这不能编译通过：
//  sVals[1].Write("test")

sPtrs := map[int]*S{1: {"A"}}

// 通过指针既可以调用 Read，也可以调用 Write 方法
sPtrs[1].Read()
sPtrs[1].Write("test")
```

类似的,即使方法有了值接收器,也同样可以用指针接收器来满足接口.

```go
type F interface {
  f()
}

type S1 struct{}

func (s S1) f() {}

type S2 struct{}

func (s *S2) f() {}

s1Val := S1{}
s1Ptr := &S1{}
s2Val := S2{}
s2Ptr := &S2{}

var i F
i = s1Val
i = s1Ptr
i = s2Ptr

//  下面代码无法通过编译。因为 s2Val 是一个值，而 S2 的 f 方法中没有使用值接收器
//   i = s2Val
```

[Effective Go](https://golang.org/doc/effective_go.html) 中有一段关于 [pointers vs. values](https://golang.org/doc/effective_go.html#pointers_vs_values) 的精彩讲解。

> 补充：
>
> - 一个类型可以有值接收器方法集和指针接收器方法集
>   - 值接收器方法集是指针接收器方法集的子集,反之不是
> - 规则
>   - 值对象只可以使用值接收器方法集
>   - 指针对象可以使用 值接收器方法集 + 指针接收器方法集
> - 接口的匹配(或者叫实现)
>   - 类型实现了接口的所有方法,叫匹配
>   - 具体的讲,要么是类型的值方法集匹配接口,要么是指针方法集匹配接口
>
> 具体的匹配分两种:
>
> - 值方法集和接口匹配
>   - 给接口变量赋值的不管是值还是指针对象,都ok,因为都包含值方法集
> - 指针方法集和接口匹配
>   - 只能将指针对象赋值给接口变量,因为只有指针方法集和接口匹配
>   - 如果将值对象赋值给接口变量,会在编译期报错(会触发接口合理性检查机制)
>
> 为啥 i = s2Val 会报错,因为值方法集和接口不匹配.

## 4.零值Mutex是有效的

零值sync.Mutex和sync.RWMutex是有效的。所以指向mutex的指针基本是不必要的。

### Bad

```go
mu := new(sync.Mutex)
mc.Lock()
```

### Good

```go
var mu sync.Mutex
mu.Lock()
```

如果你说用结构体指针，mutex可以非指针形式作为结构体的组成字段，或者更好的方式是直接嵌入到结构体中。

如果是私有结构体类型或是要实现Mutex接口的类型，我们可以使用嵌入mutex的方法。

```go
type smap struct {
  sync.Mutex // only for unexported types（仅适用于非导出类型）

  data map[string]string
}

func newSMap() *smap {
  return &smap{
    data: make(map[string]string),
  }
}

func (m *smap) Get(k string) string {
  m.Lock()
  defer m.Unlock()

  return m.data[k]
}
```

```go
type SMap struct {
  mu sync.Mutex // 对于导出类型，请使用私有锁

  data map[string]string
}

func NewSMap() *SMap {
  return &SMap{
    data: make(map[string]string),
  }
}

func (m *SMap) Get(k string) string {
  m.mu.Lock()
  defer m.mu.Unlock()

  return m.data[k]
}
```

## 5.在边界处拷贝Slices和Maps

slices和maps包含了指向底层数据的指针，因此在复制它们时要特别注意。

### 接收Slices和maps

请记住，当maps或slice作为函数参数传入时，如果你存储了对他们的引用，则用户可以对其进行修改。

**核心在于使用copy复制**。**底层数据就不会被修改**

[完整代码示例](code/5.go)

**Bad**

```go
func (d *Driver) SetTrips(trips []Trip) {
  d.trips = trips
}

trips := ...
d1.SetTrips(trips)

// 你是要修改 d1.trips 吗？
trips[0] = ...
```

**Good**

```go
func (d *Driver) SetTrips(trips []Trip) {
  d.trips = make([]Trip, len(trips))
  copy(d.trips, trips)
}

trips := ...
d1.SetTrips(trips)

// 这里我们修改 trips[0]，但不会影响到 d1.trips
trips[0] = ...
```

### 返回slices或maps

同样，请注意用户对暴露内部状态的map或slices的修改。

**Bad**

```go
type Stats struct {
  mu sync.Mutex

  counters map[string]int
}

// Snapshot 返回当前状态。
func (s *Stats) Snapshot() map[string]int {
  s.mu.Lock()
  defer s.mu.Unlock()

  return s.counters
}

// snapshot 不再受互斥锁保护
// 因此对 snapshot 的任何访问都将受到数据竞争的影响
// 影响 stats.counters
snapshot := stats.Snapshot()
```

**Good**

```go
type Stats struct {
  mu sync.Mutex

  counters map[string]int
}

func (s *Stats) Snapshot() map[string]int {
  s.mu.Lock()
  defer s.mu.Unlock()

  result := make(map[string]int, len(s.counters))
  for k, v := range s.counters {
    result[k] = v
  }
  return result
}

// snapshot 现在是一个拷贝
snapshot := stats.Snapshot()
```

## 6.使用defer释放资源

使用defer释放资源，诸如文件和锁。

