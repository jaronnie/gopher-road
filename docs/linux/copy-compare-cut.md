# 为什么剪切比复制快

> 本文基于linux环境进行介绍

回答这个问题之前，首选要明白几个概念

* 文件是怎么存储的
* 文件节点（inode），文件信息的保存（文件名，大小，创建时间，修改时间等信息）

## 文件是怎么存储的

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190525165726246.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x1Y2t5NTI1Mjk=,size_16,color_FFFFFF,t_70)

文件存储在硬盘上，硬盘的最小存储单位叫做扇区（sector）。每个扇区存放 512 字节即 0.5 Kb.

操作系统在读取硬盘的时候，会一次性连续读取多个扇区以提高效率。一般是连续读取 8 个扇区，即一次性读取一个块（block）。

文件都存储在块中

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019052517424155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x1Y2t5NTI1Mjk=,size_16,color_FFFFFF,t_70)

那么还需要一个 inode 来记录文件的相关信息。

## inode

### 使用stat命令查看inode保存的信息

```bash
stat hello.txt
```

![image-20210112111158651](http://oss.jaronnie.com/image-20210112111158651.png)

核心信息

* 文件名，文件字节数
* 文件拥有者，所属组
* 文件的读写可执行权限
* Inode号码
* 文件创建时间修改时间等

在linux下，使用的是inode去识别文件的唯一性

```bash
ls -i [filename]
```

![image-20210112111908034](http://oss.jaronnie.com/image-20210112111908034.png)

可以看到 hello.txt 是 1056459，world.txt inode 是 1056554.

对于系统而言，文件名只是 inode 号码便于识别的一个绰号，类似于 ip 与域名的关系

### 用户通过文件名打开文件的过程

* 系统找到这个文件名对应的 inode 号码
* 通过 inode 号码，获取 inode 信息
* 根据 inode 信息，找到文件数据所在的块，进而读取数据



## 从操作系统层面看剪切与复制的差别

> 注：
>
> 源文件放在 source 文件夹
>
> 剪切和复制的文件放在 dest 文件夹中

![image-20210112112938569](http://oss.jaronnie.com/image-20210112112938569.png)

| 文件名    | inode   |
| --------- | ------- |
| hello.txt | 1056459 |
| world.txt | 1056554 |

**对hello.txt进行复制操作**

![image-20210112121144328](http://oss.jaronnie.com/image-20210112121144328.png)

**对world.txt进行剪切操作**

![image-20210112121301169](http://oss.jaronnie.com/image-20210112121301169.png)

操作之后的 inode

| filename       | inode   |
| -------------- | ------- |
| dest/hello.txt | 1056551 |
| dest/world.txt | 1056554 |

发现了区别，对文件进行剪切之后文件的 inode 是没有变化的

即在硬盘下的块是同一块区间

类似于指针的应用吧

然而复制之后 inode 的值是不一样的

相当于重新在硬盘上开辟了一个区间去存储

肯定是很慢的，尤其是当文件特别大的时候

【注】从 inode 层面可以更好的去理解硬链接和软链接。有兴趣的可以自己去探究探究！