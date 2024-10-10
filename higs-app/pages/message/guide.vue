<template>
	<view class="chat">
		<!-- 顶部标题 -->
		<scroll-view scroll-with-animation id="scrollview" scroll-y="true" :scroll-top="scrollTop" class="scroll-view">
			<!-- 聊天主体 -->
			<view id="msglistview" class="chat-body">
				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index">
					<!-- 自己发的消息 -->
					<view class="item self" v-if="item.userContent != ''">
						<!-- 文字内容 -->
						<view class="content right">
							
							{{item.userContent}}
						</view>
						<!-- 头像 -->
						<image class="avatar" :src="item.image">
						</image>
					</view>
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent != ''">
						<!-- 头像 -->
						<image class="avatar" :src="item.image">
						</image>
						<!-- 文字内容 -->
						<view v-if="item.url === ''" class="content left">
							{{item.botContent}}
						</view>
						<navigator class="content left" v-else :url="item.url">
							<text class="link">{{item.botContent}}</text>
						</navigator>
						
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<view class="tool" :style="{height: `${inputHeight}rpx`}">
			<iui-button @click="recordHandler" class="microphone" :status="microstatus" :icon="microicon"
				shape="circle"></iui-button>
			<input @confirm="handleSend" placeholder="快来聊天吧~" type="text" v-model="chatMsg" class="input" />
			<image src="/static/photo.png" mode="widthFix" class="thumb" @click="chooseImage"></image>
			<button @click="handleSend" class="send-btn">发送</button>
		</view>

	</view>
</template>
<script>
	import {
		getAI
	} from '@/api/message.js'

	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;

	export default {
		data() {
			return {
				obj: {
					"sender": "1",
					"message": "我要导诊"
				},
				//语音地址
				voicePath: '',
				microicon: "audio",
				microstatus: "normal",

				//头像
				myAvatar: "/static/me.png",
				robotAvatar: "/static/rb.png",
				//键盘高度
				keyboardHeight: 0,
				//底部消息发送高度
				bottomHeight: 0,
				//滚动距离
				scrollTop: 0,
				userId: '',
				//发送的消息
				chatMsg: "",
				RobotMsg: [],
				RobotMsgIndex: 0,
				msgList: [{
					botContent: "您好，请描述一下您的症状。",
					userContent: "",
					image: "/static/rb.png",
					url: ''
				}, ]
			}
		},
		updated() {
			//页面更新时调用聊天消息定位到最底部
			this.scrollToBottom();
		},
		onLoad() {
			// test
			// this.getAII();

			//绑定头像、用户名、...
			uni.onKeyboardHeightChange(res => {
				this.keyboardHeight = this.rpxTopx(res.height)
				if (this.keyboardHeight < 0) this.keyboardHeight = 0;
			});
			let self = this;
			recorderManager.onStop(function(res) {
				console.log('recorder stop' + JSON.stringify(res));
				self.voicePath = res.tempFilePath;
			});
		},
		onUnload() {
			// uni.offKeyboardHeightChange()
		},

		methods: {

			startRecord() {
				console.log('开始录音');
				recorderManager.start();
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				console.log('播放录音');

				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
			},
			recordHandler() {
				if (this.microicon == 'audio') {
					this.microicon = "close"
					this.microstatus = "danger"
					this.startRecord();
				} else {
					this.microicon = "audio"
					this.microstatus = "normal"
					this.endRecord();
				}
			},
			goback() {},
			focus() {
				this.scrollToBottom()
			},
			blur() {
				this.scrollToBottom()
			},
			// 滚动至聊天底部
			scrollToBottom(e) {
				setTimeout(() => {
					this.scrollTop = this.msgList.length * 1000
				}, 15)
				// setTimeout(() => {
				// 	let query = uni.createSelectorQuery().in(this);
				// 	query.select('#scrollview').boundingClientRect();
				// 	query.select('#msglistview').boundingClientRect();
				// 	query.exec((res) => {
				// 		if (res[1].height > res[0].height) {
				// 			this.scrollTop = this.rpxTopx(res[1].height - res[0].height)
				// 		}
				// 	})
				// }, 15)
			},
			updated() {
				//页面更新时调用聊天消息定位到最底部
				this.scrollToBottom();
			},
			// 发送消息
			handleSend() {
				//如果消息不为空
				if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
					//用户消息发送
					let obj1 = {
						botContent: "",
						userContent: this.chatMsg,
						image: "/static/me.png" //用户头像
					}
					this.msgList.push(obj1);

					// 调用api将消息发送给后端
					// getAI()


					this.chatMsg = '';
					this.scrollToBottom()
					console.log("用户消息已发送")



					// 返回新消息显示
					setTimeout(() => {
						let obj2 = {
							botContent: "根据您的症状，建议您挂号内科", //返回的数据
							userContent: "",
							image: "/static/rb.png", //ai头像
							url: ""
						}
						this.msgList.push(obj2);
						this.chatMsg = '';
						this.scrollToBottom()
						console.log("机器人消息已发送")
					}, 1000)

					// 跳转链接
					setTimeout(() => {
						let obj2 = {
							botContent: "点击前往挂号", //返回的数据
							userContent: "",
							image: "/static/rb.png", //ai头像
							url: "/pages/index/proregister"
						}
						this.msgList.push(obj2);
						this.chatMsg = '';
						this.scrollToBottom()
						console.log("机器人消息已发送")
					}, 1500)


				} else {
					this.$modal.showToast('不能发送空白消息')
				}
			},
			//AI接口
			getAI() {
				getAI(this.chatMsg).then(res => {
					console.log('请求成功');
					this.RobotMsg = '' //返回
				}).catch(error => {
					console.error('请求失败:', error);
				});
			},
			// test
			// getAII() {
			// 	uni.request({
			// 		url: '124.220.12.57:5005/webhooks/rest/webhook', // 必填，开发者服务器接口地址  
			// 		method: 'POST', // HTTP 请求方法，默认为 GET  
			// 		data: {
			// 			"sender": "1",
			// 			"message": "我要导诊",
			// 		},
			// 		header: {
			// 			'Content-Type': 'application/json' // 显式设置 Content-Type  
			// 		},
			// 		success: (res) => {
			// 			// 请求成功时执行  
			// 			console.log('请求成功:', res.data);
			// 		},
			// 		fail: (err) => {
			// 			// 请求失败时执行  
			// 			console.error('请求失败:', err);
			// 		},
			// 		complete: () => {
			// 			console.log('请求完成');
			// 		}
			// 	});
			// }
		}
	}
