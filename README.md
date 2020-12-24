# map-porject
# 百度地图API- typescript-parcel 项目案例
# 项目初始化
# 1、使用命令：npm init -y 创建 package.json ,即初始化一个工程
# 2、使用命令：tsc --init 初始化一个 tsconfig.json
# 3、使用命令：npm install parcel@next -D 安装 Parcel
# 4、在项目中创建一个src目录，并在同级目录新建 index.html ,在src目录下新建 index.ts  , 
# 5、在index.html 中引入 index.ts
https://github.com/zhengdonggang/map-porject/blob/main/img/WechatIMG72.png
# 通常浏览器是不能直接运行ts代码的，直接访问index.html是会报错的。这时候，我们使用parcel对ts代码进行打包编译，才能够是浏览器访问不报错。
# https://www.parceljs.cn/getting_started.html
# 6、在 tsconfig.json 中配置根路径rootDir和打包输出路径outDir
 https://github.com/zhengdonggang/map-porject/blob/main/img/WechatIMG73.png
# 7 在 package.json 中配置打包运行命令 parcel index.html
https://github.com/zhengdonggang/map-porject/blob/main/img/WechatIMG74.png
# 8 运行命令：npm run test 进行编译
https://github.com/zhengdonggang/map-porject/blob/main/img/WechatIMG75.png