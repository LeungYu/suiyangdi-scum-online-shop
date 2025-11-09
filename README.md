# suiyangdi-scum-online-shop
髓扬帝SCUM游戏服务器商城/内置商城机器人，全量免费开源给各位服主使用，终结SCUM商城收费的时代。接下来会持续开源SCUM圈子里各种友商们用来赚钱的工具

**那么，友商们，做好吃西北风的准备了吗？我理解各位的愤怒，这不重要，我不愤怒就行**

**若是太愤怒，想线下真实我也无所谓，依我看，护照/签证都未必能办的下来**

Open source for SCUM game online / inner shop system

Fuck fucking fuckers

部署视频教程地址：[待补充](url)

后台使用视频教程地址：[待补充](url)

玩家使用视频教程地址：[待补充](url)

更多SCUM等生存游戏相关的工具教程请关注B站账号 [SCUM商城髓扬帝](https://space.bilibili.com/2052979320/channel/seriesdetail?sid=4023505)

## 商城特色
1. **网页/内置商城双合一** 兼顾到了公益服和氪金服两方的需求
2. **关键日志文件内容管理/玩家都可见** 提供开关控制是否提供给玩家在前台查看
3. **娱乐功能** 彩票 比大小 游戏以外还能娱乐
4. **游戏内竞技** 赏金猎人 大清算 剧本拉满
5. **高级小队功能** 梁山好汉 队伍仓库 队伍商品 增强小队合作氛围
6. **商城高级功能** 闭路电视 购买安全区域 氪金玩家也能有良好的体验

除了商城该有的基本功能以外，还有车辆保险，物品回收，现金充值，氪金套餐等功能，详情请见教程

## 安装前准备
本商城系统支持在Windows Server平台或者Linux平台进行部署，可以依靠FTP/SFTP/读取本地文件的方式获取游戏日志。因为Steam API被中国大陆屏蔽，而Battlemetric经常性主动屏蔽中国IP，这种情况下推荐服主搞一个价格低廉的香港VPS去搭建我提供的爬虫服务（见[https://github.com/LeungYu/suiyangdi-scum-game-spider](https://github.com/LeungYu/suiyangdi-scum-game-spider)）。

为了各位萌新服主也能看懂并部署成功，以下内容以绝大部分人较为熟悉的Windows Server平台架设商城服务为例去介绍。
## 需要在服务器安装的依赖
|名称|版本号|说明|下载地址|
| :------------ | :------------ | :------------ | :------------ |
|**NodeJS**|12.14.1|商城服务架构|[https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi](https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi)|
|**MySQL**|5.7.32|数据库相关|[https://downloads.mysql.com/archives/get/p/25/file/mysql-installer-community-5.7.32.0.msi](https://downloads.mysql.com/archives/get/p/25/file/mysql-installer-community-5.7.32.0.msi)|
|**Redis**|3.2.100|数据库相关|[https://github.com/microsoftarchive/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.msi](https://github.com/microsoftarchive/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.msi)|
|**.NET Framework**|4.5.2|Win10以下等级内核的旧系统运行MySQL所需依赖（Win 10/11和Windows Server 2016以后的版本不需要）|[https://www.microsoft.com/en-us/download/details.aspx?id=42642](https://www.microsoft.com/en-us/download/details.aspx?id=42642)|
|**Navicat**|16.3.8|管理数据库的图形化界面|[http://www.wodown.com/soft/22453.html](http://www.wodown.com/soft/22453.html)|

## 基本部署步骤
1. 按顺序安装以上依赖
2. 设置MySQL端口，密码（安装时设置）和Redis端口，密码（在配置文件中设置）
3. 替换Mysql和Redis配置文件，并重启Mysql和Redis服务
4. 使用Navicat创建字符集为`utf8mb4/utf8mb4_bin`的MySQL数据库，并使用其中的还原数据库功能导入商城模板数据库
5. 修改和填入`.env`中的`production.env`文件中的配置(MySQL和Redis数据库端口，密码，数据库名，商城访问端口等)
6. Windows高级防火墙中的入站规则放行配置过的商城服务端口以允许公网访问
7. 以管理员身份运行命令提示符，定位到商城解压目录中带有`package.json`的目录，运行`npm i`安装服务依赖
8. 运行`npm run start:prod-multi`或运行根目录的`start-normal.bat`启动商城服务，打开服务器本地浏览器访问`http://域名(默认为localhost):端口号/admin`测试商城服务是否可以访问，并配置SCUM服务器信息
9. 重启商城服务，开始使用
## 法律声明
髓扬帝商城服务已申请中国/日本的计算机软件著作权，本工具供各位SCUM个人服主免费使用，禁止其他友商如未经批准利用开源工具进行商业活动或盈利，实施以上行为将违反法律并可能触犯中国和日本国的刑法。其他服主发现有人进行类似的行为可以直接联系髓扬帝本人(QQ 1065617282)或者浙江之星律师事务所进行举报

**声援 [996.ICU](https://github.com/996icu/996.ICU) 项目**
