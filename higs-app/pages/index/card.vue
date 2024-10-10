<template>
  <view>
    <iui-card title="预约列表" >
      <view class="yy" >
        <view class="yyitem" v-for="(item,index) in yyList" :key="index">
          <image class="item-image" :src="item.url" mode="aspectFit" />
          <view class="item-info">
            <text class="info-title">{{item.doc}}</text>
            <text class="info-detail">时间：{{item.time}}</text>
            <text class="info-detail">科室：{{item.room}}</text>
            <text class="info-detail">详细信息 > </text>
          </view>
          <view class="item-btn-container">
            <iui-button status="success" class="item-btn">预问诊</iui-button>
            <iui-button status="danger" class="item-btn btn-margin-top">取消预约</iui-button>
          </view> 
        </view>
      </view>
    </iui-card>
  </view>
</template>

<script>
	export default{
		data() {
			return {
				yyList: [
					{
						url:"/static/avatar/avatar3.png",
						doc: "张伟",
						time: "2024-9-09  17:00 ~ 19:00",
						room: "儿科",
					},
					{
						url:"/static/avatar/avatar1.png",
						doc: "杨涛",
						time: "2024-10-09 17:00 ~ 19:00",
						room: "消化内科",
					}
					
					
				]
			};
		},
	}
</script>

<style>
  .yyitem {
    display: flex;
    align-items: center; /* 垂直居中 */
	padding-bottom: 10px;
	
  }

  .item-image {
    width: 90px; /* 图片宽度 */
    height: 100px; /* 图片高度，根据需要调整 */
    margin-right: 16px; /* 图片与信息栏之间的间隔 */
  }

  .item-info {
    flex: 1; /* 占据剩余空间 */
  }

  .item-btn-container {
    display: flex;
    flex-direction: column; /* 按钮垂直排列 */
    margin-left: auto; /* 将按钮推向最右侧 */
    justify-content: center; /* 垂直居中对齐 */
  }

  .btn-margin-top {
    margin-top: 10px; /* 按钮之间的间隙 */
  }

  .item-btn {
    width: 100px; /* 可以根据需要调整按钮宽度 */
  }
</style>
