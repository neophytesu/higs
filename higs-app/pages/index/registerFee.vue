<template>
	<view class="message-room">
		<iui-list>
			<iui-cell label="医生" :extra='doctor'></iui-cell>
			<iui-cell label="科室" :extra="room"></iui-cell>
			<iui-cell label="日期" :extra="date"></iui-cell>
			<iui-cell label="时间" :extra="time"></iui-cell>
		</iui-list>
	</view>
	<view class="message-user">
		<iui-cell label="姓名" extra='xxs'></iui-cell>
		<iui-cell label="年龄" extra="18"></iui-cell>
		<iui-cell label="手机号" extra="150******13"></iui-cell>
		<iui-cell label="就诊卡号" extra="14*****58"></iui-cell>
	</view>
	<view class="btns">
		<iui-button @click="back" calss="btn" type="outline" shape="round">返回</iui-button>
		<iui-button @click="go" calss="btn" type="primary" shape="round">缴费挂号</iui-button>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'; 
	
	export default {
		data() {
			return {
				room: '',
				doctor: '',
				time: '',
				date: '',
				index: 0
			}
		},
		onLoad(options) {
			// console.log(options.room, options.doctor, options.time, options.date);
			this.room = options.room;
			this.doctor = options.doctor;
			this.time = options.time;
			this.date = options.date;
			this.index = options.index;
			console.log(this.room, this.doctor, this.time, this.date);
		},
		methods: {
			
			...mapMutations(['SET_REGISTER']),
			back() {
				const refister = {index:this.index, isFee:false}
				this.SET_REGISTER(refister); 
				uni.navigateBack(); 
			},
			go() {
				const refister = {index:this.index, isFee:true}
				this.SET_REGISTER(refister); 
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.message-room {
		padding: 25rpx;
	}

	.message-user {
		padding: 0rpx 25rpx;
	}

	.btns {
		display: flex;
		flex-direction: row;
		justify-content: 5rpx;
		padding: 25rpx;
	}

	.btn {
		padding: 5rpx;
	}
</style>