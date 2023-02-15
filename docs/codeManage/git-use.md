# git-use

## git add

`git add -u .` 仅把改动的文件添加到缓存区, 未跟进的文件不添加

## 删除远程分支 

```shell
git tag -d v1.0.1
git push origin :refs/tags/v1.0.1
```
