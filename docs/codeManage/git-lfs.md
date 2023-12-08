# git lfs

用于大文件的存储, [代码仓库](https://github.com/jaronnie/git-lfs-example)

## 安装 git-lfs

```shell
# centos
sudo yum install git-lfs
```

## 基本使用

```shell
git lfs track data/*.dmg

git add .

git commit -m "add data"

git push

git lfs pull
```