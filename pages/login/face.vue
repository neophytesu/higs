<template>
	<view>
		<camera id="camera" device-position="front" />
		<button  @click="takePhoto">take</button>
	</view>
	
	
</template>

<script>
	export default {
		onLoad: function() {
			// this.takePhoto();
			console.log("onLoad")
		},
		methods: {
			takePhoto() {
				console.log("调用takePhoto")
				// 创建camera上下文  
				const ctx = uni.createCameraContext('camera',this);
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
								uni.navigateBack();
								  
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
</style>