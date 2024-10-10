

## 2.0 完全可自定义版本 [活体检测界面自定义](https://ext.dcloud.net.cn/plugin?id=15103)  


## 特别强调 请勿修改 js文件所在列表 文件名 文件目录结构 文件地址 请用真机调试 模拟器可能有问题



### 确保勾选了对应权限
### 
#### 1 引入  
``` javascript
import face from "@/uni_modules/mcc-face/index.js"
```

#### 2 调用  
``` javascript
	
face.open(['a','b','c','b','c'],function(e){ console.log(e)

face.close() 关闭页面
```

#####  参数 a 代表 张嘴， b 代表摇头 c 代表眨眼睛 可多次重复出现， 参数为空 [] 标识 只进行人脸检测 并返回人脸数据


####  提供方法
 ####  1 face.open() 打开   2 face.close() 关闭

####  联系
####  有问题请进群 qq 296355527

