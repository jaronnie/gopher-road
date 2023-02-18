# linux 查看目录占用的磁盘空间

指定max-depth
为0则只查看该文件夹占用大小
```shell
du -h --max-depth=0 dirname
```

<img src="http://oss.jaronnie.com/image-20210322131016674.png" alt="image-20210322131016674" style="zoom:200%;" />


为1则递归一层子目录
```shell
du -h --max-depth=1 dirname
```
<img src="http://oss.jaronnie.com/image-20210322131053215.png" alt="image-20210322131053215" style="zoom:150%;" />

