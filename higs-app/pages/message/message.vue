<template>
	<!-- 导诊 -->
	<view class="page">
		<view class="list-item"  @click="toGuide">
			<view class="avatar">
				<text class="round" v-if="0"></text>
				<image src="/static/rb.png" mode="widthFix"></image>
			</view>
			<view class="content">
				<view class="title">
					<text class="name">AI - 导诊</text>
					<text class="time"></text>
				</view>
				<view class="txt">根据您的描述给出科室建议</view>
			</view>
		</view>
	</view>
	<!-- 预问诊 -->
	<view class="page">
		<view class="list-item"  @click="toAsk">
			<view class="avatar">
				<text class="round" v-if="0"></text>
				<image src="/static/rb.png" mode="widthFix"></image>
			</view>
			<view class="content">
				<view class="title">
					<text class="name">AI - 预问诊</text>
					<text class="time"></text>
				</view>
				<view class="txt">根据您的描述生成病历单</view>
			</view>
		</view>
	</view>
	<!-- 列表 -->
	<view class="page">
		<view class="list-item" v-for="(item,index) in users" :key="index" @click="connect(item)">
			<view class="avatar">
				<text class="round" v-if="item.read"></text>
				<image :src="item.avatar" mode="widthFix"></image>
			</view>
			<view class="content">
				<view class="title">
					<text class="name">{{ item.name }}</text>
					<text class="time">{{ item.time }}</text>
				</view>
				<view class="txt">{{ item.msg }}</view>
			</view>

		</view>
	</view>
</template>

<script>
	// import swipeAction from '@/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		components: {
			// swipeAction
		},
		data() {
			return {
				options: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				// robots: [
				// 	{
				// 		avatar: '/static/rb.png',
				// 		name: 'AI - 导诊',
				// 		read: 0,
				// 		time: '',
				// 		msg: '根据您的描述给出科室建议'
				// 	},
				// 	{
				// 		avatar: '/static/rb.png',
				// 		name: 'AI - 预问诊',
				// 		read: 0,
				// 		time: '',
				// 		msg: '根据您的描述生成病历单'
				// 	},
				// ],
				users: [{
						avatar: '/static/avatar/avatar1.png',
						name: '消化内科 - 杨涛',
						read: 1,
						time: '20:59',
						msg: '*有一条新消息'
					},
					{
						avatar: '/static/avatar/avatar2.png',
						name: '门诊药房 - 夜海安',
						read: 0,
						time: '23:51',
						msg: '嗯'
					},
					{
						avatar: '/static/avatar/avatar3.png',
						name: '儿科 - 张伟',
						read: 0,
						time: '14:09',
						msg: '[图片]'
					},
					{
						avatar: '/static/avatar/avatar4.png',
						name: '检验室 - 罗汉斯',
						read: 1,
						time: '8:25',
						msg: '没有消息就是最好的消息'
					},
					{
						avatar: '/static/avatar/avatar5.png',
						name: '病友',
						read: 1,
						time: '16:46',
						msg: '嘻嘻'
					}
				]
			};
		},
		methods: {
			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			},
			connect(item) {
				uni.navigateTo({
					url: `/pages/message/index?name=${item.name}&avatar=${item.avatar}`
				})
			},
			toGuide(){
				uni.navigateTo({
					url: `/pages/message/guide`
				})
			},
			toAsk(){
				uni.navigateTo({
					url: `/pages/message/ask`
				})
			},
			connectAI(item) {
				if(item.mame == 'AI - 导诊'){
					uni.navigateTo({
						url: `/pages/message/guide`
					})
				}else {
					uni.navigateTo({
						url: `/pages/message/guide`
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" >
	.page {
		padding: 0 32rpx;
		color: #333;
	}

	.list-item {
		display: flex;
		padding: 30rpx 0;
		border-bottom: 1px solid #ccced3;

		.avatar {
			width: 90rpx;
			height: 90rpx;
			border-radius: 10rpx;
			margin-right: 20rpx;
			position: relative;

			.round {
				position: absolute;
				width: 14rpx;
				height: 14rpx;
				border-radius: 50%;
				background: #ef5656;
				top: -4rpx;
				right: -4rpx;
				z-index: 1;
			}

			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}

		.content {
			flex: 1;

			.title {
				display: flex;
				justify-content: space-between;

				.name {
					font-weight: bold;
				}

				.time {
					color: #999;
					font-size: 24rpx;
				}
			}

			.txt {
				margin-top: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				text-align: left;
				color: #999;
				font-size: 26rpx;
			}
		}
	}
</style>