# 使用 client_golang 将推送数据到 pushgateway

```go
package main

import (
	"fmt"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/push"
)

func main() {

	completionTime := prometheus.NewGauge(prometheus.GaugeOpts{

		Name: "db_backup_last_completion_timestamp_seconds",

		Help: "The timestamp of the last successful completion of a DB backup.",
	})

	completionTime.SetToCurrentTime()

	if err := push.New("http://localhost:9091/", "db_backup").
		Collector(completionTime).
		Grouping("db", "customers").
		Push(); err != nil {

		fmt.Println("Could not push completion time to Pushgateway:", err)

	}

}

```

### 代码示例

* [push-data-pushgateway](https://github.com/jaronnie/gopher-road/tree/main/code/middleware/prometheus/push-data-pushdateway)