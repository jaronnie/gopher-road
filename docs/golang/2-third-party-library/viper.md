#### 一个好的配置系统是什么样的？

- 能读取不同格式的配置文件（yaml,.env,.toml）

- 设置配置项

- 读取配置项

- 能动态的读取配置

- 能满足生产的需求（如：我们定义了.env .env.test，只需要在启动的时候加一个参数，就能进行合适的转化 ）

  

#### viper的使用demo

- main.go

```go
package main

import (
	"fmt"
	"github.com/spf13/viper"
	"log"
)

func main() {
	viper.SetConfigName("conf.yaml") //读取文件的名字
	viper.SetConfigType("yaml")     //配置文件的格式
	viper.AddConfigPath("viper_demo") //文件的路径

	err := viper.ReadInConfig()
	viper.Set("key","value")
	if err != nil {
		log.Fatal("read config failed: %v", err)
	}

	fmt.Println("mysql ip: ", viper.Get("MYSQL.ip"))
	fmt.Println("mysql port: ", viper.Get("MYSQL.port"))
	fmt.Println("k:",viper.Get("key"))

}
```



- yaml

```
MYSQL:
  port : 8080
  ip : 127.0.0.1
```





#### 马上开始实践，下面是封装完后暴露的函数（大家可以粘贴到GOLAND，自己跑一遍的话应该很快就能理解）



```go
conf.Add()   //设置配置
conf.Get()   //读取配置
.env    
.env.test   //配置文件
go run main.go --env=test //读取.env.test,默认读取.env
```





### 最佳实践

（下面的话会直接给出代码，不过主要的部分都给有注释，需要说明的一点是下面使用的配置；类型是 .env）



- main.go

```go
package main

import (
	"awesomeProject4/conf"
	"flag"
	"fmt"
)

func init() {
	conf.Add("app",func() map[string]interface{} {
		return map[string]interface{}{
			"port": conf.Env("port", "8888"),
			"ip" : conf.Env("ip","123456"),
		}
	})
}
func main() {
	var env string
	flag.StringVar(&env, "env", "","自己配置 如--env=testing ")
	flag.Parse()
	conf.InitConfig(env)
	port := conf.Get("app.port")
	fmt.Println(port)

	ip := conf.Get("app.ip")
	fmt.Println(ip)
	
}

```



- conf/conf.go

```go
package conf


import (
	"github.com/spf13/cast"
	viperlib "github.com/spf13/viper" // 自定义包名，避免与内置 viper 实例冲突
	"os"
)
// viper 库实例
var viper *viperlib.Viper

// ConfigFunc 动态加载配置信息
type ConfigFunc func() map[string]interface{}

// ConfigFuncs 先加载到此数组，loadConfig 再动态生成配置信息
var ConfigFuncs map[string]ConfigFunc

func init() {

	// 1. 初始化 Viper 库
	viper = viperlib.New()
	// 2. 配置类型，支持 "json", "toml", "yaml", "yml", "properties",
	//             "props", "prop", "env", "dotenv"
	viper.SetConfigType("env")
	viper.AddConfigPath(".")
	viper.SetEnvPrefix("appenv")
	viper.AutomaticEnv()
	ConfigFuncs = make(map[string]ConfigFunc)
}

func InitConfig(env string) {
	// 1. 加载环境变量
	loadEnv(env)
	// 2. 注册配置信息
	loadConfig()
}

func loadConfig() {
	for name, fn := range ConfigFuncs {
		viper.Set(name, fn())
	}
}

func loadEnv(envSuffix string) {
	envPath := ".env"
	if len(envSuffix) > 0 {
		filepath := ".env." + envSuffix
		if _, err := os.Stat(filepath); err == nil {
			// 如 .env.testing 或 .env.stage
			envPath = filepath
		}
	}

	// 加载 env
	viper.SetConfigName(envPath)
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}
	// 监控 .env 文件，变更时重新加载
	viper.WatchConfig()
}

func Env(envName string, defaultValue ...interface{}) interface{} {
	if len(defaultValue) > 0 {
		return internalGet(envName, defaultValue[0])
	}
	return internalGet(envName)
}

func internalGet(path string, defaultValue ...interface{}) interface{} {
	// config 或者环境变量不存在的情况
	if !viper.IsSet(path)  {
		if len(defaultValue) > 0 {
			return defaultValue[0]
		}
		return nil
	}
	return viper.Get(path)
}

// Add 新增配置项
func Add(name string, configFn ConfigFunc) {
	ConfigFuncs[name] = configFn
}

func Get(path string, defaultValue ...interface{}) string {
	return GetString(path, defaultValue...)
}


// GetString 获取 String 类型的配置信息
func GetString(path string, defaultValue ...interface{}) string {
	return cast.ToString(internalGet(path, defaultValue...))
}


```



- .env

```
port = 8080
ip = 127.0.0.1
```





