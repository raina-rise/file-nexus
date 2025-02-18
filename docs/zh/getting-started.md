# 快速开始 {#getting-started}

## 前期准备 {#preparation}

1. **跨网段Linux服务器**

::: tip 跨网段Linux服务器

横跨两个网段的服务器，如某台服务器有两个ip地址：

A：192.168.1.100

B：10.0.0.100

那么这台服务器可以同时接入如下两个网段：

A 网段：192.168.1.0/24

B 网段：10.0.0.0/24

通过iptables的配置，可以同时使A/B网段的设备通过设定的端口访问该服务器

:::


## 安装 {#installation}

1. 下载Docker镜像压缩包到服务器

::: code-group

```sh [wget]
$ wget https://github.com/raina-rise/file-nexus/releases/download/v0.0.1-beta.1/file_nexus.tar.gz
```

```sh [curl]
$ curl -L -o file_nexus.tar.gz https://github.com/raina-rise/file-nexus/releases/download/v0.0.1-beta.1/file_nexus.tar.gz
```

:::

2. 解压Docker镜像

```sh
$ gzip -d file_nexus.tar.gz
```

3. 加载FileNexus镜像

```sh
$ docker load -i file_nexus.tar
```

4. 运行容器

```sh
docker run -itd --name ftp -p 外部端口:80 -p 外部端口:8081 file_nexus:1.0.0
```

::: tip 注意

请将上述两个外部端口替换为你需要的端口，第一个外部端口是文件系统的用户侧端口，第二个外部端口是文件系统的管理侧端口

:::


## 用户界面 {#user interface}

假设现在你的服务器ip是：192.168.1.66，外部端口配置的是8080和8081。

### ftp用户界面

在浏览器中打开http://192.168.1.66:8080，可以看到如下界面：

![FileNexus用户界面](/user.jpg)

### 超级管理员界面

在浏览器中打开http://192.168.1.66:8081，可以看到如下界面：

![FileNexus管理员界面](/admin.jpg)

::: tip 注意

首次使用该系统，展示为上述管理员注册界面

:::
