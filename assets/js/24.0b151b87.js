(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{301:function(e,r,v){"use strict";v.r(r);var _=v(10),o=Object(_.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"什么是docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker"}},[e._v("#")]),e._v(" 什么是Docker?")]),e._v(" "),r("p",[e._v("Docker是轻量级容器管理引擎，它的出现为软件开发和云计算平台之间建立了桥梁。")]),e._v(" "),r("p",[e._v("Docker将成为互联网应用开发领域最重要的平台级技术和标准。Docker的核心价值在于，它很有可能改变传统的软件交付方式和运行方式。")]),e._v(" "),r("p",[e._v("传统的交付源码或交付软件包的方式的最大的问题在于，软件运行期间所依赖的环境是无法控制并且不能标准化的。")]),e._v(" "),r("p",[e._v("而Docker将软件与其依赖的环境打包在一起，以镜像的方式进行交付，让软件运行在标准的环境中，这非常符合云计算的要求。")]),e._v(" "),r("p",[e._v("这种变革一旦为IT人员接受，可能会对产业链带来很大的冲击。我们熟悉的apt-get和yum是否会逐渐被docker pull取代呢？")]),e._v(" "),r("p",[e._v("以Docker为代表的容器技术是目前非常流行的一类技术，对虚拟化，云计算乃至软件开发流程都是革命性的影响。")]),e._v(" "),r("p",[e._v("Docker也可以被称为轻量级虚拟化技术。与传统的VM相比，它更轻量，启动速度更快，单台硬件上可以同时跑成千上百个容器，所以非常适合在业务高峰期通过启动大量容器进行横向扩展。")]),e._v(" "),r("p",[e._v("毫不夸张的说，Docker是革命性的，它重新定义了软件开发，测试，交付和部署的流程。我们交付的不再只是代码，配置文件，数据库定义等。而是整个应用程序运行环境：“操作系统+各种中间件+依赖库+应用程序代码”。")]),e._v(" "),r("h2",{attrs:{id:"容器技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器技术"}},[e._v("#")]),e._v(" 容器技术")]),e._v(" "),r("p",[e._v("容器是直接运行在操作系统内核之上的用户空间。因此容器虚拟化也被称为操作系统虚拟化，容器技术可以让多个用户空间运行在同一台宿主机上。")]),e._v(" "),r("p",[e._v("容器只能运行与底层宿主机相同或者相似的操作系统。如Ubuntu上运行Centos，但无法运行Windows。")]),e._v(" "),r("p",[e._v('容器最常见的例子就是"权限隔离监牢"。它创建一个隔离的目录环境来运行进程，如果权限隔离监牢中正在运行的进程被入侵者攻破，入侵者便会发现自己"深陷监狱"，因为权限不足被困在容器创建的目录中，无法对宿主机进行进一步的破坏。')]),e._v(" "),r("p",[e._v("尽管容器有着光辉的历史，但是始终并未受到广泛的认可。")]),e._v(" "),r("ul",[r("li",[e._v("容器技术的复杂性")]),e._v(" "),r("li",[e._v("不易安装")]),e._v(" "),r("li",[e._v("管理和自动化困难")])]),e._v(" "),r("p",[e._v("Docker就是为了改变这一切而生。")]),e._v(" "),r("h2",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),r("p",[e._v("Docker是一个能够把开发的应用程序自动部署到容器的开源引擎。基于Apache2.0开源授权协议发行。")]),e._v(" "),r("p",[e._v("Docker的特别之处在于它在虚拟化的容器执行环境中增加了一个应用程序部署引擎。该引擎的目标就是提供了一个清量，快速的环境，能够运行开发者的程序，并方便高效的将程序从开发者的电脑部署到测试环境和生产环境。")]),e._v(" "),r("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://resource.gocloudcoder.com/image-20210307124226121.png",alt:"image-20210307124226121"}}),e._v(" "),r("p",[e._v("上图为Docker提供的官方镜像，"),r("a",{attrs:{href:"https://hub.docker.com/search?q=&type=image",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击此处查看"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("Docker的特点")]),e._v(" "),r("ul",[r("li",[e._v("简单轻量")]),e._v(" "),r("li",[e._v("开发测试环境一致性")]),e._v(" "),r("li",[e._v("快速高效，具备可移植性，易于构建，易于协作")]),e._v(" "),r("li",[e._v("适用于分布式架构")])]),e._v(" "),r("h2",{attrs:{id:"docker核心组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker核心组件"}},[e._v("#")]),e._v(" Docker核心组件")]),e._v(" "),r("ul",[r("li",[e._v("Docker客户端和服务器")]),e._v(" "),r("li",[e._v("Docker镜像")]),e._v(" "),r("li",[e._v("Registry")]),e._v(" "),r("li",[e._v("Docker容器")])]),e._v(" "),r("p",[e._v("我们通过一个简单的示例来看看Docker。你可以在本教程之前安装docker，下文与将有相关教程。")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run hello-world\n")])])]),r("p",[r("img",{attrs:{src:"http://resource.gocloudcoder.com/image-20210307125926448.png",alt:"image-20210307125926448"}})]),e._v(" "),r("p",[e._v("Docker是一个客户-服务器架构的程序。此时我们使用的命令docker就可以认为是一个客户端，"),r("code",[e._v("docker run hello-world")]),e._v("，即向docker公司服务端发出请求，并请求到了结果。Docker提供了一个命令行工具docker以及一整套RESTful API。")]),e._v(" "),r("p",[e._v("我们可以在同一台宿主机上运行docker，也可以从本地的Docker客户端连接到运行在另一台宿主机上的远程Docker服务。")]),e._v(" "),r("p",[e._v("该示例中的hello-world就是一个镜像，保存镜像的组件叫Registry。它又分为公有和私有。Docker公司运营的公共Registry叫做Docker Hub。用户可以在Docker Hub上注册账号，把本地的镜像上传到Docker Hub，可以向别人分享你的镜像。")]),e._v(" "),r("p",[e._v("比如你的账号是 gocloudcoder，你发布的镜像名称是hello-world，当你构建完成之后，并发布到Docker Hub上。")]),e._v(" "),r("p",[e._v("其他人可以通过")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run gocloudcoder/hello-world\n")])])]),r("p",[e._v("来使用你的镜像服务，后面我们将完成这一小例子。")]),e._v(" "),r("h3",{attrs:{id:"镜像与容器的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像与容器的概念"}},[e._v("#")]),e._v(" 镜像与容器的概念")]),e._v(" "),r("p",[e._v("镜像是投建Docker世界的基石。用户基于镜像来运行自己的容器。镜像也是Docker生命周期中的构建部分。镜像是基于联合文件系统的一种层式的结构，由一系列指令一步一步投建出来，这是属于Dockerfile的内容，后面将详细介绍。")]),e._v(" "),r("p",[e._v("我们可以认为，镜像是Docker生命周期中的构建和打包阶段，而容器则是启动或执行阶段。类似于maven，maven打包的过程就可以认为是打包镜像，打包完成之后的jar包执行就是容器。")]),e._v(" "),r("p",[e._v("官方提供了很多常用操作系统镜像，如ubuntu，centos等，也提供了很多常用的软件，如redis，mysql等。也提供了很多常用的运行环境，如go，jdk等。")]),e._v(" "),r("p",[e._v("我们可以基于这些镜像，运行自己的应用程序。")]),e._v(" "),r("h2",{attrs:{id:"我们能用docker做什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我们能用docker做什么"}},[e._v("#")]),e._v(" 我们能用Docker做什么？")]),e._v(" "),r("p",[e._v("Docker应用场景：")]),e._v(" "),r("ul",[r("li",[e._v("加速本地开发和构建流程，使其更加高效，更加轻量化。本地开发人员可以构建，运行并分享Docker容器，容器可以在开发环境中构建，然后轻松地提交到测试环境中，并最终进入生产环境。这一过程保证了运行环境的唯一性。不用再去争论是开发还是测试的问题了。")]),e._v(" "),r("li",[e._v("能够让独立服务或应用程序在不同的环境中，得到相同的运行结果。即不论你使用ubuntu，debian，centos等，在Docker眼里都是一样的。让服务或应用程序运行在容器中，不论你的宿主机是什么都是无异的。")]),e._v(" "),r("li",[e._v("构建一个多用户的平台即服务基础措施(PaaS)。")]),e._v(" "),r("li",[e._v("为开发，测试提供一个轻量级的独立沙盒环境，或者将独立的沙盒环境用户技术教学，如Unix Shell的使用、编程语言教学。")]),e._v(" "),r("li",[e._v("提供软件即服务(SaaS)应用程序。")]),e._v(" "),r("li",[e._v("高性能，超大规模的宿主机部署。")])]),e._v(" "),r("h2",{attrs:{id:"docker技术组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker技术组件"}},[e._v("#")]),e._v(" Docker技术组件")]),e._v(" "),r("p",[e._v("基于Linux内核的命名空间(namespace)，用于隔离文件系统，进程和网络。")]),e._v(" "),r("ul",[r("li",[e._v("文件系统隔离：每个容器都有自己的root文件系统")]),e._v(" "),r("li",[e._v("进程隔离：每个容器都运行在自己的进程环境中")]),e._v(" "),r("li",[e._v("网络隔离：容器间的虚拟网络接口和IP地址是分开的")]),e._v(" "),r("li",[e._v("资源隔离和分组：使用cgroups(即controll group，linux的内核特性之一)将CPU和内存之类的资源独立分配给每个Docker容器")]),e._v(" "),r("li",[e._v("写时复制：文件系统都是通过写时复制创建的，这意味着文件系统是分层的，快速的，而且占用的磁盘空间更小")]),e._v(" "),r("li",[e._v("日志：容器产生的STDOUT，STDERR和STDIN这些IO流都会被收集并记录到日志。")]),e._v(" "),r("li",[e._v("交互式shell：用户可以创建一个伪终端，将其连接到STDIN，为容器提供一个交互的shell")])])])}),[],!1,null,null,null);r.default=o.exports}}]);