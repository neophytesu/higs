<template>
	<iui-divider></iui-divider>
	<iui-input
	  v-model="name"
	  label="姓名"
	  placeholder="请输入您的名称"
	  clearable
	>
	</iui-input>
	<iui-divider></iui-divider>
	<iui-input
		v-model="identity"
	  label="身份证"
	  placeholder="请输入您的身份证"
	  clearable
	>
	</iui-input>
	<iui-divider></iui-divider>
	<iui-button @click="registerHandler" type="primary" shape="round">注册</iui-button>
</template>

<script>
	import { registerCard } from '@/api/login.js'
	export default {
			
		data(){
			return {
				name: '',
				identity: '',
				
			};
		},
			
		methods: {
			registerHandler(){
				registerCard();
				uni.navigateBack();
			},
			registerCard(){
				registerCard(this.$store.state.phone,this.name,this.identity).then(res=>{
					console.log('getCard请求成功');	
				}).catch(error => {
					console.error('getCard请求失败:', error);
				});
			}
		}
	}
</script>

<style>
	
</style>