(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{314:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"对标-linux-tail-命令的-golang-tail-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对标-linux-tail-命令的-golang-tail-包"}},[t._v("#")]),t._v(" 对标 linux tail 命令的 Golang tail 包")]),t._v(" "),a("h2",{attrs:{id:"tail-简单介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tail-简单介绍"}},[t._v("#")]),t._v(" tail 简单介绍")]),t._v(" "),a("p",[t._v("tail 命令用途是依照要求将指定的文件的最后部分输出到标准设备，通常是终端，通俗讲来，就是把某个档案文件的最后几行显示到终端上。")]),t._v(" "),a("p",[t._v("假设该档案有更新，tail 会自己主动刷新，确保你看到最新的档案内容 ，在日志收集中可以实时的监测日志的变化。")]),t._v(" "),a("h2",{attrs:{id:"安装-tail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-tail"}},[t._v("#")]),t._v(" 安装 tail")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("go get github.com/hpcloud/tail/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("h2",{attrs:{id:"快速使用-tail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速使用-tail"}},[t._v("#")]),t._v(" 快速使用 tail")]),t._v(" "),a("p",[t._v("使用场景：监听一个文件 info.log, 当 info.log 出现 "),a("code",[t._v("gopherchina")]),t._v(" 字样时表明某项服务已经启动完毕")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首先初始化配置结构体 config")])]),t._v(" "),a("li",[a("p",[t._v("调用 TailFile 函数，并传入文件路径和config，返回有个 tail 的结构体，tail 结构体的 Lines 字段封装了拿到的信息")])]),t._v(" "),a("li",[a("p",[t._v("遍历 tail.Lines 字段，取出信息（注意这里要循环取数据，因为 tail 可以实现实时监控）")])])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/hpcloud/tail"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfileName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./info.log"')]),t._v("\n\tconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tReOpen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新打开")]),t._v("\n\t\tFollow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否跟随")]),t._v("\n\t\tLocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SeekInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Whence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从文件的哪个地方开始读")]),t._v("\n\t\tMustExist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件不存在不报错")]),t._v("\n\t\tPoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ttails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TailFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tail file failed, err:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Line\n\t\tok   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ok "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("tails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lines"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历chan，读取日志内容")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ok "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tail file close reopen, filename:%s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\ttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopherchina"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service has been started"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"code/golang/third-party-library/tail"}},[t._v("tail")])])]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/hpcloud/tail",target:"_blank",rel:"noopener noreferrer"}},[t._v("hpcloud/tail"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/wind-zhou/p/12840174.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wind-zhou-tail"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);