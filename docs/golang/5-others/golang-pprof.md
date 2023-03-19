# golang pprof usage

## 开启 pprof

```go
package main
import (
	"net/http"
  _ "net/http/pprof"
)

func main() {
  go func() {
    http.ListenAndServe(":6060", nil)
	}()
  // add your logic
  select {}
}
```

## 使用 pprof

### 使用 web

访问 `localhost:6060/debug/pprof`

### 使用工具

```shell
go tool pprof -http=:6001 http://localhost:6060/debug/pprof/heap\?debug\=1
```