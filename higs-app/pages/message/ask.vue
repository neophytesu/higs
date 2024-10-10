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
							<text>
								{{item.userContent}}
							</text>
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
						<view class="content left">
							<view v-if="item.hasButton">
								<button @click="showMedicalRecord" class="message-button">
									<text class = "recordbtn">点击查看病历单</text>
									</button>
							</view>
							<text>
								{{item.botContent}}
							</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<!-- 用来占位，防止聊天消息被发送框遮挡 -->
		<view class="tool" :style="{height: `${inputHeight}rpx`}">
			<iui-button @click="recordHandler" type="outline" class="microphone" :status="microstatus" :icon="microicon"
				shape="circle"></iui-button>
			<input @confirm="handleSend" placeholder="快来聊天吧~" type="text" v-model="chatMsg" class="input" />
			<image src="/static/photo.png" mode="widthFix" class="thumb" @click="chooseImage"></image>
			<button @click="handleSend" class="send-btn">发送</button>
		</view>
		<!-- 病历单 -->
		<iui-popup v-model="popupstatus" title="病历单" direction="top">
			<view>姓名:xxs</view>
			<view>性别:男</view>
			<view>年龄:18</view>
			<view>民族:汉</view>
			<view>婚姻:{{this.illList.marriage}}</view>
			<view>症状:{{this.illList.illness}}</view>
			<view>病例史:{{this.illList.present}}</view>
			<view>既往病史:{{this.illList.medical}}</view>
			<view>过敏史:{{this.illList.allergies}}</view>
			<view>个人史:{{this.illList.lifestyle}}</view>
		</iui-popup>

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
				//语音地址
				voicePath: '',
				microicon: "audio",
				microstatus: "normal",
				popupstatus: false,
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
				illList: {
					illness: "", //当前症状
					present: "", //病例史
					medical: "", //既往病史
					allergies: "", //过敏史
					lifestyle: "", //
					marriage: "", //婚姻状况			
				},
				RobotMsg: [{
						msg: "请描述一下您的病例史。"
					},
					{
						msg: "请告诉我您的既往病史。"
					},
					{
						msg: "您有过敏史吗？"
					},
					{
						msg: "请告诉我您的个人史，比如抽烟、饮酒等。"
					},
					{
						msg: "您的婚姻状况如何？"
					},
					{
						msg: "感谢您的信息，已完成您的信息病例收集"
					},
				],
				RobotMsgIndex: 0,
				msgList: [{
					botContent: "您好，请描述一下您的症状。",
					userContent: "",
					image: "/static/rb.png",
					hasButton: false,
					buttonAction: this.showMedicalRecord
				}]
			}
		},
		updated() {
			//页面更新时调用聊天消息定位到最底部
			this.scrollToBottom();
		},
		onLoad() {
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
			// 病历单显示
			showMedicalRecord() {
				console.log("病历单弹出")
				// this.popupstatus = true;

				//病历单
				setTimeout(() => {
					let obj = {
						botContent: `电子病历:\n
									主诉症状: ${this.illList.illness}\n\n							
									婚姻状况: ${this.illList.marriage}\n\n
									病例史: ${this.illList.present}\n\n
									既往病史: ${this.illList.medical}\n\n
									过敏史: ${this.illList.allergies}\n\n
									生活习惯: ${this.illList.lifestyle}`,
						userContent: "",
						image: this.robotAvatar //用户头像
					};
					this.msgList.push(obj);
					this.scrollToBottom();
					console.log("病历单已生成");
				}, 50);

			},
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

			goback() {
				//返回主页
				// uni.switchTab({
				//   url: "/pages/tutorship/tutorship"
				// })
			},
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
						image: this.myAvatar, //用户头像
						hasButton: true,
					}
					this.msgList.push(obj1);

					//读取信息
					switch (this.RobotMsgIndex) {
						case 0:
							this.illList.illness = this.chatMsg;
							// console.log(this.illList);
							break;
						case 1:
							this.illList.present = this.chatMsg;
							// console.log(this.illList);
							break;
						case 2:
							this.illList.medical = this.chatMsg;
							break;
						case 3:
							this.illList.allergies = this.chatMsg;
							break;
						case 4:
							this.illList.lifestyle = this.chatMsg;
							break;
						case 5:
							this.illList.marriage = this.chatMsg;
							break;
						default:

							// console.log(this.illList);
							break;
					}
					//界面处理
					this.chatMsg = '';
					this.scrollToBottom();
					console.log("用户消息已发送");

					// 模拟对方回复

					setTimeout(() => {
						let obj2 = {
							botContent: this.RobotMsg[this.RobotMsgIndex++].msg,
							userContent: "",
							image: this.robotAvatar, //用户头像
						};
						this.msgList.push(obj2);
						this.scrollToBottom();
						console.log("AI消息已发送");
					}, 500);
					// console.log(this.RobotMsgIndex)

					//病例链接
					if (this.RobotMsgIndex == 5) {
						//病历单
						setTimeout(() => {
							// let obj2 = {
							// 	botContent: `姓名:xxs            
							// 				性别:男
							// 				年龄:18
							// 				民族:汉
							// 				婚姻:${this.illList.marriage}
							// 				症状:${this.illList.illness}
							// 				病例史:${this.illList.present}
							// 				既往病史:${this.illList.medical}
							// 				过敏史:${this.illList.allergies}
							// 				生活习惯:${this.illList.lifestyle}`,
							// 	userContent: "",
							// 	image: this.robotAvatar //用户头像
							// };
							let obj2 = {
								botContent: " ",
								image: this.robotAvatar,
								hasButton: true
							}
							this.msgList.push(obj2);
							this.scrollToBottom();
							console.log("病历单已生成");
						}, 2000);
					};
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	$chatContentbgc: #C2DCFF;
	$sendBtnbgc: #4F7DF5;


	#scrollview {
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		background: #eee;
		box-sizing: border-box;
	}

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

		/* 底部聊天发送栏 */
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

		// .chat-bottom {
		// 	width: 100%;
		// 	height: 100rpx;
		// 	background: #F4F5F7;
		// 	transition: all 0.1s ease;

		// 	.send-msg {
		// 		display: flex;
		// 		align-items: flex-end;
		// 		padding: 16rpx 30rpx;
		// 		width: 100%;
		// 		min-height: 177rpx;
		// 		position: fixed;
		// 		bottom: 0;
		// 		background: #fff;
		// 		transition: all 0.1s ease;
		// 	}

		// 	.microphone {
		// 		isplay: flex;
		// 		align-items: center;
		// 		justify-content: center;
		// 		margin-bottom: 76rpx;
		// 		margin-right: 10rpx;
		// 		width: 100rpx;
		// 		height: 75rpx;

		// 	}

		// 	.uni-textarea {
		// 		padding-bottom: 70rpx;

		// 		textarea {
		// 			width: 500rpx;
		// 			min-height: 75rpx;
		// 			max-height: 500rpx;
		// 			background: #f1f1f1;
		// 			border-radius: 40rpx;
		// 			font-size: 32rpx;
		// 			font-family: PingFang SC;
		// 			color: #333333;
		// 			line-height: 74rpx;
		// 			padding: 5rpx 8rpx;
		// 			text-indent: 30rpx;
		// 		}
		// 	}

		// 	.send-btn {
		// 		display: flex;
		// 		align-items: center;
		// 		justify-content: center;
		// 		margin-bottom: 76rpx;
		// 		margin-left: 10rpx;
		// 		width: 150rpx;
		// 		height: 75rpx;
		// 		background: #113355;
		// 		border-radius: 50rpx;
		// 		font-size: 28rpx;
		// 		font-family: PingFang SC;
		// 		font-weight: 500;
		// 		color: #FFFFFF;
		// 		line-height: 28rpx;
		// 	}
		// }
		.recordbtn{
			font-weight: bold;
			font-style: italic;
		}
	}
</style>