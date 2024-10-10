<template>
	<view class='container'>
		<!-- 搜索栏 -->
		<view class="search">
			<iui-search v-model="inputValue" class="iui-search">
				<template #suffix>
					<iui-button type="primary">查询</iui-button>
				</template>
			</iui-search>
		</view>

		<!-- 6宫格 -->
		<iui-grid rowGap="8" class="grid">
			<iui-grid-row v-for="(row, rowIndex) in gridList" :key="rowIndex" class="grid-row">
				<iui-grid-item v-for="(grid, gridIndex) in row" :key="`${rowIndex}-${gridIndex}`" class="grid-item">
					<!-- 点击按钮包围 -->
					<button v-on:click="to(grid.event)" class="grid-btn">
						<view class="grid-view">
							<view class="grid-icon">
								<iui-icon :color="grid.color" :name="grid.icon" size="25"></iui-icon>
							</view>
							<view>{{ grid.title }}</view>
						</view>
					</button>
				</iui-grid-item>
			</iui-grid-row>
		</iui-grid>


		<!-- 预约列表 -->
		
		<view class="list">
			<iui-collapse label="预约列表">
				<view class="yy" v-for="(item,index) in yyList" :key="index">
					<iui-card>
						<template #extra>
							<iui-button status="success" class="item-btn" @click="toAsk">预问诊</iui-button>
							<iui-button status="danger" class="item-btn btn-margin-top">取消预约</iui-button>
						</template>
						<view class="item-info">
							<view class="info-title">医生：{{item.doc}}</view>
							<view class="info-detail">时间：{{item.time}}</view>
							<view class="info-detail">科室：{{item.room}}</view>
							<view class="info-detail">详细信息 ></view>
						</view>
						<template #title>
							<image class="item-image" :src="item.url" mode="aspectFit" />
						</template>
					</iui-card>
				</view>
				
			</iui-collapse>
			<iui-divider></iui-divider>
		</view>

		<!-- 其他信息 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//定义一个存放宫格数据的空数组
				gridList: [
					[{
							title: "智能导诊",
							desc: "Description1",
							icon: "robot",
							color: "#165DFF",
							event: "toGuide"
						},
						{
							title: "科室导航",
							desc: "Description2",
							icon: "location",
							color: "#F53F3F"
						},
						{
							title: "医院介绍",
							desc: "Description3",
							icon: "info-circle",
							color: "#00B42A"
						}
					],
					[{
							title: "科室预约",
							desc: "Description4",
							icon: "border",
							color: "#165DFF",
							event: "toRegister"
						},
						{
							title: "医疗知识",
							desc: "Description5",
							icon: "key",
							color: "#F53F3F"
						},
						{
							title: "使用指南",
							desc: "Description6",
							icon: "compass",
							color: "#00B42A"

						}
					]
				],
				yyList: [{
						url: "/static/avatar/avatar3.png",
						doc: "张伟",
						time: "2024-9-09  17:00 ~ 19:00",
						room: "儿科 2-201",
					},
					{
						url: "/static/avatar/avatar1.png",
						doc: "杨涛",
						time: "2024-10-09 17:00 ~ 19:00",
						room: "消化内科 3-105",
					}


				]
			};
		},
		methods: {
			toAsk() {
				uni.navigateTo({
					url: `/pages/message/ask`
				})
			},
			to(event) {
				console.log("toing")
				if (this[event]) {
					this[event]();
				} else {
					console.error(`Method '${event}' does not exist.`);
				}
			},
			toGuide() {
				uni.navigateTo({
					url: `/pages/message/guide`
				})
			},
			toRegister() {
				uni.navigateTo({
					url: `/pages/index/register`
				})
			}


		},
		// 页面一进来就加载
		onLoad() {

		}
	}
</script>


<style lang="scss">
	//搜索栏
	.search {
		position: relative;
		width: 100%;
		margin: 15rpx 0rpx 5rpx 0rpx;
	}

	//宫格
	.grid {
		padding-bottom: 15rpx;
	}

	.grid-row {
		padding-bottom: 5rpx;
	}

	.grid-item {
		
	}

	.grid-btn {
		height: 100%;
		width: 100%;
	}

	.grid-view {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 10rpx 5rpx;
		color: $color-text;


	}
	.grid-icon {
		border-radius: 10rpx;
		width: 40%;
		height: 40%;
		padding: 10rpx;
		background-color: var(--iui-primary-2);
	}




	//list
	.yy {
		display: flex;
		flex-direction: column;
		/* 默认值，此处仅作说明 */
		align-items: flex-start;
		/* 子元素在交叉轴上的对齐方式，这里设置为左对齐 */
		padding: 10px;
	}

	.yyitem {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.item-image {
		width: 80px;
		/* 设定图片宽度 */
		height: 80px;
		/* 设定图片高度，根据需要调整 */
		margin-right: 10px;
		/* 右侧外边距，与右侧信息数据保持间距 */
	}

	.item-info {
		flex: 1;
		/* 占据剩余空间 */
		display: flex;
		/* 如果需要内部元素也使用flex布局（如垂直排列），则启用 */
		flex-direction: column;
		/* 设置为列方向，使得内部元素从上至下排列 */
	}

	.info-title {
		font-weight: bold;
	}

	.info-detail {
		/* 这里可以根据需要添加样式，如字体大小、颜色等 */
	}

	.item-btn {
		display: flex;
		flex-direction: column;
		margin-left: auto;
	}
</style>