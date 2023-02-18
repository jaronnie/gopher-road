# 项目开发流程

> 使用 git 进行多人合作
>
> gocloudcoder 为项目主导者
>
> nj-jay为项目合作者

![Git分支](http://oss.jaronnie.com/Git-branch.svg)

提交流程

* nj-jay 与 gocloudcoder日常开发完成之后提交并合并到 dev 分支，再 push 到远程仓库 dev 分支上。

  > 若 nj-jay 将代码提交到远程 dev 上之后，gocloudcoder再想提交到远程dev分支上将会出现问题，所以提交之前首先 git pull 将远程最新的代码拉下来，再进行提交。

* dev 分支功能测试完毕后，由 gocloudcoder merge 到 main分支上。

* 若 main 分支上存在 bug 急需修复，可在 hotfix 分支上进行紧急修复，并 merge 到 main 上。

# 实践

第一步 gocloudcoder 初始化项目

```bash
mkdir git-mutil-cooporation
cd git-mutil-cooporation
git init
echo "git-use" > README.md
git add README.md
git commit -m "project init"
git branch -M main
git remote add origin git@github.com:gocloudcoder/git-mutil-cooperation.git
git push -u origin main
```

第二步 gocloudcoder 本地创建 dev 分支，并提交到远程 dev 上

```bash
git branch dev
git checkout dev
git push -u origin dev
```

![image-20210117180558063](http://oss.jaronnie.com/image-20210117180558063.png)

刷新浏览器，便可以看到远程 dev 存在

<img src="http://oss.jaronnie.com/image-20210117181343504.png" alt="image-20210117181343504" style="zoom:80%;" />

第三步 邀请合作者开发

Settings -> Manage access -> Invite a  collaborator

![image-20210117181151773](http://oss.jaronnie.com/image-20210117181151773.png)

发出邀请之后，nj-jay将会收到邀请，点击同意即可。

![image-20210117181711795](http://oss.jaronnie.com/image-20210117181711795.png)

第四步 nj-jay clone 此仓库，并创建 nj-jay 开发分支

```bash
git clone git@github.com:gocloudcoder/git-mutil-cooperation.git
cd git-mutil-cooperation
git branch nj-jay
git checkout nj-jay
```

![image-20210117182215746](http://oss.jaronnie.com/image-20210117182215746.png)

来创建一个新文件 hello.go，并提交到本地仓库

![image-20210117182601829](http://oss.jaronnie.com/image-20210117182601829.png)

开发完毕后，将 nj-jay 分支 merge 到 dev 上

```bash
git checkout dev
git merge nj-jay
```

merge 之后，可以看到多了一个 hello.go 

![image-20210117182759200](http://oss.jaronnie.com/image-20210117182759200.png)

将本地 dev 提交到 远程 dev 分支

```bash
git push -u origin dev
```

![image-20210117183429495](http://oss.jaronnie.com/image-20210117183429495.png)

此时刷新浏览器便可看到 dev 分支已经更新 由 nj-jay 提交了一个新文件 hello.go

![image-20210117183525816](http://oss.jaronnie.com/image-20210117183525816.png)

第五步 gocloudcoder 进行开发

![image-20210117183853860](http://oss.jaronnie.com/image-20210117183853860.png)

```bash
git branch gocloudcoder
git checkout gocloudcoder
```

![image-20210117184157124](http://oss.jaronnie.com/image-20210117184157124.png)

创建一个 AUTHORS.md 文件

```bash
echo gocloudcoder nj-jay > AUTHORS.MD
git add AUTHORS.MD
git commit -m "add AUTHORS.MD"
```

![image-20210117184444345](http://oss.jaronnie.com/image-20210117184444345.png)

切换到 dev 分支，并将 gocloudcoder 分支 merge 到 dev 分支上

```bash
git checkout dev
git merge gocloudcoder
```

![image-20210117184730506](http://oss.jaronnie.com/image-20210117184730506.png)

不知道有没有发现一个问题，我们本地的 dev 分支log和远程是不一样的 (远程多一个 hello.go 文件)

所以提交一定是提交不上去的

![image-20210117184932227](http://oss.jaronnie.com/image-20210117184932227.png)

应该先把远程 dev 最近记录拉去下来 (建议最开始就直接git pull)

```bash
git pull
```

![image-20210117185031090](http://oss.jaronnie.com/image-20210117185031090.png)

可以看到 hello.go pull下来了，此时我们便可以提交

![image-20210117191301746](http://oss.jaronnie.com/image-20210117191301746.png)

刷新浏览器，便可以看到 gocloudcoder 提交的 AUTHORS.md

<img src="http://oss.jaronnie.com/image-20210117191402791.png" alt="image-20210117191402791" style="zoom:80%;" />

第六步 更新 main 分支

由 gocloudcoder 将 dev 分支 合并到 main 分支

![image-20210117192421125](http://oss.jaronnie.com/image-20210117192421125.png)

```bash
git push -u origin main
```

![image-20210117192631306](http://oss.jaronnie.com/image-20210117192631306.png)

此时已经全部完成更新了!

协作开发完成！