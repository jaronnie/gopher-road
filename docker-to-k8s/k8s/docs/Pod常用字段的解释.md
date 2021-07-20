# Pod常用字段的解释

## 必须有的字段

| 字段名称                | 字段类型 | 字段说明                                                     |
| ----------------------- | -------- | ------------------------------------------------------------ |
| apiVersion              | string   | 创建该对象所使用的 Kubernetes API 的版本，目前一般是V1，可用kubectl api-versions 查看 |
| kind                    | string   | 创建的资源对象的类型                                         |
| metadata                | Object   | 帮助识别对象唯一性的数据，包括一个 `name` 字符串、UID 和可选的 `namespace` |
| metadata.name           | string   | 元数据对象的名称                                             |
| spec                    | Object   | 对象 `spec` 的精确格式对每个 Kubernetes 对象来说是不同的，包含了特定于该对象的嵌套字段。[Kubernetes API 参考](https://kubernetes.io/docs/api/)能够帮助我们找到任何我们想创建的对象的 spec 格式。 |
| spec.containers[]       | list     | spec对象的容器列表定义                                       |
| spec.containers[].name  | string   | 容器的名字                                                   |
| spec.containers[].image | string   | 使用的镜像名称                                               |

## 常用字段

| 字段名称                                   | 字段类型 | 说明                                                         |
| ------------------------------------------ | -------- | ------------------------------------------------------------ |
| spec.containers[].name                     | string   | 定义容器的名字                                               |
| spec.containers[].image                    | string   | 使用的镜像名称                                               |
| spec.containers[].imagePullPolicy          | string   | 定义镜像拉取策略，可参考https://kubernetes.io/zh/docs/concepts/containers/images/#updating-images |
| spec.containers[].command[]                | list     | 指定容器启动命令                                             |
| spec.containers[].args[]                   | list     | 指定容器启动命令参数                                         |
| spec.containers[].workingDir[]             | string   | 指定容器工作目录                                             |
| spec.containers[].volumeMounts[]           | list     | 指定容器内的存储卷配置                                       |
| spec.containers[].volumeMounts[].name      | string   | 存储卷名称                                                   |
| spec.containers[].volumeMounts[].mountPath | string   | 存储卷路径                                                   |
| spec.containers[].volumeMounts[].readOnly  | string   | 存储卷的读写模式，默认为读写模式                             |
| spec.containers[].ports[]                  | list     | 指定容器用到的端口列表配置                                   |
| spec.containers[].ports[].name             | string   | 指定端口名称                                                 |
| spec.containers[].ports[].containerPort    | string   | 指定容器监听的端口号                                         |
| spec.containers[].ports[].hostPort         | string   | 指定容器所在主机需要监听的端口号                             |
| spec.containers[].ports[].protocol         | string   | 指定端口协议，TCP、UDP，默认TCP                              |
| spec.contains[].env[]                      | list     | 指定容器运行时设置的环境变量列表                             |
| spec.contains[].env[].name                 | string   | 指定环境变量名称                                             |
| spec.contains[].env[].value                | string   | 指定环境变量值                                               |
| spec.contains[].resources                  | Object   | 指定资源限制和资源请求的值                                   |
| spec.contains[].resources.limits           | Object   | 设置容器运行时资源的运行上限                                 |
| spec.contains[].resources.limits.cpu       | string   | 指定CPU的限制，单位为core数，用于docker run --cpu-shares参数 |
| spec.contains[].resources.limits.memory    | string   | 指定内存限制                                                 |
| spec.contains[].resources.requests         | Object   | 指定容器启动和调度时的限制设置                               |
| spec.contains[].resources.requests.cpu     | string   | CPU请求，单位为core数，容器启动时初始化可用数量              |
| spec.contains[].resources.requests.memory  | string   | 内存请求，指定容器启动初始可用的大小                         |
| spec.restartPolicy                         | string   | 定义Pod的重启策略                                            |
| spec.nodeSelector                          | Object   | 定义node的Label过滤标签                                      |
| spec.imagePullSecrets                      | Object   | 定义pull镜像时使用Secrets名称                                |
| spec.hostNetwork                           | Boolean  | 定义是否使用主机网络模式，默认为false                        |

## 查阅官方文档

```shell
kubectl explain pod
kubectl explain pod.apiVersion
```

![image-20210717223020326](http://picture.nj-jay.com/image-20210717223020326.png)
