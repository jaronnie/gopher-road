# 全平台博客书写解决方案

重点：使用 markdown 格式书写博客

优势：一次书写，全平台适用

## 工具推荐

### qiniu-cli--图床服务

> 链接：https://github.com/jaronnie/qiniu-cli
>
> 按照文档配置即可

图床服务，当然不仅仅限于图片，包括音频，视频等。

![image-20220826102654545](https://resource.gocloudcoder.com/image-20220826102654545.png)

![image-20220826102630753](https://resource.gocloudcoder.com/image-20220826102630753.png)

### asciinema--终端录屏

> 链接：[终端录屏配置](https://blog.jaronnie.com/linux%e7%bb%88%e7%ab%af%e5%bd%95%e5%b1%8f%e5%b7%a5%e5%85%b7asciinema%e5%b9%b6%e8%bd%ac%e4%b8%bagif/)

![2022-08-26_10-28-40](https://resource.gocloudcoder.com/2022-08-26_10-28-40.gif)

### markdown 中插入视频

先将视频复制到 markdown 中，发现是这样的显示，达不到全平台使用的效果

```shell
<video src="/Users/jaronnie/Desktop/%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B62022-08-26%20%E4%B8%8A%E5%8D%8810.51.31.mov"></video>
```

使用 qn 小工具上传到七牛图床服务中

![image-20220826105412579](https://resource.gocloudcoder.com/image-20220826105412579.png)

修改为如下

```shell
<iframe 
    width="800" 
    height="450" 
    src="https://resource.gocloudcoder.com/2022.08.26.10.51.31.mp4"
    frameborder="0" 
    allowfullscreen>
</iframe>
```

<iframe 
    width="800" 
    height="450" 
    src="https://resource.gocloudcoder.com/2022.08.26.10.51.31.mp4"
    frameborder="0" 
    allowfullscreen>
</iframe>

## ci/cd

搭配 vue 编写的一站式稳定服务 vuepress 并使用 github 的 workflows 自动生成静态文件并部署。

```yaml
name: Deploy

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - name: Download Source file
        uses: actions/checkout@v2
        with:
          ref: main

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: "12.x"

      - name: Build Vuepress
        run: |
          npm i
          npm run docs:build
          cp -r docs/.vuepress/dist .
      - name: copy file via ssh password
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.DOMAIN }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}  
          source: "dist/*"
          target: ${{ secrets.SITEPATH }}
          strip_components: 1
```

vuepress 模板仓库，一键搭建

![image-20220826102138100](https://resource.gocloudcoder.com/image-20220826102138100.png)

ci/cd 流程

![image-20220826101701376](https://resource.gocloudcoder.com/image-20220826101701376.png)



## 附录

### 微信公众号

如何将 markdown 格式转换为微信公众号格式？

使用[在线网站工具](https://doocs.gitee.io/md/)

![image-20220826104354161](https://resource.gocloudcoder.com/image-20220826104354161.png)
