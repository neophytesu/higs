<template>
	<view class="input-container">
		<iui-input 
			clearable 
			class="input" 
			label="就诊卡号" 
			v-model="cardNumber" 
			type="number"
			placeholder="请输入您的就诊卡号">
		</iui-input>
	</view>
	<view>
		<p @click="toCarding" class='p'>注册</p>
	</view>
	<view>
		<iui-button type="primary" @click="cardRegister">提交</iui-button>
	</view>
	<!-- 成功弹窗 -->
	<iui-toast ref='toast-success' type="success" position="bottom" duration='1000'>绑定成功</iui-toast>
	<!-- 失败弹窗 -->
	<iui-toast ref='toast-error' type="error" position="bottom" duration='2000'>就诊卡不存请前往注册</iui-toast>

	<!-- test
	<button @click="goBack"> goback </button> -->
</template>

<script>
	import { getCard,bindCard } from '@/api/login.js'
	
	export default {
		data() {
			return { 
				cardNumber: '',
				cardState: false,
			};
		},
		methods: {
			cardRegister(){
				//1.检验卡号
				
				//2.调用检验接口，判断
				getCard();
				if(this.cardState){
					//绑定
					this.bindCard();
					//返回
					uni.navigateBack();
				}
				else{
					this.showToast2();
				}		
			},
			getCard() {
				getUser(this.cardNumber).then(res=>{
					console.log('getCard请求成功');	
					this.cardState=res.data.cardState
				});
			},
			bindCard() {
				bindCard(this.$store.state.phone,this.cardNumber).then(res=>{
					console.log('bindCard请求成功');
					showToast();
				});
			},
			showToast1(){
				this.$refs.toast-success.show();
			},
			showToast2(){
				this.$refs.toast-error.show();
			},
			toCarding(){
				uni.navigateTo({
					url: '/pages/login/carding'
				});
			},
			goBack(){
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.input-container {  
	    display: flex;  
	    flex-direction: column; 
	    align-items: center; 
	    border-radius: 8px;  
	    box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
	    background-color: #f8f9fa;   
	}  

	.input {  
	    width: 100%; /* 占据容器全部宽度  */
	    padding: 5px; /* 文本内边距  */
	    border: 1px solid #ced4da; /* 浅灰色边框 */  
	    border-radius: 4px; /* 圆角边框 */  
	    font-size: 16px; 
	    outline: none; /* 移除焦点时的默认轮廓 */  
	}  
	.p {  
	    text-align: right;   
	    color: #333eee;   
	    font-size: 15px;   
	    margin: 0;  
	    padding: 5px 20px;   
	      
	}

</style>