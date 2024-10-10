/*
1.条款项说明

2.手机号获取

3.判断手机号绑定账号

4.就诊卡绑定（可选择否）

5.人脸识别绑定
*/

<template>

	<!-- 登录框 -->

	<view class="login-container">
		<view class="top-bg">
			<view class="text1">医疗导诊服务</view>
			<view class="text2">欢迎使用，请先登录</view>
		</view>

		<view class="input-box">
			<form>
				<view class="input-container">
					<view class="title">手机号</view>
					<input type="number" class="input" placeholder="请输入手机号" v-model="phoneNumber" />
				</view>
				<iui-divider></iui-divider>
				<view class="input-container">
					<view class="title">密码</view>
					<input type="password" class="input" placeholder="请输入密码" v-model="password" />
				</view>
				<iui-divider></iui-divider>
				<view>
					<p @click="toFace" class='p'>人脸识别登录</p>
				</view>
				<iui-button type="primary" class="submit-btn" @click="submitLogin">提交</iui-button>
			</form>
		</view>
	</view>





	<!-- 选项框-就诊卡 -->

	<iui-popup v-model="cardTip" height={{popHeight}}>
		<!-- <iui-space direction="vertical"> -->
		<view>您还没有绑定就诊卡，是否立即绑定</view>
		<view>
			<iui-button shape="round" type="outline" @click="ignoreCard">下次再说</iui-button>
		</view>
		<view>
			<iui-button shape="round" type="primary" @click="toCard">绑定</iui-button>
		</view>
		<!-- </iui-space> -->
	</iui-popup>

	<!-- 选项框-人脸识别 -->
	<iui-popup v-model="faceTip" height={{popHeight}}>
		<!-- <iui-space direction="vertical"> -->
		<view>您还没有绑定人脸识别，是否立即绑定</view>
		<view>
			<iui-button shape="round" type="outline" @click="ignoreFace">下次再说</iui-button>
		</view>
		<view>
			<iui-button shape="round" type="primary" @click="toFacing">绑定</iui-button>
		</view>
		<!-- </iui-space> -->
	</iui-popup>
	<!-- 
	//弹窗测试按钮
	<button @click="testHandler">弹窗-就诊卡</button>
	<button @click="testHandler2">弹窗-人脸</button>
	<button @click="testHandler3">跳过登录</button>
	<button @click="testHandler4">test</button> -->
</template>

<script>
	import {
		getUser
	} from '@/api/login.js'

	export default {
		data() {
			return {
				phoneNumber: '', // 绑定手机号输入框
				password: '',
				cardTip: false,
				faceTip: false,
				popHeight: 150,
				cardState: false,
				faceState: false
			};
		},
		onshow: function() {
			console.log('111');
			toTabbar();
		},

		methods: {
			// 提交登录的方法

			submitLogin() {
				//1.验证

				//合法性
				if (!this.phoneNumber || this.phoneNumber.length !== 11) {
					uni.showToast({
						title: '手机号不能为空且必须为11位',
						icon: 'none'
					});
					return;
				}
				//真实性
				/*
					验证码，待定
				*/

				//2.绑定全局数据
				this.$store.commit('SET_PHONE', this.phoneNumber);

				//3.发送api请求
				// getUser();
				this.testHandler();
				this.testHandler2();
			},
			getUser() {
				getUser(this.phoneNumber).then(res => {
					console.log('请求成功');
					this.cardTip = !res.data.cardState;
					this.faceTip = !res.data.faceState;
					this.cardState = res.data.cardState;
					this.faceState = res.data.faceState;
				}).catch(error => {
					console.error('请求失败:', error);
				});
			},
			ignoreCard() {
				this.cardTip = 0;
				this.cardState = 1;
				this.toTabbar();
			},
			toCard() {
				uni.navigateTo({
					url: '/pages/login/card'
				});
				this.cardTip = 0;
			},
			ignoreFace() {
				this.faceTip = 0;
				this.faceState = 1;
				this.toTabbar();
			},
			toFace() {
				uni.navigateTo({
					url: '/pages/login/face'
				});
				this.faceTip = 0;
			},
			toTabbar() {
				if (this.cardState && this.faceState) {
					uni.reLaunch({
						url: '/pages/index/index'
					});
				}
			},
			toFacing() {
				uni.navigateTo({
					url: '/pages/login/facing'
				});
			},
			testHandler() {
				this.cardTip = this.cardTip ? 0 : 1;
			},
			testHandler2() {
				this.faceTip = this.faceTip ? 0 : 1;
			},
			testHandler3() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			testHandler4() {
				uni.reLaunch({
					url: '/pages/message/test'
				});
			}
		}
	};
</script>

<style>
	.login-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #ffffff;
	}

	.title {
		font-size: 15px;
		font-weight: bold;
		width: 50px;
		display: flex;   
		align-items: center; 
		
	}

	.input-container {
		display: flex;
		flex-direction: row;
		margin-bottom: 10px;
	}

	.input {
		padding: 10px;
		width: 250px;
	}

	.submit-btn {
		padding: 10px 20px;
		background-color: #007aff;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		background-image: linear-gradient(45deg, #727CFB, #46D0ED);
	}

	.p {
		text-align: right;
		color: #333eee;
		font-size: 15px;
		margin: 0;
		padding: 5px 20px;
	}

	.top-bg {
		
		width: 750rpx;
		background-image: url(@/static/image/head-bg.png);
		height: 400rpx;
		background-size: 100%;
		background-repeat: no-repeat;
		text-align: center;
		padding-top: 120rpx;
		padding-bottom:  50rpx;
	}
	.text1{
		  color: white; 
		  font-weight: bold; 
		  font-size: 36px;  
	}
	.text2{
		font-size: 10px; 
		color: white;
	}
</style>