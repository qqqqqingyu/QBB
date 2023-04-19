<template>
  <el-row>
    <TheNav v-if="this.user.phone == ''"></TheNav>
    <TheNavLogin v-else></TheNavLogin>

    <el-col style="margin-top: 50px">
      <img src="src/assets/img/poster-personal2.png" width="100%" alt="背景">
    </el-col>

    <el-col class="personal-info">
      <img src="src/assets/img/avatar.jpg" width="110" alt="头像" style="border-radius: 50%" >
      <h3>{{ this.user.userName }}</h3>
      <span>{{ userType }}</span>
    </el-col>

    <el-col class="content-box">
      <el-row>
        <el-col :span="6" :offset="2" class="part left">
         <el-row class="content">
           <el-col :span="22" :offset="1" class="center-vertically">
             <img src="src/assets/img/personal.svg" width="25" alt="个人信息" class="my-icon">
             <h3 style="color: #2c3e50;">个人信息</h3>
           </el-col>
           <el-col :span="15" :offset="1">累计视频发布量</el-col>
           <el-col :span="8">{{ cumulativeSubmissions }}</el-col>

           <el-col :span="15" :offset="1">累计播放量</el-col>
           <el-col :span="8">{{ cumulativeAirplay }}W</el-col>

           <el-col :span="15" :offset="1">累计获赞数</el-col>
           <el-col :span="8">{{ cumulativeLike }}W</el-col>

           <el-col :span="15" :offset="1">粉丝数</el-col>
           <el-col :span="8">{{ fans }}W</el-col>
         </el-row>
        </el-col>

        <el-col :span="13" :offset="1" class="part last right-box left">
          <el-row>
            <el-col :span="16">
              <h3 style="color: #2c3e50;margin-top: 10px;">历史记录</h3>
            </el-col>
            <el-col :span="8" class="right">
              <el-radio-group v-model="part" class="radio-bg">
                <el-radio-button class="industry-radio" label="流行度"></el-radio-button>
                <el-radio-button class="industry-radio" label="预警"></el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>


          <el-row class="history left" v-if="part == '预警'" v-for="item in precautionData">
            <el-col :span="18" :offset="1" class="right-part-title">
              <span>{{ item.videoTitle }}</span>
              <span class="history-tag2">弹幕预警</span>
            </el-col>
            <el-col :span="4" class="right">{{ item.date }}</el-col>

            <el-col :span="22" :offset="1">
              预警程度：{{ item.precaution }}
            </el-col>
            <el-col :span="22" :offset="1" class="more">
              建议：
              <span v-for="i in item.precautionAdvice.length">
                {{ item.precautionAdvice[i-1] }}
              </span>
            </el-col>

            <el-col :span="23" class="right">
              <a class="hand" @click="openPrecautionDeatil(item)">查看详情</a>
            </el-col>
          </el-row>

          <el-row class="history left" v-else v-for="item in popularityData">
            <el-col :span="18" :offset="1" class="right-part-title">
              <span >{{ item.videoTitle }}</span>
              <span class="history-tag1">流行度预测</span>
            </el-col>
            <el-col :span="4" class="right">{{ item.date }}</el-col>

            <el-col :span="22" :offset="1">
              预测分数：{{ item.point }}
            </el-col>
            <el-col :span="22" :offset="1" class="more">
              建议：
              <span v-for="i in item.totalAdvice.length">
                {{ item.totalAdvice[i-1] }}
              </span>
            </el-col>

            <el-col :span="23" class="right">
              <a class="hand" @click="openPopularityDetail(item)">查看详情</a>
            </el-col>
          </el-row>

        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import {historyPopularity, historyPrecaution, userInfo} from "../api/personal";

