<template>
	
<!-- 	<view class="container">
		<camera id="camera" device-position="front" class="camera" />
		<button class="btn" @click="takePhoto">
			<text class="btn-text">拍照</text> -->
			<!-- 可以在这里添加图标 -->
		<!-- </button> -->
	<!-- </view> -->
	<view>
		<view class="custom" :style="{height: CustomBar+'px'}">
			<view class="navcontent" :style="[{top:statusBar + 'px'}]">
				<text style="color: #FFFFFF;font-size: 16px;line-height: 45px;" class="iconfont icon-xiangzuo"
					@click="BackPage">返回</text>
				<text style="color: #FFFFFF;font-size: 16px;line-height: 45px;">人脸识别</text>
				<text></text>
			</view>
		</view> 

		<view class="livefater">
			<view style="width: 350px;height: 350px;border-radius: 350px;overflow: hidden;background-color: #CCCCCC;">
<!-- 				<live-pusher id='livePusher' ref="livePusher" class="livePusher" url="" mode="SD" :muted="true"
					:enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2" aspect="1:1"
					@statechange="statechange" @netstatus="netstatus" @error="error"></live-pusher> -->
				<camera id="livePusher" device-position="front" class="livePusher" />	
			</view>
			<cover-image src="/static/image/gai.png" class="gaiimg"></cover-image>
		</view>
		<button class="btn" @click="takePhoto">人脸识别</button>
		*摄像头需要实机演示
		<button class="btn" @click="back">跳过人脸识别</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fil: true,
				imgList:[""],
				statusBar:'',
				CustomBar: 0
			};
		},
		onLoad: function() {
			// this.takePhoto();
			console.log("onLoad")
		},
		methods: {
			back(){
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			takePhoto() {
				console.log("调用takePhoto");
				
				uni.showLoading({  
				    title: '人脸识别中...', // 显示的提示内容  
				    mask: true, // 是否显示透明蒙层，防止触摸穿透  
				    success: function () {  
				        // 调用成功  
				        console.log('加载提示显示成功');  
				    },  
				    fail: function (err) {  
				        // 调用失败的回调函数  
				        console.error('加载提示显示失败：', err);  
				    },  
				    complete: function () {  
				        // 调用结束的回调函数（调用成功、失败都会执行）  
				        console.log('加载提示调用结束');  
						setTimeout(() => {
						    uni.hideLoading();  
							uni.reLaunch({
								url: '/pages/index/index'
							});
						}, 3000);
				    }  
				});  
				// 创建camera上下文  
				const ctx = uni.createCameraContext('livePusher', this);
				// 拍摄照片  
				ctx.takePhoto({
					quality: 'high', // 照片的质量  
					success: (res) => {
						console.log("拍摄成功")
						// 获取照片的临时文件路径  
						const tempFilePath = res.tempImagePath;
						// 构造上传文件的参数  						
						const uploadTask = uni.uploadFile({
							url: '', // 后端接口地址  
							filePath: tempFilePath, // 文件的本地路径  
							name: '', // 后端接收文件的参数名  
							formData: {
								// 其他数据  
							},
							success: (uploadRes) => {
								// 上传成功  
								console.log('uploadFile:success', uploadRes.data);
								// 返回原页面
								uni.reLaunch({
									url: '/pages/index/index'
								});
							},
							fail: (uploadErr) => {
								// 上传失败  
								console.error('uploadFile:fail', uploadErr);
							}
						});

						// 监听上传进度  
						uploadTask.onProgressUpdate((res) => {
							console.log('上传进度', res.progress);
						});
						
					},
					fail: () => {
						// 拍照失败  
						console.log('拍照失败');
					}
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		/* 或指定高度 */
	}

	.camera {
		width: 100%;
		/* 或指定宽度 */
		aspect-ratio: 16 / 9;
		/* 保持相机视图的宽高比 */
		margin-bottom: 20px;
		/* 与按钮之间的间距 */
	}

	.btn {
		padding: 10px 20px;
		border-radius: 5px;
		background-color: #409EFF;
		/* 蓝色背景 */
		color: white;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
		/* 平滑过渡效果 */
	}

	.btn:hover {
		background-color: #66b1ff;
		/* 鼠标悬停时的背景色 */
	}

	.btn-text {
		/* 按钮内的文本样式 */
	}
	
	.custom{
		background-color: #2C65F7;
	}
	.navcontent{
		height: 45px;
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
		justify-content:space-around;
		flex-direction:row;
		color:#FFFFFF;
	}
	.livePusher{
		width: 350px;
		height: 350px;
	}
	.livefater{
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
		justify-content:center;
		flex-direction:column;
		align-items:center;
		margin-top: 50rpx;
		margin-bottom: 50rpx;
		height: 350px;
	}
	.gaiimg{
		width: 350px;
		height: 350px;
		margin-top: -350px;
	}

</style>