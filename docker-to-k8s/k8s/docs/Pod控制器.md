# 控制器

> 参考：
>
> [ReplicationController](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicationcontroller/)
>
> [ReplicaSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicaset/)
>
> [Deployment](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/)
>
> [StatefulSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/statefulset/)
>
> [DaemonSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/daemonset/)
>
> [Horizontal Pod Autoscaler](https://kubernetes.io/zh/docs/tasks/run-application/horizontal-pod-autoscale/)
>
> [Job](https://kubernetes.io/zh/docs/concepts/workloads/controllers/job)
>
> [CronJob](https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/)

## ReplicationController、ReplicaSet、Deployment

### ReplicationController

**说明：** 现在推荐使用配置 [`ReplicaSet`](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicaset/) 的 [`Deployment`](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/) 来建立副本管理机制。

[ReplicationController官方解释](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicationcontroller/)：*ReplicationController* 确保在任何时候都有特定数量的 Pod 副本处于运行状态。 换句话说，ReplicationController 确保一个 Pod 或一组同类的 Pod 总是可用的。

> 说得更直接一点就是：ReplicationController 用来确保 Pod 的副本数始终保持在用户定义的副本数，即如果有 Pod 异常退出，会自动创建新的 Pod 来替代；而如果异常多出来的 Pod 也会被自动回收。

当 Pod 数量过多时，ReplicationController 会终止多余的 Pod。当 Pod 数量太少时，ReplicationController 将会启动新的 Pod。 与手动创建的 Pod 不同，由 ReplicationController 创建的 Pod 在失败、被删除或被终止时会被自动替换。 例如，在中断性维护（如内核升级）之后，你的 Pod 会在节点上重新创建。 因此，即使你的应用程序只需要一个 Pod，你也应该使用 ReplicationController 创建 Pod。 ReplicationController 类似于进程管理器，但是 ReplicationController 不是监控单个节点上的单个进程，而是监控跨多个节点的多个 Pod。

在讨论中，ReplicationController 通常缩写为 "rc".

### ReplicaSet

ReplicaSet 的目的是维护一组在任何时候都处于运行状态的 Pod 副本的稳定集合。 因此，它通常用来保证给定数量的、完全相同的 Pod 的可用性。

ReplicaSet 是 [ReplicationController](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicationcontroller/) 的后继者。二者目的相同且行为类似，只是 ReplicationController 不支持 [标签用户指南](https://kubernetes.io/zh/docs/concepts/overview/working-with-objects/labels/#label-selectors) 中讨论的基于集合的选择算符需求。 因此，相比于 ReplicationController，应优先考虑 ReplicaSet。

### Deployment

[`Deployment`](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/) 是一个 可以拥有 ReplicaSet 并使用声明式方式在服务器端完成对 Pods 滚动更新的对象。 尽管 ReplicaSet 可以独立使用，目前它们的主要用途是提供给 Deployment 作为 编排 Pod 创建、删除和更新的一种机制。当使用 Deployment 时，你不必关心 如何管理它所创建的 ReplicaSet，Deployment 拥有并管理其 ReplicaSet。 因此，建议你在需要 ReplicaSet 时使用 Deployment。

## StatefulSet

StatefulSet 是用来管理有状态应用的工作负载 API 对象。

StatefulSet 用来管理某 [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) 集合的部署和扩缩， 并为这些 Pod 提供持久存储和持久标识符。

和 [Deployment](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/) 类似， StatefulSet 管理基于相同容器规约的一组 Pod。但和 Deployment 不同的是， StatefulSet 为它们的每个 Pod 维护了一个有粘性的 ID。这些 Pod 是基于相同的规约来创建的， 但是不能相互替换：无论怎么调度，每个 Pod 都有一个永久不变的 ID。

如果希望使用存储卷为工作负载提供持久存储，可以使用 StatefulSet 作为解决方案的一部分。 尽管 StatefulSet 中的单个 Pod 仍可能出现故障， 但持久的 Pod 标识符使得将现有卷与替换已失败 Pod 的新 Pod 相匹配变得更加容易。

StatefulSets 对于需要满足以下一个或多个需求的应用程序很有价值：

- 稳定的、唯一的网络标识符。
- 稳定的、持久的存储。
- 有序的、优雅的部署和缩放。
- 有序的、自动的滚动更新。

在上面描述中，“稳定的”意味着 Pod 调度或重调度的整个过程是有持久性的。 如果应用程序不需要任何稳定的标识符或有序的部署、删除或伸缩，则应该使用 由一组无状态的副本控制器提供的工作负载来部署应用程序，比如 [Deployment](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/) 或者 [ReplicaSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicaset/) 可能更适用于你的无状态应用部署需要。

> Horizontal Pod Autoscaler
>
> Pod 水平自动扩缩（Horizontal Pod Autoscaler） 可以基于 CPU 利用率自动扩缩 ReplicationController、Deployment、ReplicaSet 和 StatefulSet 中的 Pod 数量。 除了 CPU 利用率，也可以基于其他应程序提供的 [自定义度量指标](https://git.k8s.io/community/contributors/design-proposals/instrumentation/custom-metrics-api.md) 来执行自动扩缩。 Pod 自动扩缩不适用于无法扩缩的对象，比如 DaemonSet。
>
> Pod 水平自动扩缩特性由 Kubernetes API 资源和控制器实现。资源决定了控制器的行为。 控制器会周期性地调整副本控制器或 Deployment 中的副本数量，以使得类似 Pod 平均 CPU 利用率、平均内存利用率这类观测到的度量值与用户所设定的目标值匹配。

## DaemonSet

*DaemonSet* 确保全部（或者某些）节点上运行一个 Pod 的副本。 当有节点加入集群时， 也会为他们新增一个 Pod 。 当有节点从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。

DaemonSet 的一些典型用法：

- 在每个节点上运行集群守护进程
- 在每个节点上运行日志收集守护进程
- 在每个节点上运行监控守护进程

一种简单的用法是为每种类型的守护进程在所有的节点上都启动一个 DaemonSet。 一个稍微复杂的用法是为同一种守护进程部署多个 DaemonSet；每个具有不同的标志， 并且对不同硬件类型具有不同的内存、CPU 要求。

## Job

Job 会创建一个或者多个 Pods，并将继续重试 Pods 的执行，直到指定数量的 Pods 成功终止。 随着 Pods 成功结束，Job 跟踪记录成功完成的 Pods 个数。 当数量达到指定的成功个数阈值时，任务（即 Job）结束。 删除 Job 的操作会清除所创建的全部 Pods。 挂起 Job 的操作会删除 Job 的所有活跃 Pod，直到 Job 被再次恢复执行。

一种简单的使用场景下，你会创建一个 Job 对象以便以一种可靠的方式运行某 Pod 直到完成。 当第一个 Pod 失败或者被删除（比如因为节点硬件失效或者重启）时，Job 对象会启动一个新的 Pod。

你也可以使用 Job 以并行的方式运行多个 Pod。

## CronJob

*CronJob* 创建基于时隔重复调度的 [Jobs](https://kubernetes.io/zh/docs/concepts/workloads/controllers/job/)。

一个 CronJob 对象就像 *crontab* (cron table) 文件中的一行。 它用 [Cron](https://en.wikipedia.org/wiki/Cron) 格式进行编写， 并周期性地在给定的调度时间执行 Job。

> **注意：**
>
> 所有 **CronJob** 的 `schedule:` 时间都是基于 [kube-controller-manager](https://kubernetes.io/docs/reference/generated/kube-controller-manager/). 的时区。
>
> 如果你的控制平面在 Pod 或是裸容器中运行了 kube-controller-manager， 那么为该容器所设置的时区将会决定 Cron Job 的控制器所使用的时区。

为 CronJob 资源创建清单时，请确保所提供的名称是一个合法的 [DNS 子域名](https://kubernetes.io/zh/docs/concepts/overview/working-with-objects/names#dns-subdomain-names). 名称不能超过 52 个字符。 这是因为 CronJob 控制器将自动在提供的 Job 名称后附加 11 个字符，并且存在一个限制， 即 Job 名称的最大长度不能超过 63 个字符。