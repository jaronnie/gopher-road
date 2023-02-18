# 一个比 grep 更快高效的文本搜索命令 silversearcher-ag

> 写在前面：
>
> 我们熟知的linux其实是指GNU/Linux
>
> linux本身只是一个内核，而我们常说的linux操作系统其实是linux内核+GNU工具。
>
> 包含常见的gcc，shell命令行中的各种基本命令等。
>
> 可以说正是GNU让Linux大放光彩，也是Linux让GNU闻名，两者相辅相成。

今天我们介绍两款工具grep和silversearcher-ag。

其中grep正是出自GNU项目

> 链接：http://www.gnu.org/software/grep/manual/grep.html

这两个工具功能是差不多的，都是文本搜索工具，都支持正则表达式，但是后者更快更高效。

# ag更好用的一个点

![image-20210319213522134](http://oss.jaronnie.com/image-20210319213522134.png)

这是一本讲解Go语言的开源书籍，假如我要在以上所有文件中找到关于锁的知识，该怎么办？

### 使用grep

```shell
grep "锁" * # *表示该目录下所有的文件
```

![image-20210319213747595](http://oss.jaronnie.com/image-20210319213747595.png)

缺陷是不会遍历利该目录下的子目录。

### 使用ag

首先安装ag命令

```shell
# ubuntu/debian
sudo apt-get install silversearcher-ag
# centos
sudo yum install the_silver_searcher
# mac
brew install the_silver_searcher
```

```shell
ag "锁"
```

使用起来更简单，并且会递归遍历子目录进行查找

![image-20210319214214841](http://oss.jaronnie.com/image-20210319214214841.png)

## 测试一下两者谁更高效

创建99999个文件，并且命名为1.txt ...  99999.txt

再向99999.txt中写入99999

```shell
touch {1..100000}.txt
echo "99999" > 99999.txt
```

![image-20210319224717759](http://oss.jaronnie.com/image-20210319224717759.png)

我们的任务就是找出哪个文件中存在99999这个数

【grep】

```shell
grep "99999" *
```

我的电脑上测试需要10s

<img src="http://oss.jaronnie.com/image-20210319224901215.png" alt="image-20210319224901215" style="zoom:150%;" />

【ag】

```shell
ag "99999"
```

大概6秒左右

并且还给出了所在文件的第几行

<img src="http://oss.jaronnie.com/image-20210319224936632.png" alt="image-20210319224936632" style="zoom:150%;" />

【总结】

日常场合grep完全够用

但是ag可能查阅起来更方便

另外ag在文件更大的时候效率更高