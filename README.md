# FileNexus文件管控系统

## 介绍

FileNexus 文件管控系统是带有文件审核功能的类 FTP 系统。本系统支持 docker 一键部署，简单几步配置，即可轻松在公司内网快速部署一套文件审批系统。

## 快速开始

1. 下载release页面的super_file_system.tar.gz
2. 使用命令 ```gzip -d super_file_system.tar.gz``` 解压成 super_file_system.tar 文件
3. 使用命令 ```docker load -i super_file_system.tar``` 加载镜像
4. 使用命令 ```docker run -itd --name ftp -p外部端口1:80 -p外部端口2:8081 super_file_system:1.0.0``` 即可完成部署
