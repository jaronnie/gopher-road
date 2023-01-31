(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{326:function(s,a,t){"use strict";t.r(a);var r=t(10),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux命令三剑客之-grep-awk-sed-到底有多骚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux命令三剑客之-grep-awk-sed-到底有多骚"}},[s._v("#")]),s._v(" linux命令三剑客之 grep，awk，sed 到底有多骚")]),s._v(" "),a("p",[s._v("可以说，这三个命令是linux文本处理中最重要的命令了，在shell中用的也非常的多。")]),s._v(" "),a("p",[s._v("其中awk复杂到可以把它当做一门语言来学，功能十分之强大。")]),s._v(" "),a("h2",{attrs:{id:"初探-grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初探-grep"}},[s._v("#")]),s._v(" 初探 grep")]),s._v(" "),a("p",[s._v("我们需要查找关于系统下 root 用户相关的信息")]),s._v(" "),a("p",[s._v("可以在 /etc/passwd 文件下查看，但是我不想用 vim 打开文件，可以直接用 grep 进行查看")]),s._v(" "),a("p",[s._v("将会打印包含"),a("code",[s._v("root")]),s._v("的所有行")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://resource.gocloudcoder.com/2021-03-17_21-55-01.gif",alt:"2021-03-17_21-55-01"}})]),s._v(" "),a("p",[s._v("当然grep同样支持正则表达式")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://resource.gocloudcoder.com/2021-03-17_22-02-46.gif",alt:"2021-03-17_22-02-46"}})]),s._v(" "),a("h2",{attrs:{id:"初探-sed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初探-sed"}},[s._v("#")]),s._v(" 初探 sed")]),s._v(" "),a("p",[s._v("sed可以在不打开文件的情况下编辑文件")]),s._v(" "),a("p",[s._v("将hello替换成world")]),s._v(" "),a("p",[s._v("可以使用 "),a("code",[s._v("sed -i 's/hello/world/g' hello.txt")]),s._v(" 完成")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://resource.gocloudcoder.com/2021-03-17_22-07-37.gif",alt:"2021-03-17_22-07-37"}})]),s._v(" "),a("h2",{attrs:{id:"初探-awk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初探-awk"}},[s._v("#")]),s._v(" 初探 awk")]),s._v(" "),a("p",[s._v("可以提取我们需要的特定列的内容")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://resource.gocloudcoder.com/2021-03-17_22-12-37.gif",alt:"2021-03-17_22-12-37"}})]),s._v(" "),a("p",[s._v("当然以上都是最最简单的用法")]),s._v(" "),a("p",[s._v("还有很多高级的功能，我们一般写在脚本里面")]),s._v(" "),a("p",[s._v("我曾写过的最复杂的一个脚本，就需要依赖于sed和awk提取需要的信息")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("month1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yesterday"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gsub(/[^[:digit:]]/,\" \",$0)'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("month2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yesterday"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("day")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yesterday"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gsub(/[^[:digit:]]/,\" \",$0)'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$month1")]),s._v("."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$day")]),s._v('.md"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dateFin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $date "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/ //g'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);