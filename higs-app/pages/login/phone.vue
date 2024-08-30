<template>
	<view class="login-container">
		<view class="title">登录</view>
		<view class="input-container">
			<input type="number" class="input" placeholder="请输入手机号" v-model="phoneNumber" />
		</view>
		<iui-button type="primary" class="submit-btn" @click="submitLogin">提交</iui-button>
	</view>

	<!-- 选项框-就诊卡 -->

	<iui-popup v-model="cardTip" height={{popHeight}}>
		<!-- <iui-space direction="vertical"> -->
		<view>您还没有绑定就诊卡，是否立即绑定</view>
		<view>
			<iui-button shape="round" type="outline" @click="ignoreCard" >下次再说</iui-button>
		</view>
		<view>
			<iui-button shape="round" type="primary" @click="toCard" >绑定</iui-button>
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
			<iui-button shape="round" type="primary" @click="toFace">绑定</iui-button>
		</view>
		<!-- </iui-space> -->
	</iui-popup>

	//弹窗测试按钮
	<button @click="testHandler">弹窗-就诊卡</button>
	<button @click="testHandler2">弹窗-人脸</button>
</template>

<script>
	import { getUser } from '@/api/login.js'
	
	export default {
		data() {
			return {
				phoneNumber: '', // 绑定手机号输入框
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
				//		 console.log(this.$store);

				//3.发送api请求
				getUser();
			},
			getUser() {
				getUser(this.phoneNumber).then(res=>{
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
				if(this.cardState && this.faceState){
					uni.reLaunch({
						url: '/pages/index/index'
					});
				}
			},
			testHandler() {
				this.cardTip = this.cardTip ? 0 : 1;
			},
			testHandler2() {
				this.faceTip = this.faceTip ? 0 : 1;
			}
		}
	};
</script>

<style>
	.login-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px;
	}

	.title {
		font-size: 20px;
		margin-bottom: 20px;
	}

	.input-container {
		margin-bottom: 20px;
	}

	.input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 300px;
	}

	.submit-btn {
		padding: 10px 20px;
		background-color: #007aff;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size: 16px;
	}

	
</style>