export default {
  name: "personalCenter",
  data(){
    return{
      phoneData:{
        phone:this.user.phone
      },
      part:'流行度', //
      // userName:'',
      userType:'', // 用户类型
      cumulativeSubmissions:'', // 累计视频投稿量
      cumulativeAirplay:'', // 累计视频投稿量
      cumulativeLike:'', // 累计获赞数
      fans:'', // 粉丝数
      popularityData:'', // 流行度历史记录
      precautionData:'', // 预警器历史记录
      test:{
        totalAdvice:['单开一个恰饭标题系列，让老观众看标题就知道是恰饭视频，以免在视频中突然恰饭引起观众反感'
        ,'单开一个恰饭标题系列，让老观众看标题就知道是恰饭视频，以免在视频中突然恰饭引起观众反感',
        '单开一个恰饭标题系列，让老观众看标题就知道是恰饭视频，以免在视频中突然恰饭引起观众反感。'],
        yourFormulation:['单开一个恰饭标题系列，让如UP主老番茄的'],
        popularityAdvice:['aaa','aasdasdadad1'],
        reason:['1ad','adsa1','12e'],
        inspiration:['aa','ss','aaa']
      }
    }
  },
  mounted() {
    // this.userInfoData()
    // this.historyPopularityData()
    // this.historyPrecautionData()
  },
  methods:{
    userInfoData(){
      userInfo(this.phoneData).then(res=>{
        // this.userName = res.data.userName
        this.userType = res.data.userType
        this.cumulativeSubmissions = res.data.cumulativeSubmissions
        this.cumulativeAirplay = res.data.cumulativeAirplay
        this.cumulativeLike = res.data.cumulativeLike
        this.fans = res.data.fans
      })
    },
    historyPopularityData(){
      historyPopularity(this.phoneData).then(res=>{
        this.popularityData = res.data
      })
        .catch((res) => {
        console.log('流行度历史接口调用失败：' + res);
      });
    },
    historyPrecautionData(){
      historyPrecaution(this.phoneData).then(res=>{
        this.precautionData = res.data
      })
        .catch((res) => {
          console.log('预警器历史接口调用失败：' + res);
        });
    },
    openPopularityDetail(content){
      let adviceHtml = ''
      let detailsHtml = ''
      let inspirationHtml = ''

      for(let i = 1; i <= content.totalAdvice.length; i++){
        adviceHtml = adviceHtml + '<li>'+content.totalAdvice[i-1]+'</li><br>'
      }

      for(let i = 1; i <= content.yourFormulation.length; i++){
        detailsHtml = detailsHtml + '<ol><li>您的表述：'+content.yourFormulation[i-1]+'</li><br>' +
            '<li>修改建议：'+content.popularityAdvice[i-1]+'</li><br>' +
            '<li>理由：'+content.reason[i-1]+'</li><br>' +
          '</ol>';
      }

      for(let i = 1; i <= content.inspiration.length; i++){
        inspirationHtml = inspirationHtml + '<li>'+content.inspiration[i-1]+'</li><br>'
      }

      let adviceContent = '<el-scrollbar style="height: 200px" class="my-scroll">' +
      '<div><h4>整体内容</h4>' +
      '          <p>从整体视频制作上，您还可以：</p>' +
      '          <ol>' + adviceHtml +
      '          </ol>' +
      '          <h4>详细建议</h4>' +
      '          <p>针对您的具体内容，可以调整以下部分：</p>' + detailsHtml+
      '          <h4>灵感</h4>' +
      '          <p>您可以参考以下思路：</p>' +
      '          <ol>' + inspirationHtml +
      '          </ol></div></el-scrollbar>'

      this.$notify({
        title: '建议',
        dangerouslyUseHTMLString: true,
        message: adviceContent,
        position: 'top-left',
        duration: 0
      });
    },
    openPrecautionDeatil(content){
      let adviceHtml = ''

      for(let i = 1; i <= content.totalAdvice.length; i++){
        adviceHtml = adviceHtml + '<li>'+content.totalAdvice[i-1]+'</li><br>'
      }

      let adviceContent = '<el-scrollbar style="height: 200px" class="my-scroll">' +
        '<p>您可以尝试使用以下方法降低负面反馈：</p>' +
        '<ol>' + adviceHtml +
        '</ol></el-scrollbar>'

      this.$notify({
        title: '建议',
        dangerouslyUseHTMLString: true,
        message: adviceContent,
        position: 'top-left',
        duration: 0
      });

    }
  }
}
</script>

<style scoped>
.personal-info{
  transform:translateY(-80px);
  height: 100px;
}
.personal-info h3{
  margin-bottom: 5px;
  margin-top: 5px;
}

.content-box{
  background: rgb(247,249,250);
  padding-top: 30px;
}

.content{
  color: #7F7F7F;
  line-height: 30px;
}

.part{
  background: #FFFFFF;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.right-box{
  padding-left: 1%;
  padding-right: 1%;
}

.history{
  border: 1px solid #EBEEF5;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #7F7F7F;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.right-part-title{
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 16px;
}

.history-tag1{
  color: #409eff;
  border: #409eff solid 1px;
  border-radius: 20px;
  padding: 4px 6px;
  margin-left: 5px;
  font-weight: 500;
  font-size: 12px;
}

.history-tag2{
  color: #FF6655;
  border: #FF6655 solid 1px;
  border-radius: 20px;
  padding: 4px 6px;
  margin-left: 5px;
  font-weight: 500;
  font-size: 12px;
}

.el-notification{
  width: 100%;
}

.more{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.radio-bg {
  padding: 5px;
  border-radius: 5px;
}

/*被选后的单选框颜色*/
.industry-radio >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: rgb(21, 154, 245);
  background: #e5f1ff;
}

/*单选框样式*/
.industry-radio >>> .el-radio-button__inner {
  border-radius: 5px;
  background: #F5F8FA;
  color: #7F7F7F;
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
  margin-left: 5px;
}

/*单选框覆盖原有阴影*/
.industry-radio >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: none;
}

/* element滚动条组件 隐藏水平滚动条 */
.my-scroll >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
