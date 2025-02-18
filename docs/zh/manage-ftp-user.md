# 管理FTP用户 {#manage-ftp-user}

管理员注册后，进入管理系统，可以按照下图指示进入用户列表。

![FileNexus用户列表页](/user-list.png)


## 创建FTP用户

点击右上角的 **Create new entry** 进入创建用户界面：

![FileNexus创建FTP用户](/user-add.jpg)

- username：用户登录名，此处填写英文
- password：用户登录密码，此处可以给用户设定好密码，用户后续可以在系统里修改密码
- confirmed：选择 TRUE
- blocked：选择 FALSE
- role：系统用户角色
    - ADMIN：上传/下载/审核/中转
    - AAuthenticated_Staff：上传/下载

    此处根据实际情况进行选择
- realname：用户的真实姓名，或者客户公司名，此处不限制语言
- email：用户的邮箱，此处为必填
- user_files：忽略

填好后，点击右上角save即可。下一步，用户使用刚设置的username/password登录ftp系统。