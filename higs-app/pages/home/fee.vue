<template>
	<!-- 缴费栏 -->
	<iui-list class="fee" v-for="(item,index) in feeList" :key="index">
		<iui-cell clsss="cell" :label="item.way" :desc="item.datetime" >
			<template #extra>
				<text>{{item.num}}元</text>
			</template>
		</iui-cell>
	</iui-list>


</template>

<script>
	export default {
		data() {
			return {
				record: 0,
				feeList: []
			};
		},
		onLoad(options){
			this.record = options.record;
			console.log(this.record);
			for (let i = 0; i < this.record; i++) {
				const way = "挂号缴费";
				const date = this.getRandomDate("2020-1-1","2024-10-1");
				const time = this.getRandomTime("8:00", "22:00");
				const num = 10;
				const datetime = this.formatDateTime (date,time);
				const newFeeItem = {  
				    way: way,  
				    date: date, // 注意：这里保留原始日期格式  
				    time: time,  
				    num: num.toFixed(2), // 转换为两位小数格式的字符串  
				    datetime: datetime // 使用格式化后的日期和时间  
				}; 
				this.feeList.push(newFeeItem)
				// console.log(datetime)
			}
			
			// console.log(date);
			// console.log(time);
		},
		methods: {
			parseDateString(dateString) {  
			    // 分割日期字符串为年、月、日部分  
			    const [year, month, day] = dateString.split('-').map(part => parseInt(part, 10));  
			    // 确保月份是从0开始的，如果月份小于10，则前面没有前导零  
			    const realMonth = month - 1; // JavaScript Date 月份从0开始  
			    // 创建一个新的 Date 对象  
			    return new Date(year, realMonth, day);  
			},  
			getRandomDate(startDateString, endDateString) {  
			    // 解析输入的日期字符串为 Date 对象  
			    const startDate = this.parseDateString(startDateString);  
			    const endDate = this.parseDateString(endDateString);  
			    // 获取时间戳  
			    const start = startDate.getTime();  
			    const end = endDate.getTime();  
			    // 生成随机时间戳  
			    const randomTime = Math.floor(Math.random() * (end - start)) + start;  
			    // 创建随机日期对象  
			    const randomDate = new Date(randomTime);  
			    // 格式化日期为 YYYY-MM-DD 格式  
			    const formattedDate = randomDate.getFullYear() + '-' +  
			        String(randomDate.getMonth() + 1).padStart(2, '0') + '-' +  
			        String(randomDate.getDate()).padStart(2, '0');  
			    return formattedDate;  
			},
			parseTimeString(timeString) {  
			    // 分割时间字符串为小时和分钟部分  
			    const [hours, minutes] = timeString.split(':').map(Number);  
			    // 计算从当天午夜开始的总分钟数  
			    const totalMinutes = hours * 60 + minutes;  
			    return totalMinutes;  
			}  ,
			formatMinutesToTime(totalMinutes) {  
			    // 计算小时和分钟  
			    const hours = Math.floor(totalMinutes / 60);  
			    const minutes = totalMinutes % 60;  
			    // 格式化为 HH:mm 格式  
			    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');  
			} ,
			getRandomTime(startTimeString, endTimeString) {  
			    // 解析输入的时间字符串为总分钟数  
			    const startTime = this.parseTimeString(startTimeString);  
			    const endTime = this.parseTimeString(endTimeString);  
			    // 生成一个从 startTime 到 endTime 之间的随机分钟数  
			    const randomMinutes = Math.floor(Math.random() * (endTime - startTime)) + startTime;  
			    // 将随机分钟数转换回格式化的时间字符串  
			    return this.formatMinutesToTime(randomMinutes);  
			}, 
			formatDateTime(dateString, timeString) {  
			    // 分割日期字符串为年、月和日部分  
			    const [year, month, day] = dateString.split('-').map(part => {  
			        // 处理月份和日期，确保它们是两位数，如果不是则在前面补零  
			        return parseInt(part, 10) < 10 ? '0' + parseInt(part, 10) : part;  
			    });  
			  
			    // 分割时间字符串为小时和分钟部分（这里不需要额外处理，因为已经假设输入是有效的）  
			    const [hours, minutes] = timeString.split(':');  
			  
			    // 格式化日期和时间字符串  
			    const formattedDate = `${year}年${month}月${day}日`;  
			    const formattedTime = `${hours}:${minutes}`;  
			  
			    // 组合日期和时间  
			    return `${formattedDate} ${formattedTime}`;  
			} 
		}
	}
</script>

<style>
	.fee {}

	.cell {
		/* border: 1rpx solid #bdbdbd; */
	}
</style>