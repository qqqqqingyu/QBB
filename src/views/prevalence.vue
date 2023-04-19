<template>
  <el-row>
    <TheNav v-if="this.user.phone == ''"></TheNav>
    <TheNavLogin v-else></TheNavLogin>

    <el-col :span="2" :offset="2" class="first bread left" >
      当前位置：
    </el-col>
    <el-col :span="10" class="first">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
        <el-breadcrumb-item :to="{ path: '/prevalence' }">流行度预测</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="13" :offset="2" class="last">
      <el-row style="margin-bottom: 15px">
        <el-col :offset="8" :span="8" class="center-vertically">
          <img src="src/assets/img/hot.svg" height="30" alt="热度">
          <h2 style="margin-left: 15px">视频流行度预测</h2>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="21" style="margin-bottom: 15px">
          <el-input
            placeholder="复制视频链接，为您自动填写"
            prefix-icon="el-icon-search"
            v-model="input">
          </el-input>
        </el-col>
        <el-col :span="3">
          <span class="analysis-btn" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">
            <img src="src/assets/img/analysis-icon.svg" height="20" alt="分析">
          </span>
        </el-col>

        <el-form ref="form" :inline="true" :model="form" class="my-form" :label-position="left">

        <el-col :span="4" class="part left center-vertically part-title-box">
            <img src="src/assets/img/up-form.svg" height="20" alt="up">
            <span>UP主信息</span>
        </el-col>

        <el-col class="form-part">

          <el-form-item label="粉丝数">
            <el-input v-model="form.fans" placeholder="当前粉丝数量（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="累计视频投稿量">
            <el-input v-model="form.cumulativeSubmissions" placeholder="累计视频投稿个数"></el-input>
          </el-form-item>
          <el-form-item label="累计播放量">
            <el-input v-model="form.cumulativeAirplay" placeholder="累计播放量（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="累计获赞数">
            <el-input v-model="form.cumulativeLike" placeholder="累计获赞数（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="视频更新频率">
            <el-input v-model="form.updateFrequency" placeholder="（单位：天）"></el-input>
          </el-form-item>
          <el-form-item></el-form-item>
        </el-col>

        <el-col :span="4" class="part left center-vertically part-title-box">
          <img src="src/assets/img/video-form.svg" height="20" alt="up">
          <span>投稿信息</span>
        </el-col>

        <el-col class="form-part">
          <el-form-item label="视频分区">
            <el-radio v-model="form.partition" label="1">生活区</el-radio>
            <el-radio v-model="form.partition" label="0">时尚区</el-radio>
          </el-form-item>
          <el-form-item label="商品性质和分区匹配">
            <el-radio v-model="form.matching" label="1">是&emsp;&emsp;</el-radio>
            <el-radio v-model="form.matching" label="0">否&emsp;&emsp;</el-radio>
          </el-form-item>
          <el-form-item label="是否有广告链接">
            <el-radio v-model="form.haveLink" label="1">是&emsp;&emsp;</el-radio>
            <el-radio v-model="form.haveLink" label="0">否&emsp;&emsp;</el-radio>
          </el-form-item>
          <el-form-item label="广告类型">
            <el-radio v-model="form.adType" label="1">硬广&emsp;</el-radio>
            <el-radio v-model="form.adType" label="0">软广&emsp;</el-radio>
          </el-form-item>
          <el-form-item label="是否为合作视频">
            <el-radio v-model="form.isCooperation" label="1">是&emsp;&emsp;</el-radio>
            <el-radio v-model="form.isCooperation" label="0">否&emsp;&emsp;</el-radio>
          </el-form-item>
          <el-form-item></el-form-item>
        </el-col>

        <el-col :span="4" class="part left center-vertically part-title-box">
          <img src="src/assets/img/data-form.svg" height="20" alt="up">
          <span>视频数据</span>
        </el-col>

        <el-col class="form-tip left">
          <img src="src/assets/img/tip.svg" height="25" alt="提示">
          <span>本系统适合分析弹幕量较多的视频。当视频弹幕较少时，结果仅供参考</span>
        </el-col>

        <el-col class="form-part">
          <el-form-item label="视频时长">
            <el-input v-model="form.videoLength" placeholder="（单位：秒）"></el-input>
          </el-form-item>

          <el-form-item label="播放量">
            <el-input v-model="form.airplay" placeholder="当前播放量（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="点赞">
            <el-input v-model="form.like" placeholder="当前点赞数（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="收藏">
            <el-input v-model="form.collection" placeholder="当前收藏量（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="转发">
            <el-input v-model="form.forwarding" placeholder="当前转发量（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="评论">
            <el-input v-model="form.comments" placeholder="当前评论条数（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label="弹幕数量">
            <el-input v-model="form.bulletScreen" placeholder="当前弹幕数量（单位：万）"></el-input>
          </el-form-item>
          <el-form-item label=""></el-form-item>
        </el-col>

        <el-col :span="4" class="part left center-vertically part-title-box">
          <img src="src/assets/img/said.svg" height="20" alt="发言">
          <span>关键内容</span>
        </el-col>

        <el-col class="form-tip left">
          <img src="src/assets/img/tip.svg" height="25" alt="提示">
          <span>输入或自动识别视频中发言（选填）</span>
        </el-col>

        <el-col >
          <el-row style="margin-bottom: 10px" class="center-vertically">
            <el-col :span="21">
              <el-input v-model="dynamicValidateForm.domain"></el-input>
            </el-col>
            <el-col :span="1" style="margin-left: 5%">
              <img src="src/assets/img/add.svg" class="hand" @click="addDomain" height="30" alt="添加">
            </el-col>
            <el-col :span="1" style="margin-left: 1%;opacity: 0 ">
              <img src="src/assets/img/delete.svg"
                   height="34" alt="删除">
            </el-col>
          </el-row>
          <el-row v-for="(domain, index) in dynamicValidateForm.domains" style="margin-bottom: 10px" class="center-vertically">
            <el-col :span="21">
              <el-input v-model="domain.value"></el-input>
            </el-col>
            <el-col :span="1" style="margin-left: 5%">
              <img src="src/assets/img/add.svg" class="hand" @click="addDomain" height="30" alt="添加">
            </el-col>
            <el-col :span="1" style="margin-left: 1%">
              <img src="src/assets/img/delete.svg" class="hand"
                   @click.prevent="removeDomain(domain)" height="34" alt="删除">
            </el-col>
          </el-row>
        </el-col>

        </el-form>

        <el-col :span="6" :offset="6" style="margin-top: 20px">
          <el-button type="primary" round plain>清空全部</el-button>
        </el-col>
        <el-col :span="6" style="margin-top: 20px">
          <el-button type="primary" round @click="toResult">提交分析</el-button>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="6" :offset="1" class="first">
      <el-row>
        <el-col class="tip-box" style="margin-top: 5px">
          <el-row class="tip-title">
            <span >填写提示</span>
          </el-row>
          <el-row class="left">
            <el-col class="center-vertically">
              <div><img src="src/assets/img/point-b.svg" height="20" alt="分点"></div>
              <span class="tip-point">广告类型</span>
            </el-col>
            <el-col class="tip-content">
              硬广:视频主题定制，全程广告<br>
              软广:视频中途植入广告
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: "prevalence",
  data(){
    return{
      input:'',
      form:{
        matching:'', //恰饭商品性质和视频分区是否匹配
        haveLink:'', //是否有广告链接
        adType:'',//类型
        isCooperation:'',//是否为合作视频
        cumulativeAirplay:'', //累计播放量
        cumulativeSubmissions:'',//累计视频投稿量
        cumulativeLike:'',//累计获赞数
        fans:'',//up粉丝数
        videoLength:'',//视频时长
        partition:'',//视频分区
        airplay:'',//播放量
        like:'',//点赞
        collection:'',//收藏
        forwarding:'',//转发
        comments:'',//评论
        bulletScreen:'',//弹幕数量
        updateFrequency:'',//视频更新频率
        coin:'',//投币
      },dynamicValidateForm: {
        domain:'',
        domains: [{
          value:''
        }],
      },
      fullscreenLoading: false
    }
  },
  methods:{
    toResult(){
      this.$confirm('是否更新用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'primary'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '用户信息已更新!'
        });
        this.$router.push('/result');
      })
    },
    // 表单动态添加
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    },
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.form.partition = "1",//视频分区
        this.form.matching = "0", //恰饭商品性质和视频分区是否匹配
        this.form.haveLink = "1", //是否有广告链接
        this.form.adType = "1",//类型
        this.form.isCooperation = "0",//是否为合作视频
        this.form.cumulativeAirplay = 251000, //累计播放量
        this.form.cumulativeSubmissions = 496,//累计视频投稿量
        this.form.cumulativeLike = 15000,//累计获赞数
        this.form.fans = 1838.6,//up粉丝数
        this.form.videoLength = 764,//视频时长
        this.form.airplay = 951.3,//播放量
        this.form.like = 62.3,//点赞
        this.form.collection = 9.9,//收藏
        this.form.forwarding = 3.2,//转发
        this.form.comments = 1.29,//评论
        this.form.bulletScreen = 11.3,//弹幕数量
        this.form.updateFrequency = 7,//视频更新频率
        this.form.coin = 20.7 //投币
        this.dynamicValidateForm.domain ="感谢甲方爸爸的大力支持！"
      }, 2000);
    }
  }
}
</script>

<style scoped>

.my-form .el-form-item{
  width: 48%;
  text-align: right;
}

.my-form .el-input{
  width: 100%;
}

.tip-content{
  font-size: 14px;
  color: #606266;
  padding-left: 20px;
}
.analysis-btn{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0 0 0 5px;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 8px 18px;
  font-size: 14px;
  border-radius: 4px;
  color: #FFF;
  background-image: linear-gradient(to right bottom, #48c6ef, #00b6f8, #00a4ff, #008fff, #4d75f8);
  border-color: #409EFF;
}

.analysis-btn:hover{
  opacity: 0.7;
}

.part{
  margin-top: 20px;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.part img{
  margin-right: 5px;
}

.form-part >>> .el-divider--horizontal{
  margin-top: 5px;
}

.form-part >>> .el-radio{
  /*width: 45%;*/
}

.part-title-box{
  border-bottom:  #498FC8 solid 2px;
  width: 100px;
}

.form-part >>> .el-form-item__label{
  float: left;
}

.form-tip{
  font-size: 13px;
  color: #7F7F7F;
  margin-bottom: 8px;
  display: flex;
  vertical-align: middle;
}
</style>
