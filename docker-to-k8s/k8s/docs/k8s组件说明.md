# k8s 组件说明

参考：

* https://kubernetes.io/zh/docs
* https://www.bilibili.com/video/BV1w4411y7Go

## 主要组件

![image-20210716155918388](http://picture.nj-jay.com/image-20210716155918388.png)

* scheduler：调度器，负责介绍任务，选择合适的结点分配任务
* replication controller：副本控制器
* api server：所有服务访问的入口（为了减轻压力，每个组件下有缓存）
* etcd：持久化，分布式 key-value 存储，推荐使用 etcd v3
* kubectl：命令行工具
* Web UI：web可视化管理
* node：集群结点
* Pod：k8s 调度最小单位
* kubelet：每个 Node 节点上运行的主要 “节点代理”，与容器引擎交互（如 docker），维护 pod 的生命周期
* kube proxy：kube-proxy 是集群中每个节点上运行的网络代理，维护节点上的网络规则。负责写入规则至 IPTABLES、IPVS 实现服务映射访问
* container：容器

## 其他插件

![image-20210716164642129](http://picture.nj-jay.com/image-20210716164642129.png)

* CoreDNS：可以为集群中的SVC创建一个域名IP的对应关系解析
* Dashboard：给 K8S 集群提供一个 B/S 结构访问体系
* Ingress Controller：官方只能实现四层代理，INGRESS 可以实现七层代理
* Federation：提供一个可以跨集群中心多K8S统一管理功能
* Prometheus：提供K8S集群的监控能力
* ELK：提供 K8S 集群日志统一分析介入平台

