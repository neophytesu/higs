<template>
	<!-- 日期 -->
	<iui-tabs ref="datetab" type="tag" :list="dateList" v-model="tabIndex"></iui-tabs>

	<!-- 科室分类 -->
	<iui-tabs :modelValue="subTabIndex" lineWidth="auto" :list="departmentList" @change="getSubtabs(index)"></iui-tabs>
	<!-- <iui-tabs id='sublist' split lineWidth="auto" :list="subTab"></iui-tabs> -->

	<!-- 科室预约 -->
	<view v-for="(item,index) in cardList" :key="index">
		<iui-card :title="item.title" shadow="true">
			<template #extra>
				<iui-button :disabled="item.use" @click="registerHandler(index)">{{item.status}}</iui-button>
			</template>
			<view>医生：{{item.doctor}}</view>
			<view>时间：{{item.time}}</view>
		</iui-card>
	</view>

</template>

// <script setup>
// 	import {
// 		ref
// 	} from 'vue';
	
// 	function initDateList() {
// 		console.log(dateList);
// 		// 获取当前日期  
// 		const currentDate = new Date();
// 		// 获取今天是周几（0-6，0表示星期日）  
// 		const dayOfWeek = currentDate.getDay();
// 		// 获取年、月、日
// 		const year = currentDate.getFullYear();  
// 		const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并且用padStart补全为两位数  
// 		const day = String(currentDate.getDate()).padStart(2, '0'); // 用padStart补全为两位数  
// 		// 将数字转换为对应的星期名称  
// 		const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
// 		const todayIs = weekDays[dayOfWeek];
// 		dateList.value.length = 0;
// 		// 填充数组，从今天的星期号开始，包括其后一周的星期号  
// 		for (let i = 0; i < 7; i++) {
// 			// 计算索引，确保索引在0-6的范围内循环  
// 			const index = (dayOfWeek + i) % 7;
			
// 			const date_obj = { title:weekDays[index], };
// 			dateList.value.push(date_obj);
// 		}
// 		console.log(dateList);
// 	}
// 	function initDateList2() {  
// 	  // 获取当前日期  
// 	  const currentDate = new Date();  
	    
// 	  // 填充数组，从今天开始，包括今后一周的日期信息  
// 	  for (let i = 0; i < 7; i++) {  
// 	    // 创建一个新的日期对象，表示当前日期加上i天  
// 	    const futureDate = new Date(currentDate);  
// 	    futureDate.setDate(currentDate.getDate() + i);  
	      
// 	    // 格式化日期为 YYYY-MM-DD 字符串  
// 	    const formattedDate = futureDate.toISOString().split('T')[0];  
	      
// 	    // 创建一个对象，包含格式化后的日期信息  
// 	    const dateObj = { date: formattedDate };  
	      
// 	    // 将对象推入数组  
// 	    dateList2.value.push(dateObj);  
// 		}
// 	}  ;
// 	const dateList = ref([]) ;
// 	const dateList2 = ref([]) ;
// 	const tabIndex = ref(0)
// 	const cardList = ref([{
// 			title: "科室：2-201",
// 			doctor: "张伟",
// 			time: "14:00 ~ 16:00",
// 			status: "预约",
// 			use: false
// 		},
// 		{
// 			title: "科室：2-301",
// 			doctor: "吴乐山",
// 			time: "8:00 ~ 10:00",
// 			status: "预约",
// 			use: false
// 		},
// 		{
// 			title: "科室：2-203",
// 			doctor: "徐福泽",
// 			time: "18:00 ~ 20:00",
// 			status: "预约",
// 			use: false
// 		},
// 	]);
// 	const departmentList = [{
// 			title: "内科"
// 		},
// 		{
// 			title: "外科"
// 		},
// 		{
// 			title: "中医科"
// 		},
// 		{
// 			title: "男科"
// 		},
// 		{
// 			title: "儿科"
// 		},
// 		{
// 			title: "传染科"
// 		},
// 		{
// 			title: "其它科室"
// 		},
// 	];
// 	const subList = [
// 		[{
// 				title: "呼吸内科"
// 			},
// 			{
// 				title: "消化内科"
// 			},
// 			{
// 				title: "神经内科"
// 			},
// 			{
// 				title: "心血管内科"
// 			},
// 			{
// 				title: "肾内科"
// 			},
// 			{
// 				title: "血液内科"
// 			},
// 			{
// 				title: "免疫科"
// 			},
// 			{
// 				title: "内分泌科"
// 			},
// 		],
// 		[{
// 				title: "1"
// 			},
// 			{
// 				title: "消化内科"
// 			},
// 			{
// 				title: "神经内科"
// 			},
// 			{
// 				title: "心血管内科"
// 			},
// 			{
// 				title: "肾内科"
// 			},
// 			{
// 				title: "血液内科"
// 			},
// 			{
// 				title: "免疫科"
// 			},
// 			{
// 				title: "内分泌科"
// 			},
// 		],
// 	];
// 	// let subTabIndex = 0;
// 	// let subTab = subList[subTabIndex];

// 	// function getSubtabs(index) {
// 	// 	console.log(subTabIndex)
// 	// };

