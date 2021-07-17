# k8s 网络通讯模型

跨主机的扁平网络

同一个Pod内部通讯：同一个Pod共享一个网络命名空间，共享一个Linux协议栈

## Pod1 至 Pod2

1. 若Pod1 与 Pod2 不在同一台主机上

   Pod的地址是与docker0在同一个网段的，但docker0网段与宿主机网卡是两个完全不同的IP网段，并且不同Node之间的通信只能通过宿主机的物理网卡进行。将Pod的IP和所在的Node的IP关联起来，通过这些关联可以让Pod可以互相访问，可以使用Flannel。

2. 若Pod1 与 Pod2在同一主机上

   由docker0网桥直接转发请求至Pod2，不需要经过Flannel。

## Pod 至 Service

使用 iptables、lvs

## Pod 到外网

Pod 向外网发送请求，查找路由表，转发数据包到宿主机的网卡，宿主机网卡完成路由选择后，iptables执行 Masquerade，把源 IP 更改为宿主机IP ，然后向外网服务器发送请求

## 外网访问 Pod

通过 service nodePort

![image-20210717113738026](http://picture.nj-jay.com/image-20210717113738026.png)