</script>

<style lang="scss" scoped>
	$chatContentbgc: #C2DCFF;
	$sendBtnbgc: #4F7DF5;

	view,
	button,
	text,
	input,
	textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	/* 聊天消息 */
	.chat {
		.topTabbar {
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			display: flex;
			margin-top: 80rpx;
			justify-content: space-between;

			.icon {
				margin-left: 20rpx;
			}

			.text {
				margin: auto;
				font-size: 16px;
				font-weight: 700;
			}

			.button {
				width: 10%;
				margin: auto 20rpx auto 0rpx;
			}
		}

		.scroll-view {
			::-webkit-scrollbar {
				display: none;
				width: 0 !important;
				height: 0 !important;
				-webkit-appearance: none;
				background: transparent;
				color: transparent;
			}

			// background-color: orange;
			background-color: #F6F6F6;

			.chat-body {
				display: flex;
				flex-direction: column;
				padding-top: 23rpx;
				// background-color:skyblue;
				padding: 30rpx 30rpx 240rpx;

				.self {
					justify-content: flex-end;
				}

				.item {
					display: flex;
					padding: 23rpx 30rpx;
					// background-color: greenyellow;

					.right {
						background-color: $chatContentbgc;
					}

					.left {
						background-color: #FFFFFF;
					}

					// 聊天消息的三角形
					.right::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						left: 100%;
						top: 10px;
						border: 12rpx solid transparent;
						border-left: 12rpx solid $chatContentbgc;
					}

					.left::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						top: 10px;
						right: 100%;
						border: 12rpx solid transparent;
						border-right: 12rpx solid #FFFFFF;
					}

					.content {
						position: relative;
						max-width: 486rpx;
						border-radius: 8rpx;
						word-wrap: break-word;
						padding: 24rpx 24rpx;
						margin: 0 24rpx;
						border-radius: 5px;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 42rpx;
					}

					.avatar {
						display: flex;
						justify-content: center;
						width: 78rpx;
						height: 78rpx;
						background: $sendBtnbgc;
						border-radius: 50rpx;
						overflow: hidden;

						image {
							align-self: center;
						}

					}
				}
			}
		}
			
		.link {
			font-style: italic;
			text-decoration: underline
		}

		.tool {
			transition: all 0.1s ease;
			position: fixed;
			width: 100%;
			height: 120rpx;
			left: 0;
			bottom: 0;
			background: #fff;
			display: flex;
			align-items: flex-start;
			box-sizing: border-box;
			padding: 20rpx 24rpx 20rpx 40rpx;
			padding-bottom: calc(20rpx + constant(safe-area-inset-bottom)/2) !important;
			padding-bottom: calc(20rpx + env(safe-area-inset-bottom)/2) !important;

			.microphone {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 70rpx;
				margin-right: 10rpx;
				width: 75rpx;
				height: 75rpx;
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

			.send-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 70rpx;
				margin-left: 10rpx;
				width: 150rpx;
				height: 75rpx;
				background: #113355;
				border-radius: 50rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 28rpx;
			}
		}
	}
</style>