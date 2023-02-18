# ssh 免密登录 && alias

## ssh 免密登录

将本地 `~/.ssh/id_rsa.pub` 文件内容追加到远程服务器 `~/.ssh/authorized_keys` 文件中。

并确保 `~/.ssh/authorized_keys` 文件的权限是 600

## ssh alias

实现便捷登录如 ssh xxx 即可完成。

在 `~/.ssh/config` 中追加以下内容：

```shell
Host ali
    HostName blog.jaronnie.com
    User root
    IdentityFile ~/.ssh/id_rsa
```

![image-20230103113626023](https://oss.jaronnie.com/image-20230103113626023.png)