// 	function registerHandler(index) {
// 		// 提取信息
// 		const match = cardList.value[index].title.match(/：([\d-]+)/);
// 		const p1 = match ? match[1] : null;
// 		const p2 = cardList.value[index].doctor;
// 		const p3 = cardList.value[index].time;
// 		const p4 = dateList2.value[tabIndex.value].date;
// 		const p5 = index;
// 		console.log(p1)
// 		console.log(p2)
// 		console.log(p3)
// 		console.log(p4)
// 		uni.navigateTo({
// 			url: `/pages/index/registerFee?room=${p1}&doctor=${p2}&time=${p3}&date=${p4}&index=${p5}`
// 		})



// 		// cardList.value[index].status = '已预约';
// 		// cardList.value[index].use = true;
// 	};
	
	
// 	// setup
// 	console.log('setup');
// 	initDateList();
// 	initDateList2();
	
// </script>
<script>
	import { mapGetters } from 'vuex'; 
	export default {
		data(){
			return{
				dateList :[],
				dateList2 :[],
				tabIndex : 0,
				cardList : [{
						title: "科室：2-201",
						doctor: "张伟",
						time: "14:00 ~ 16:00",
						status: "预约",
						use: false
					},
					{
						title: "科室：2-301",
						doctor: "吴乐山",
						time: "8:00 ~ 10:00",
						status: "预约",
						use: false
					},
					{
						title: "科室：2-203",
						doctor: "徐福泽",
						time: "18:00 ~ 20:00",
						status: "预约",
						use: false
					},
				],
				departmentList : [{
						title: "内科"
					},
					{
						title: "外科"
					},
					{
						title: "中医科"
					},
					{
						title: "男科"
					},
					{
						title: "儿科"
					},
					{
						title: "传染科"
					},
					{
						title: "其它科室"
					},
				],
				subList : [
					[{
							title: "呼吸内科"
						},
						{
							title: "消化内科"
						},
						{
							title: "神经内科"
						},
						{
							title: "心血管内科"
						},
						{
							title: "肾内科"
						},
						{
							title: "血液内科"
						},
						{
							title: "免疫科"
						},
						{
							title: "内分泌科"
						},
					],
					[{
							title: "1"
						},
						{
							title: "消化内科"
						},
						{
							title: "神经内科"
						},
						{
							title: "心血管内科"
						},
						{
							title: "肾内科"
						},
						{
							title: "血液内科"
						},
						{
							title: "免疫科"
						},
						{
							title: "内分泌科"
						},
					],
				],
				// subTabIndex : 0,
				// subTab : subList[subTabIndex],
			}
		},
		onLoad(){
			console.log('onload');
			this.initDateList();
			this.initDateList2();
		},
		onShow() {
			console.log("im back");
			const register = this.$store.getters.getRegister;
			console.log(register)
			if(register.isFee){
				const index=register.index;
				this.cardList[index].status = '已预约';
				this.cardList[index].use = true;
			}
		},
		computed: {  
		    ...mapGetters(['getRegister']),  
		},
		methods:{
			initDateList() {
				console.log(this.dateList);
				// 获取当前日期  
				const currentDate = new Date();
				// 获取今天是周几（0-6，0表示星期日）  
				const dayOfWeek = currentDate.getDay();
				// 获取年、月、日
				const year = currentDate.getFullYear();  
				const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并且用padStart补全为两位数  
				const day = String(currentDate.getDate()).padStart(2, '0'); // 用padStart补全为两位数  
				// 将数字转换为对应的星期名称  
				const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
				const todayIs = weekDays[dayOfWeek];
				this.dateList.length = 0;
				// 填充数组，从今天的星期号开始，包括其后一周的星期号  
				for (let i = 0; i < 7; i++) {
					// 计算索引，确保索引在0-6的范围内循环  
					const index = (dayOfWeek + i) % 7;
					
					const date_obj = { title:weekDays[index], };
					this.dateList.push(date_obj);
				}
				console.log(this.dateList);
			},
			initDateList2() {
			  // 获取当前日期  
			  const currentDate = new Date();  
			    
			  // 填充数组，从今天开始，包括今后一周的日期信息  
			  for (let i = 0; i < 7; i++) {  
			    // 创建一个新的日期对象，表示当前日期加上i天  
			    const futureDate = new Date(currentDate);  
			    futureDate.setDate(currentDate.getDate() + i);  
			      
			    // 格式化日期为 YYYY-MM-DD 字符串  
			    const formattedDate = futureDate.toISOString().split('T')[0];  
			      
			    // 创建一个对象，包含格式化后的日期信息  
			    const dateObj = { date: formattedDate };  
			      
			    // 将对象推入数组  
			    this.dateList2.push(dateObj);  
				}
			},
			getSubtabs(index) {
				console.log(subTabIndex)
			},
			registerHandler(index) {
				// 提取信息
				const match = this.cardList[index].title.match(/：([\d-]+)/);
				const p1 = match ? match[1] : null;
				const p2 = this.cardList[index].doctor;
				const p3 = this.cardList[index].time;
				const idx = this.tabIndex;
				const p4 = this.dateList2[idx].date;
				const p5 = index;
				console.log(p1)
				console.log(p2)
				console.log(p3)
				console.log(p4)
				uni.navigateTo({
					url: `/pages/index/registerFee?room=${p1}&doctor=${p2}&time=${p3}&date=${p4}&index=${p5}`
				})
			}
		}
	}
</script>
<style>
</style>