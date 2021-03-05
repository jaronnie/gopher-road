```shell
#.zsh或者.bash文件中(取决于你用的是zsh还是bash)
export GOPATH=$HOME/work(必须)
export PATH=$PATH:/usr/local/go/bin(必须)
export PATH=$PATH:$GOPATH/bin(可选)
export GOBIN=$GOPATH/bin(可选)

shell> go env -w GO111MODULE="on"

工作目录结构
如下图
# 每一个工程文件，比如mysort，新建一个目录，就使用go mod init
```

<img src="https://picture.nj-jay.com/6.11.10.23.png" style="zoom:67%;" />



goland配置

GOROOT

GOPATH

GO MODULE(ON) 开启go module

与以上的设置成一样的即可

