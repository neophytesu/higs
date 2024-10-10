<template>
	<view class="wrapper">
		<!-- 个人资料 -->
		<view>
			<view class="top">
				<view class="center">
					<view v-if="isLoggedIn">
						<view class="center_top">
							<view class="center_img">
								<!-- 静态头像 -->
								<image src="/static/me.png"></image>
							</view>
							<view class="center_info">
								<view class="center_name">
									WES1532545
								</view>
								<!-- 其他个人中心内容 -->
								<!-- 	<view calss="center_certification">
									<view class="center_AI">
										<iui-icon name="check"></iui-icon>
										<text>人脸识别</text>
									</view>
									<view class="center_card">
										<iui-icon name="check"></iui-icon>
										<text>就诊卡</text>
									</view>
								</view> -->
							</view>
						</view>
					</view>
					<view v-else class="loginButton" @click="onLoginClick">登录</view>
				</view>
			</view>
		</view>

		<!-- 统计 -->
		<view class="count">
			<view class="cell"> {{this.elemeRecord}} <text >电子病历</text> </view>
			<view class="cell"> {{this.mevisRecord}} <text >就诊记录</text> </view>
			<view class="cell"> {{this.regisRecord}} <text >挂号记录</text> </view>
			<view class="cell" @click="toFee"> {{this.feeRecord}} <text >缴费记录</text> </view>
		</view>
		<!-- 其它 -->
		<view class="extra">
			<iui-list arrow>
				<iui-cell label="个人信息"></iui-cell>
				<iui-cell label="意见反馈"></iui-cell>
				<iui-cell label="分享链接"></iui-cell>
				<iui-cell label="关于我们"></iui-cell>
			</iui-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elemeRecord:8, //电子病历
				mevisRecord:14, //就诊记录
				regisRecord:18, //挂号记录
				feeRecord:84 ,//缴费记录
				
				isLoggedIn: true,
				userInfo: {}
			}
		},
		computed: {

		},
		created() {

		},
		methods: {
			onLoginClick() {
				// 跳转至登录页面
				//uni.navigateTo({ url: '/pages/login/login' });
			},
			onShareClick($event, args) {
				console.log($event);
				console.log("onShareClick");
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "分享的标题",
					summary: "分享的内容",
					imageUrl: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
						hm
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			toFee() {
				const record = this.feeRecord;
				uni.navigateTo({
					url: `/pages/home/fee?record=${record}`
				})
			}

		}
	};
</script>

<style scoped lang="scss">
	Page {
		font-size: 14rpx;
	}

	.top {
		width: 100%;
		height: 300rpx;
		// background: #23EBB9;
		background: #2979ff;
		padding-top: 30rpx;
		position: relative;
	}

	.center {
		width: 95%;
		height: 240rpx;
		background: #55aaff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		margin: 0 auto;
		border-radius: 15rpx;
	}

	.center_top {
		display: flex;
		min-width: 350rpx;
		flex-direction: row;
		// background: #ffaa7f;
		height: 180rpx;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #5555ff;
	}

	.center_img {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		overflow: hidden;
	}

	.center_img image {
		width: 100%;
		height: 100%;
	}

	.center_img .user_head {
		width: 100%;
		height: 100%;
	}

	.center_info {
		display: flex;
		flex-direction: column;
		// background-color: #00aa00;
		margin-top: 20rpx;
		margin-left: 30rpx;
	}

	.center_name {
		font-size: 50rpx;
	}

	.center_certification {
		display: flex;
		flex-direction: row;
		// background-color: #ffff00;
	}

	.center_AI {
		display: flex;

		flex-direction: row;
	}

	.center_AI text {}

	.center_card {
		display: flex;
		flex-direction: row;
	}

	.center_card text {}

	// count
	.count {
		display: flex;
		margin: 15rpx 20rpx;
		height: 180rpx;
		text-align: center;
		border-radius: 10rpx;
		background-color: #fff;
		// background-color: #55aaff;
		position: relative;
	}
	.cell {
		margin-top: 10rpx;
		flex: 1;
		padding-top: 20rpx;
		font-size: 50rpx;
		color: #333;
		// border-radius: 10rpx;
		border-right: 1rpx solid #bdbdbd;
	}
	.cell text {
		display: block;
		font-size: 30rpx;
		color: #AAAAAA;
	}

	//extra
	.extra {
		padding-top: 10rpx;
		margin: 10rpx 20rpx;
		// background-color: #fff;
		// background-color: #ff557f;
		border-radius: 10rpx;
		// .item {
		// 	line-height: 1;
		// 	padding: 25rpx 0 25rpx 20rpx;
		// 	border-bottom: 1rpx solid #eee;
		// 	font-size: 30rpx;
		// 	color: #333;
		// }

		// button {
		// 	text-align: left;
		// 	background-color: #fff;

		// 	&::after {
		// 		border: none;
		// 		border-radius: 0;
		// 	}
		// }
	}

	.item {
		line-height: 1;
		padding: 25rpx 0 25rpx 20rpx;
		border-bottom: 1rpx solid #eee;
		font-size: 30rpx;
		color: #333;
	}

	.extra button {
		text-align: left;
		background-color: #fff;

		&::after {
			border: none;
			border-radius: 0;
		}
	}

	.icon-arrow {
		position: relative;

		&::before {
			position: absolute;
			top: 50%;
			right: 20rpx;
			transform: translateY(-50%);
		}
	}

	.loginButton {
		padding: 20rpx 60rpx;
		width: 30%;
		background-color: #ffffff;
		/* 设置背景颜色为蓝色 */
		color: #00aa00;
		/* 设置文本颜色为白色 */
		font-size: 24rpx;
		/* 设置字体大小为 16px */
		text-align: center;
		border-radius: 35rpx;
		/* 设置圆角 */
		cursor: pointer;
		/* 设置鼠标样式为指针 */
	}
</style>