<template>
	<!-- 正文 -->
	<view class="text">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll" @scrolltoupper="upper"
			@scrolltolower="lower">
			<view class="title">
				预约挂号须知
			</view>
			<view class="head">
				尊敬的病友：
			</view>
			<view class="body">
				感谢您选择本院就诊。为保证您能顺利完成预约挂号及就诊，请认真阅读并理解以下挂号规则，并选择同意接受或不同意接受。
			</view>
			<view class="t1">
				一、实名制预约挂号（含当日挂号）
			</view>
			<view class="p1">
				本院实行实名制就诊，请您确保就诊人信息的真实性，包括姓名、证件号（身份证、医保卡等有效证件）、手机号及医院绑定的病历号等。请务必使用本人真实信息进行预约挂号，否则将影响您的正常就诊。
			</view>
			<view class="t2">
				二、预约时间与方式
			</view>
			<view class="p2">
				手机、电话、自助机预约提前7天开放（提前7天凌晨0点开始预约），就诊日凌晨0点停止预约。此时，您可选择当日挂号。
				诊间预约提前一个月开放。如您需要中长期预约，可选择诊间预约方式，由接诊医生为您安排后续就诊时间。
			</view>
			<view class="t3">
				三、无效预约
			</view>
			<view class="p3">
				若因就诊人提供的信息不正确（如姓名、证件号与身份证不符，或手机号错误等），或未按时取号（包括未在规定时间内到达医院完成挂号手续），将无法正常就诊，且视为无效预约。
			</view>
			<view class="t4">
				四、取消预约与违约处理
			</view>
			<view class="p4">
				预约成功后，若不能按时就诊，请至少提前一天取消预约。取消预约的截止时间为就诊日凌晨0点之前。过时不能取消，且用户未就诊未退号，将计为违约一次。
				三个月内累计违约满3次，账号将被冻结预约权限3个月（从最后一次违约的日期起计）。冻结期间，您将无法使用该账号进行预约挂号。
				如遇医生停诊或更换，我们将通过短信或电话方式通知您。您可择日再预约该医生或其他医生就诊。
			</view>
			<view class="t5">
				五、其他注意事项
			</view>
			<view class="p5">
				请妥善保管好您的个人信息和预约挂号凭证（如短信、电子凭证等），避免泄露或遗失。
				如需更改预约信息（如就诊人、就诊时间等），请提前联系医院客服或前往医院挂号窗口办理。
				就诊时，请携带有效身份证件和预约挂号凭证，以便工作人员核对信息。
				医保患者请在就诊后尽快使用医保卡进行费用结算，以享受医保待遇。
			</view>

		</scroll-view>
	</view>
	<!-- 固定栏 -->
	<view class="fixed">
		<!-- 完成栏 -->
		<view class="check">
			<iui-checkbox color="#00B42A" v-model="this.checked" label="我已阅读并同意网站/手机预约途径规则"></iui-checkbox>
		</view>
		<view class="btn">
			<iui-button @click="toRegister" shape="round" type="primary">前往挂号</iui-button>
		</view>
	</view>	
	<!-- toast -->
	<iui-toast ref="toast" position="bottom"></iui-toast>
</template>

<script>
	import { ref } from "vue";
	const toast = ref();
	export default {
		data() {
			return {
				checked: false
			}
		},
		methods: {
			// lower(){
			// 	console.log("lower")
			// 	this.checked = true;
			// },
			toRegister() {
				console.log("toRegister")
				//检验
				if( ! this.checked ){
					console.log("checked = false")
					uni.showToast({
						title: '请确认并同意',
						position: "bottom",
						icon: 'none'
					});
				} else {
					console.log("checked = true")
					uni.redirectTo({
						url: '/pages/index/register'
					});
				}
				
			}
		}
	}
</script>

<style>
	.text {
		padding: 20rpx 20rpx;
		border: 10rpx ;

	}
	.scroll{
		border: 10rpx;
		border-radius: 15rpx;
		background-color: #E6E6E6;
		padding: 15rpx;
		height:1100rpx;
		
	}
	.title {
		font-size: 40rpx;
		font-weight: bold;
		padding-bottom: 30rpx;
	}

	.head {
		font-size: 30rpx;
		font-weight: bold;
		padding-bottom: 20rpx;
	}

	.body {
		font-size: 30rpx;
		font-weight: bold;
		padding-bottom: 20rpx;
	}

	.t1,
	.t2,
	.t3,
	.t4,
	.t5 {
		font-size: 30rpx;
		padding-top: 15rpx;
		padding-bottom: 5rpx;
	}

	.p1,
	.p2,
	.p3,
	.p4,
	.p5 {
		font-size: 30rpx;
		padding: 0rpx 15rpx;
	}
	.fixed{
		padding: 15rpx;
		position: fixed;
		buttom: 15rpx;
		align:center;
		align-items: center;
	}
	.check {
		padding: 15rpx;
		height: 50rpx;
	}
	.btn {
		padding-top: 15rpx;
	}
</style>