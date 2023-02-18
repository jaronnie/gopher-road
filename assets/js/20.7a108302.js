(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{298:function(a,s,t){"use strict";t.r(s);var e=t(10),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"运行我们的第一个容器并使用容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行我们的第一个容器并使用容器"}},[a._v("#")]),a._v(" 运行我们的第一个容器并使用容器")]),a._v(" "),s("p",[a._v("教程所使用的环境")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210307200220343.png",alt:"image-20210307200220343"}})]),a._v(" "),s("h2",{attrs:{id:"查看docker是否安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看docker是否安装"}},[a._v("#")]),a._v(" 查看docker是否安装")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" info\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("Client:\n Context:    default\n Debug Mode: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n Plugins:\n  app: Docker App "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Docker Inc., v0.9.1-beta3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  buildx: Build with BuildKit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Docker Inc., v0.5.1-docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nServer:\n Containers: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v("\n  Running: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  Paused: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n  Stopped: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v("\n Images: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n Server Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20.10")]),a._v(".2\n Storage Driver: overlay2\n  Backing Filesystem: extfs\n  Supports d_type: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n  Native Overlay Diff: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n Logging Driver: json-file\n Cgroup Driver: cgroupfs\n Cgroup Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n Plugins:\n  Volume: "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v("\n  Network: bridge "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" ipvlan macvlan null overlay\n  Log: awslogs fluentd gcplogs gelf journald json-file "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" logentries splunk syslog\n Swarm: inactive\n Runtimes: runc io.containerd.runc.v2 io.containerd.runtime.v1.linux\n Default Runtime: runc\n Init Binary: docker-init\n containerd version: 269548fa27e0089a8b8278fc4fc781d7f65a939b\n runc version: ff819c7e9184c13b7c2607fe6c30ae19403a7aff\n init version: de40ad0\n Security Options:\n  apparmor\n  seccomp\n   Profile: default\n Kernel Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.19")]),a._v(".0-10-amd64\n Operating System: Debian GNU/Linux "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("buster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n OSType: linux\n Architecture: x86_64\n CPUs: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n Total Memory: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".948GiB\n Name: iZ2zeg3h4a24fht4sr97x1Z\n ID: X3U6:MMCR:ZIXP:YLOQ:A4FR:F5VU:CHTZ:DDCJ:QZEH:YBLS:Z37F:OCH7\n Docker Root Dir: /var/lib/docker\n Debug Mode: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n Username: gocloudcoder\n Registry: https://index.docker.io/v1/\n Labels:\n Experimental: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n Insecure Registries:\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.0/8\n Registry Mirrors:\n  https://docker.mirrors.ustc.edu.cn/\n Live Restore Enabled: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n\n")])])]),s("p",[a._v("我们使用了docker可执行程序的info命令，该命令会返回所有容器和镜像的数量，Docker使用的执行驱动和存储驱动，以及Docker的基本配置。")]),a._v(" "),s("h2",{attrs:{id:"配置镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像源"}},[a._v("#")]),a._v(" 配置镜像源")]),a._v(" "),s("p",[a._v("配置文件保存在"),s("code",[a._v("/etc/docker/daemon.json")]),a._v("中，如果没有就创建此文件。")]),a._v(" "),s("p",[a._v("文件内容如下：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://docker.mirrors.ustc.edu.cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("修改完地址后，重新加载配置文件，重启docker服务")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl daemon-reload\nsystemctl restart "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("h2",{attrs:{id:"运行第一个容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行第一个容器"}},[a._v("#")]),a._v(" 运行第一个容器")]),a._v(" "),s("p",[a._v("我们可以使用docker run命令创建容器。它的功能是提供了Docker容器的创建到启动。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210307235009406.png",alt:"image-20210307235009406"}})]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" ubuntu /bin/bash\n")])])]),s("p",[a._v("指定-i -t两个参数，-i表示interactive，-t表示tty伪终端。")]),a._v(" "),s("p",[a._v("它告诉Docker为要创建的容器分配一个伪tty终端，这样我们能够与之进行交互，而不是一个运行后台服务的容器。")]),a._v(" "),s("p",[a._v("我们可以使用"),s("code",[a._v("man docker-run")]),a._v("查看run命令所有的参数使用。")]),a._v(" "),s("p",[a._v("然后我们告诉Docker基于什么镜像来创建容器，示例使用的是ubuntu镜像。它可以称为一个基础(base)镜像。它由Docker公司提供，保存在Docker Hub Registry中。但是由于我们使用的镜像源是ustc(中国科学技术大学)，所以实际上是从ustc中获取的。")]),a._v(" "),s("p",[a._v("在运行这个命令的时候，Docker首先会检查本地上是否存在ubuntu:latest镜像，其中latest代表版本(tag)。如果本地没有的话，将会从镜像源搜索是否有该镜像，如果有，将下载该镜像并保存在本地宿主机中。")]),a._v(" "),s("p",[a._v("随后，Docker在文件系统内部用这个镜像创建了一个新容器，该容器拥有自己的网络，IP地址，以及一个用来和宿主机进行通信的桥接网络接口。最后，我们告诉Docker在容器中要运行什么命令。我们使用了是/bin/bash命令，即启动了一个bash shell。")]),a._v(" "),s("p",[a._v("退出该容器使用"),s("code",[a._v("exit")])]),a._v(" "),s("p",[a._v("我们再精简一下这个命令。不启动交互式的终端，并执行ls命令。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210308070132830.png",alt:"image-20210308070132830"}})]),a._v(" "),s("p",[a._v("那这个容器运行以及就终止了。")]),a._v(" "),s("p",[a._v("我们使用docker ps -a查看所有的容器，docker ps查看正在运行中的容器。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS                    PORTS     NAMES\nc3fbd9db71fd   ubuntu         "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ls"')]),a._v("                     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" hours ago   Exited "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" hours ago             xenodochial_beaver\n2638a8f44bff   ubuntu         "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("              "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" hours ago   Exited "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("38")]),a._v(" hours ago             nostalgic_colden\n")])])]),s("p",[a._v("我们使用docker images查看镜像")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("REPOSITORY    TAG       IMAGE ID       CREATED         SIZE\nubuntu        latest    f643c72bc252   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" months ago    "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("72")]),a._v(".9MB\n")])])]),s("p",[a._v("即基于一个ubuntu镜像，我们创建了两个容器。每run一次，就会创建一个容器。")]),a._v(" "),s("p",[a._v("那我们如何进入之前创建的容器呢？")]),a._v(" "),s("p",[a._v("我们可以使用restart命令重启容器，并使用attach进入该容器。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart 2638a8f44bff\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" attach 2638a8f44bff\n")])])]),s("p",[a._v("这一串ID记不住是个问题，我们可以指定一个name。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rename")]),a._v(" 2638a8f44bff ubuntu1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart ubuntu1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" attach ubuntu1\n")])])]),s("p",[a._v("当然我们也可以在run的时候就指定容器的名字。使用--name选项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" ubuntu2 ubuntu /bin/bash\n")])])]),s("p",[a._v("此时我们再使用docker ps -a")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                          PORTS     NAMES\n174065c2336f   ubuntu         "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("              "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("48")]),a._v(" seconds ago   Exited "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" seconds ago                ubuntu2\nc3fbd9db71fd   ubuntu         "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ls"')]),a._v("                     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" hours ago     Exited "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" hours ago                   xenodochial_beaver\n2638a8f44bff   ubuntu         "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("              "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("39")]),a._v(" hours ago     Exited "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" About a minute ago             ubuntu1\n")])])]),s("p",[a._v("基于同一个镜像我们一共创建了3个容器。")]),a._v(" "),s("p",[a._v("那如何删除容器呢？可以使用rm命令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" ubuntu1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" c3fbd9db71fd\n")])])]),s("p",[a._v("如果我们连ubuntu镜像都不要，可以使用rmi命令。")]),a._v(" "),s("p",[a._v("由于ubuntu镜像又分为各种版本，所以删除的时候需要带上tag")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi ubuntu:latest\n")])])]),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210309151146187.png",alt:"image-20210309151146187"}})]),a._v(" "),s("p",[a._v("由于ubuntu2容器还在依赖这个镜像，所以无法删除。")]),a._v(" "),s("p",[a._v("先删除ubuntu2容器，才能删除ubuntu:latest镜像。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" ubuntu2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi ubuntu:latest\n")])])]),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210309151308966.png",alt:"image-20210309151308966"}})]),a._v(" "),s("h2",{attrs:{id:"创建守护式容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建守护式容器"}},[a._v("#")]),a._v(" 创建守护式容器")]),a._v(" "),s("p",[a._v("在某些场景下，我们需要创建长期运行的容器，必须让他在后台运行才可以。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" ubuntu666 ubuntu "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210309152121185.png",alt:"image-20210309152121185"}})]),a._v(" "),s("p",[a._v("使用-d选项，可以创建守护式容器，只返回容器ID。")]),a._v(" "),s("p",[a._v("我们可以使用日志logs命令，获取容器的日志。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs ubuntu666\n")])])]),s("p",[a._v("就可以看到hello world。")]),a._v(" "),s("h2",{attrs:{id:"在容器内部运行进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在容器内部运行进程"}},[a._v("#")]),a._v(" 在容器内部运行进程")]),a._v(" "),s("p",[a._v("我们可以使用exec命令在容器内部额外启动新进程。")]),a._v(" "),s("p",[a._v("可以在容器内运行的进程分为后台任务和交互式任务。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" ubuntu123 ubuntu\n")])])]),s("p",[a._v("docker ps查看，ubuntu123正在后台运行。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS                  PORTS     NAMES\nab99a424b7d8   ubuntu        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("              "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" seconds ago   Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" seconds                      ubuntu123\n")])])]),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210309202831399.png",alt:"image-20210309202831399"}})]),a._v(" "),s("p",[a._v("我们使用exec命令让容器新开一个进程执行一个任务。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" ubuntu123 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" hello\n")])])]),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210309202956904.png",alt:"image-20210309202956904"}})]),a._v(" "),s("p",[a._v("使用exec命令让容器后台执行一个任务。在/root下创建hello.txt文件。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" ubuntu123 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" /root/hello.txt\n")])])]),s("p",[s("img",{attrs:{src:"C:%5CUsers%5C%E7%83%A8%E8%BD%A9%E5%A2%A8%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210309205110318.png",alt:"image-20210309205110318"}})]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("注意：\n使用docker attach进入容器之后，使用exit退出后，容器也不再运行在后台了。\n一般我们使用docker exec进入容器交互终端。exit之后容器还在运行！\n")])])]),s("p",[a._v("使用exec命令执行交互式任务。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start ubuntu123\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" ubuntu123 /bin/bash\n")])])]),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210309210157402.png",alt:"image-20210309210157402"}})]),a._v(" "),s("h2",{attrs:{id:"停止正在运行的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止正在运行的容器"}},[a._v("#")]),a._v(" 停止正在运行的容器")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop ubuntu123\n")])])]),s("h2",{attrs:{id:"自动重启容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动重启容器"}},[a._v("#")]),a._v(" 自动重启容器")]),a._v(" "),s("p",[a._v("当由于某种错误或者宿主机重启等造成容器停止运行，那对应的服务也将停止。")]),a._v(" "),s("p",[a._v("我们应该设置容器可以自动重启。使用--restart=always标记。")]),a._v(" "),s("p",[a._v("首先我们删除ubuntu123容器。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker rm ubuntu123\n")])])]),s("p",[a._v("重新创建一个容器。无论容器退出的代码是什么，将会自动重启该容器。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" ubuntu123 ubuntu /bin/bash\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);