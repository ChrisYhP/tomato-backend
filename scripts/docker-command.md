## docker 命令

### 
1. docker images   // 列出镜像
2. docker rmi id   // 删除镜像
3. docker conatiner ls // 列出容器
4. docker rm id // 删除容器

### 启动mysql 
 docker run -p 3306:3306 --name mysql01 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
//（参数 -p 设置端口，--name 取名 ，-e MYSQL_ROOT_PASSWORD=123456 设置 账号为 root ，密码为 123456 ，
    -d 表示作为一个守护进程在后台运行 ）
### 连不上mysql 需要修改加密方式

#### 进入mysql容器
    docker exec -it mysql01 /bin/bash
    mysql -u root -p 

    // 修改加密方式
    alter user 'root'@'%' identified with mysql_native_password by '123456';



### 启动redis
docker run -d --name redis01 -p 6379:6379 redis --requirepass "mypassword"
