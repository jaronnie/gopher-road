# time 包

## 获取当前时间

```go
now := time.Now()
```

返回的类型为 Time 类型

```go
type Time struct {
	// wall and ext encode the wall time seconds, wall time nanoseconds,
	// and optional monotonic clock reading in nanoseconds.
	//
	// From high to low bit position, wall encodes a 1-bit flag (hasMonotonic),
	// a 33-bit seconds field, and a 30-bit wall time nanoseconds field.
	// The nanoseconds field is in the range [0, 999999999].
	// If the hasMonotonic bit is 0, then the 33-bit field must be zero
	// and the full signed 64-bit wall seconds since Jan 1 year 1 is stored in ext.
	// If the hasMonotonic bit is 1, then the 33-bit field holds a 33-bit
	// unsigned wall seconds since Jan 1 year 1885, and ext holds a
	// signed 64-bit monotonic clock reading, nanoseconds since process start.
	wall uint64
	ext  int64

	// loc specifies the Location that should be used to
	// determine the minute, hour, month, day, and year
	// that correspond to this Time.
	// The nil location means UTC.
	// All UTC times are represented with loc==nil, never loc==&utcLoc.
	loc *Location
}
```

## 将当前时间转换为时间戳(ns)

```go
nowNs := now.UnixNano()
```

返回的类型为 int64

## 获取当前时间的前一秒 前十分钟 前一天等

```go
// 获取当前时间的前1s
s, _ := time.ParseDuration("-1s")
nowBefore1s := now.Add(1 * s)
```

```go
// 获取当前时间的前10分钟
m, _ := time.ParseDuration("-1m")
nowBefore10m := now.Add(10 * m)
```

```go
// 获取当前时间的前1天
d, _ := time.ParseDuration("-24h")
nowBefore1day := now.Add(1 * d)
```

## 定时器 time.Ticker

### 每隔一秒钟执行一次

```go
func EverySecondPrint() {
	ticker := time.NewTicker(time.Second) // 每隔1s进行一次打印
	for {
		<-ticker.C
		fmt.Println("这是ticker的打印")
	}
}
```

### 指定执行时间

```go
func JustOneSecond(ctx context.Context) {
	ticker := time.NewTicker(time.Second)
	for {
		select {
		case <- ticker.C:
			fmt.Println("ticker")
		case <- ctx.Done():
			return
		}
	}
}

func main() {
  ctx, cancel := context.WithTimeout(context.Background(), 2 * time.Second)
	defer cancel()
	JustOneSecond(ctx)
}
```

