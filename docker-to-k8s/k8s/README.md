# k8s 学习路线

* 介绍说明
  * [发展历史](docs/发展历史.md)
  * [k8s组件说明](docs/k8s组件说明.md)
  * k8s 一些关键字解释
* 基础概念

  * [什么是 pod](docs/Pod概念.md)

  * [控制器类型](docs/Pod控制器.md)

  * k8s 网络通讯模型
* 部署 k8s 集群
* 资源清单
  * k8s 中资源的概念
  * 掌握资源清单 yaml 语法
  * 编写 pod
  * pod 的声明周期
* pod 控制器
  * 各种控制器类型的特点以及说明
* 服务发现
  * service 实现原理以及构建方式
  * Ingress 
* 存储
  * configMap 
  * Secret 
  * volume
  * PV
* 调度器
  * 	调度器的概念
  * 	调度器的原理
  * 	按照自己的需求调度 pod
* 集群安全机制
  * 集群的认证、鉴权、访问控制、原理及其流程
* HELM
  * 	HELM 原理 
  * 	HELM 模板自定义
  * 	HELM 常用插件部署
* 运维
  * 修改Kubeadm 达到证书可用期限为 10年
  * 能够构建高可用的 Kubernetes 集群