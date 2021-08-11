# 关于 golang json 的一些闭坑指南以及一些思考

## json.Unmarshal 导出为空

```go
type vbStateRes struct {
	hostname    string `json:"hostname"`
	state       int    `json:"state"`
	message     string `json:"message"`
	hostAddr    string `json:"hostAddr"`
	machinePort string `json:"machinePort"`
	machineIp   string `json:"machineIp"`
}
```

```json
args := `{"hostname":"hyperchain", "state":1, "message":"successful", "hostAddr":"localhost", "machinePort":"9009", "machineIp":"172.0.19.2"}`
```

```go
var s vbStateRes
args := `{"hostname":"hyperchain", "state":1, "message":"successful", "hostAddr":"localhost", "machinePort":"9009", "machineIp":"172.0.19.2"}`
err := json.Unmarshal([]byte(args), &s)
if err != nil {
	fmt.Println(err)
	return
}
fmt.Println(s)
```

执行结果:{ 0  }

原因是 vbStateRes1 中的各字段首字母小写，导致无法导出。

改成大写即可。

```go
type vbStateRes struct {
	Hostname    string `json:"hostname"`
	State       int    `json:"state"`
	Message     string `json:"message"`
	HostAddr    string `json:"hostAddr"`
	MachinePort string `json:"machinePort"`
	MachineIp   string `json:"machineIp"`
}
```

## 字段类型不对导致无法unmarshal

```go
type vbStateRes struct {
	Hostname    string `json:"hostname"`
	State       int    `json:"state"`
	Message     string `json:"message"`
	HostAddr    string `json:"hostAddr"`
	MachinePort string `json:"machinePort"`
	MachineIp   string `json:"machineIp"`
}
```

```json
args := `{"hostname":"hyperchain", "state":"1", "message":"successful", "hostAddr":"localhost", "machinePort":"9009", "machineIp":"172.0.19.2"}`
```

其中 结构体的 State 字段类型为int，但是json中为 “1”，是字符串类型，由此导致出问题。

改成下面即可。

```json
args := `{"hostname":"hyperchain", "state":1, "message":"successful", "hostAddr":"localhost", "machinePort":"9009", "machineIp":"172.0.19.2"}`
```

但是如果说从前端拿到的数据均为 string 类型，那么这里就会存在问题，这种情况又该如何解决呢？

json: cannot unmarshal string into Go struct field .state of type int.

且看下面的自定义 unmarshal 骚操作。

## json unmarshal 骚操作

使得结构体中小写的字段也能够导出，这种场景也会存在作用，由于前期设计不对，结构体中字段均为小写开头，导致无法 unmarshal，如果要改代码将会修改很多，此时这个自定义 unmarshal 方法就有作用了。

```go
type vbStateRes struct {
	hostname    string
	state       int
	message     string
	hostAddr    string
	machinePort string
	machineIp   string
}
```

```go
// go get github.com/spf13/cast
func (vb *vbStateRes) UnmarshalJSON(data []byte) (err error) {
	type TempVbStateRes vbStateRes
	vbr := struct {
		Hostname    string `json:"hostname"`
		State       string `json:"state"`
		Message     string `json:"message"`
		HostAddr    string `json:"hostAddr"`
		MachinePort string `json:"machinePort"`
		MachineIp   string `json:"machineIp"`
		*TempVbStateRes
	}{
		TempVbStateRes: (*TempVbStateRes)(vb),
	}
	if err := json.Unmarshal(data, &vbr); err != nil {
		return err
	}
	vb.hostname = vbr.Hostname
	vb.state = cast.ToInt(vbr.State)
	vb.message = vbr.Message
	vb.hostAddr = vbr.HostAddr
	vb.machinePort = vbr.MachinePort
	vb.machineIp = vbr.MachineIp
	return nil
}
```

```json
args := `{"hostname":"hyperchain", "state":"1", "message":"successful", "hostAddr":"localhost", "machinePort":"9009", "machineIp":"172.0.19.2"}`
```

我们自定义一个 unshashal 方法后，可以对首字母小写的字段进行解析，并且能够将字段类型转成我们需要的，非常方便，可以说是一个骚操作了！