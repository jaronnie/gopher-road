## go如何交叉编译

> 即在linux上怎么编译出可以在linux,win.mac上可执行的程序

```shell
#linux上编译Win和mac64位可执行程序

# linux
go build filename

# win
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build filename

#mac
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go
```
