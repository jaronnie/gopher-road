# docker 镜像和容器管理

## 管理镜像

对于镜像和容器的管理是有必要的, 在开发过程中产生了大量的镜像, 是需要定时清理的。

### 删除标签为 NONE 的镜像

```shell
docker rmi $(docker images -f "dangling=true" -q)
```

## 参考链接
* [https://blog.csdn.net/wwqcherry/article/details/121865301](https://blog.csdn.net/wwqcherry/article/details/121865301)
