<template>
	<view class="page">
		<!-- 主题 -->
		<scroll-view class="scroll-view" scroll-y scroll-with-animation :scroll-top="top">
			<view style="padding: 30rpx 30rpx 240rpx;">
				<view class="message" :class="[item.userType]" v-for="(item,index) in list" :key="index">
					<image :src="item.avatar" v-if="item.userType === 'friend'" class="avatar" mode="widthFix"></image>
					<view class="content" v-if="item.messageType === 'image'">
						<image :src="item.content" mode="widthFix"></image>
					</view>
					<view class="content" v-else>
						{{ item.content }}
					</view>
					<image :src="item.avatar" v-if="item.userType === 'self'" class="avatar" mode="widthFix"></image>
				</view>
			</view>
		</scroll-view>
		<!-- 输入框 -->
		<view class="tool">

			<input @confirm="handleSend" placeholder="快来聊天吧~" type="text" v-model="chatMsg" class="input" />
			<!-- 			<iui-button @click="recordHandler" class="microphone" :status="microstatus" :icon="microicon"
				shape="circle"></iui-button> -->
			<image src="/static/photo.png" mode="widthFix" class="thumb" @click="chooseImage"></image>

			<!-- <button @click="handleSend" class="send-btn">发送</button> -->
		</view>
		<!-- 		<view class="tool">
			<input type="text" v-model="content" class="input" @confirm="send" />
			<image src="/static/photo.png" mode="widthFix" class="thumb" @click="chooseImage"></image>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				list: [],
				top: 0
			};
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: options.name
			})
			this._friendAvatar = options.avatar
			this._selfAvatar = '/static/me.png'
			this.list = [{
					content: '对方历史回复消息',
					userType: 'friend',
					avatar: this._friendAvatar
				},
				{
					content: '历史消息',
					userType: 'self',
					avatar: this._selfAvatar
				}
			]
		},
		methods: {
			send() {
				this.list.push({
					content: this.content,
					userType: 'self',
					avatar: this._selfAvatar
				})
				this.content = ''
				this.scrollToBottom()
				// 模拟对方回复
				setTimeout(() => {
					this.list.push({
						content: '周末什么安排',
						userType: 'friend',
						avatar: this._friendAvatar
					})
					this.scrollToBottom()
				}, 1500)
			},
			chooseImage() {
				uni.chooseImage({
					// sourceType: 'album',
					success: (res) => {
						this.list.push({
							content: res.tempFilePaths[0],
							userType: 'self',
							messageType: 'image',
							avatar: this._selfAvatar
						})
						this.scrollToBottom()
						// 模拟对方回复
						setTimeout(() => {
							this.list.push({
								content: '你好呀，朋友~',
								userType: 'friend',
								avatar: this._friendAvatar
							})
							this.scrollToBottom()
						}, 1500)
					}
				})
			},
			scrollToBottom() {
				this.top = this.list.length * 1000
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-view {
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		background: #eee;
		box-sizing: border-box;
	}

	.message {
		display: flex;
		align-items: flex-start;
		margin-bottom: 30rpx;

		.avatar {
			width: 80rpx;
			height: 80rpx;
			border-radius: 10rpx;
			margin-right: 30rpx;
		}

		.content {
			min-height: 80rpx;
			max-width: 60vw;
			box-sizing: border-box;
			font-size: 28rpx;
			line-height: 1.3;
			padding: 20rpx;
			border-radius: 10rpx;
			background: #fff;

			image {
				width: 200rpx;
			}
		}

		&.self {
			justify-content: flex-end;

			.avatar {
				margin: 0 0 0 30rpx;
			}

			.content {
				position: relative;

				&::after {
					position: absolute;
					content: '';
					width: 0;
					height: 0;
					border: 16rpx solid transparent;
					border-left: 16rpx solid #fff;
					right: -28rpx;
					top: 24rpx;
				}
			}
		}

		&.friend {
			.content {
				position: relative;

				&::after {
					position: absolute;
					content: '';
					width: 0;
					height: 0;
					border: 16rpx solid transparent;
					border-right: 16rpx solid #fff;
					left: -28rpx;
					top: 24rpx;
				}
			}
		}
	}

	.tool {
		position: fixed;
		width: 100%;
		min-height: 120rpx;
		left: 0;
		bottom: 0;
		background: #fff;
		display: flex;
		align-items: flex-start;
		box-sizing: border-box;
		padding: 20rpx 24rpx 20rpx 40rpx;
		padding-bottom: calc(20rpx + constant(safe-area-inset-bottom)/2) !important;
		padding-bottom: calc(20rpx + env(safe-area-inset-bottom)/2) !important;
		// .input {
		// 	background: #eee;
		// 	border-radius: 10rpx;
		// 	height: 70rpx;
		// 	margin-right: 30rpx;
		// 	flex: 1;
		// 	padding: 0 20rpx;
		// 	box-sizing: border-box;
		// 	font-size: 28rpx;
		// }
		// .thumb {
		// 	width: 64rpx;
		// }
		// .microphone {
		// 	width: 64rpx;
		// }
		// .send-btn {
		// 	width: 64rpx;
		// }
	}

	.input {
		background: #eee;
		border-radius: 10rpx;
		height: 70rpx;
		margin-right: 30rpx;
		flex: 1;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.thumb {
		width: 64rpx;
	}

	.microphone {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 70rpx;
		margin-right: 10rpx;
		width: 75rpx;
		height: 75rpx;
	}

	.send-btn {
		width: 64rpx;
	}
</style>