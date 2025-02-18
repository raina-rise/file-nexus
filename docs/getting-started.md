# Quick Start {#getting-started}

## Preparation {#preparation}

1. **Linux Server Across Subnets**

::: tip Linux Server Across Subnets

A server that spans two subnets, for example, a server with two IP addresses:

A: 192.168.1.100

B: 10.0.0.100

This server can simultaneously access the following two subnets:

A Subnet: 192.168.1.0/24

B Subnet: 10.0.0.0/24

By configuring iptables, devices from the A/B subnet can access the server through specified ports.

:::


## Installation {#installation}

1. Download the Docker image compressed package to the server

::: code-group

```sh [wget]
$ wget https://github.com/raina-rise/file-nexus/releases/download/v0.0.1-beta.1/file_nexus.tar.gz
```

```sh [curl]
$ curl -L -o file_nexus.tar.gz https://github.com/raina-rise/file-nexus/releases/download/v0.0.1-beta.1/file_nexus.tar.gz
```

:::

2. Extract the Docker image

```sh
$ gzip -d file_nexus.tar.gz
```

3. Load the FileNexus image

```sh
$ docker load -i file_nexus.tar
```

4. Run the container

```sh
docker run -itd --name ftp -p external_port:80 -p external_port:8081 file_nexus:1.0.0
```

::: tip Note

Please replace the two external ports above with the ports you need. The first external port is for the user-side of the file system, and the second external port is for the admin-side of the file system.

:::


## User Interface {#user interface}

Assume that your server IP is: 192.168.1.66, and the external ports are configured as 8080 and 8081.

### FTP User Interface

Open the browser and go to http://192.168.1.66:8080, and you will see the following interface:

![FileNexus User Interface](/user.jpg)

### Super Admin Interface

Open the browser and go to http://192.168.1.66:8081, and you will see the following interface:

![FileNexus Super Admin Interface](/admin.jpg)

::: tip Note

When using this system for the first time, the above admin registration interface will be displayed.

:::

