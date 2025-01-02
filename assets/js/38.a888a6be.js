(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{359:function(t,s,a){"use strict";a.r(s);var n=a(17),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker实战二-运行mysql容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker实战二-运行mysql容器"}},[t._v("#")]),t._v(" docker实战二：运行mysql容器")]),t._v(" "),s("p",[t._v("适用场景：")]),t._v(" "),s("ul",[s("li",[t._v("简化编程环境安装")]),t._v(" "),s("li",[t._v("版本控制")])]),t._v(" "),s("p",[t._v("由于种种原因，安装这类型软件的时候比较麻烦，容器出问题。")]),t._v(" "),s("p",[t._v("因此直接使用Docker官方镜像比较好。")]),t._v(" "),s("p",[t._v("并且提供了多个版本，可以运行多个容器跑多个版本的服务。")]),t._v(" "),s("h2",{attrs:{id:"拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),s("p",[t._v("在此之前我们可以使用docker search mysql查看。")]),t._v(" "),s("blockquote",[s("p",[t._v("小tips")]),t._v(" "),s("p",[t._v("后面OFFICIAL OK说明是官方的镜像。都是开源的！")]),t._v(" "),s("p",[t._v("类似corcleci/mysql都是其他用户个人定制的镜像。谨慎使用")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://oss.jaronnie.com/image-20210312134046996.png",alt:"image-20210312134046996"}})]),t._v(" "),s("p",[t._v("查看具体的版本需要在"),s("a",{attrs:{href:"hub.docker.com"}},[t._v("官网")]),t._v("上进行查看。")]),t._v(" "),s("p",[t._v("由于网站在国外，电脑访问非常慢，所以我用手机翻墙演示一下。")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://oss.jaronnie.com/image-20210312135250312.png",alt:"image-20210312135250312"}}),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull mysql:5.7\n")])])]),s("h2",{attrs:{id:"创建mysql容器并后台运行服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql容器并后台运行服务"}},[t._v("#")]),t._v(" 创建mysql容器并后台运行服务")]),t._v(" "),s("p",[t._v("第一步骤也可省略。直接运行下面的命令。")]),t._v(" "),s("p",[t._v("-e 表示指定环境变量 用于设置登录密码。否则容器无法正常运行。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mymysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33060")]),t._v(":3306 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("  mysql:5.7\n")])])]),s("h2",{attrs:{id:"进入容器创建一个数据库hello"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器创建一个数据库hello"}},[t._v("#")]),t._v(" 进入容器创建一个数据库hello")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" mymysql "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-uroot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p123456")]),t._v("\n create database hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),s("p",[t._v("使用gorm进行测试")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gorm.io/driver/mysql"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gorm.io/gorm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Student "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tAge "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdsn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root:123456@tcp(localhost:33060)/hello?charset=utf8mb4&parseTime=True&loc=Local"')]),t._v("\n\tdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" gorm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dsn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gorm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"连接成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\terr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AutoMigrate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"创建失败"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nj"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tAge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stu Student\n\tdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("First")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name = ?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nj"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{staticStyle:{zoom:"150%"},attrs:{src:"http://oss.jaronnie.com/image-20210312162544468.png",alt:"image-20210312162544468"}}),t._v(" "),s("h2",{attrs:{id:"备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p123456")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--databases")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello.sql\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);