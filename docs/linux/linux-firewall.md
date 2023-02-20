# linux 防火墙

## 查看防火墙的状态 

```shell
systemctl status firewalld
```

![image-20230220110255763](https://oss.jaronnie.com/image-20230220110255763.png)


## 打开防火墙

```shell
sudo systemctl start firewalld
```

再次查看防火墙的状态

![image-20230220134011459](https://oss.jaronnie.com/image-20230220134011459.png)

## 关闭防火墙

```shell
sudo systemctl stop firewalld
```

## 在防火墙开启时开放具体端口

```shell
sudo systemctl start firewalld
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --reload
sudo firewall-cmncd --query-port=80/tcp
```

![image-20230220135041885](https://oss.jaronnie.com/image-20230220135041885.png)
