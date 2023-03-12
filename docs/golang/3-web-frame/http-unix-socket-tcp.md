# 同时提供 unix-socket 和 tcp 接口

## code

```go
package main

import (
    "net"
    "net/http"
    "os"
)

func main() {
    http.HandleFunc("/containers", handleContainers)

    // 启动 Unix 套接字监听器
    os.Remove("/var/run/jocker.sock")
    unixListener, err := net.Listen("unix", "/var/run/jocker.sock")
    if err != nil {
        panic(err)
    }
    defer unixListener.Close()

    // 启动 TCP 监听器
    tcpListener, err := net.Listen("tcp", ":8080")
    if err != nil {
        panic(err)
    }
    defer tcpListener.Close()

    // 启动 HTTP 服务器并处理请求
    go http.Serve(tcpListener, nil)
    go http.Serve(unixListener, nil)
		select{}
}

func handleContainers(w http.ResponseWriter, r *http.Request) {
    // 处理 /containers 请求的逻辑
	w.Write([]byte("containers"))
}
```

## test
```shell
curl localhost:8080/containers
# output
containers
```

```shell
curl --unix-socket ./jocker.sock http://localhost/containers
# output
containers
```

```shell
docker run -it --rm -v /var/run/jocker.sock:/var/run/jocker.sock centos:7 bash
curl --unix-socket ./jocker.sock http://localhost/containers
# output
containers
```
