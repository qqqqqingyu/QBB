<template>
  <el-row>
    <TheNavLogin></TheNavLogin>

    <el-col :span="2" :offset="2" class="first bread left" >
      当前位置：
    </el-col>
    <el-col :span="10" class="first">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
        <el-breadcrumb-item :to="{ path: '/prevalence' }">流行度预测</el-breadcrumb-item>
        <el-breadcrumb-item>结果分析</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="13" :offset="2" class="left last result-title">
      <div class="center-vertically">
        <img src="src/assets/img/good1.svg" height="50" alt="优秀" style="margin-right: 8px">
        <h2>恭喜您！您的视频流行度处于较高水平！</h2>
      </div>
      <el-divider></el-divider>


      <el-row :gutter="20">
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" :value="value2" :title="title"></el-statistic>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <el-statistic title="类型">
              <template slot="formatter"><span class="my-tag">硬广</span></template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="4">
          <el-statistic title="分区">
            <template slot="formatter"><span class="my-tag">生活</span></template>
          </el-statistic>
        </el-col>
        <el-col :span="4">
          <div>
            <el-statistic title="广告链接">
              <template slot="formatter">
                <div  class="center-vertically my-statistic">
                  <img src="src/assets/img/false.svg" height="20" alt="否">
                  <span style=" font-size: 18px;">否</span>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <el-statistic title="合作视频">
              <template slot="formatter">
                <div  class="center-vertically my-statistic">
                  <img src="src/assets/img/false.svg" height="20" alt="是">
                  <span style=" font-size: 18px;">否</span>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-statistic title="商品性质和视频分区">
              <template slot="formatter">
                <div  class="center-vertically my-statistic">
                  <img src="src/assets/img/true.svg" height="20" alt="是">
                  <span style=" font-size: 18px;">匹配</span>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>

      <el-row class="result-box">
        <el-col :span="12" id="my-radar"></el-col>
        <el-col :span="12">
          <el-row class="result-content">
            <el-col :span="22" :offset="1" class="info-title">UP主信息</el-col>
            <el-col :span="13" :offset="1">累计视频投稿量:</el-col>
            <el-col :span="9" class="right">32</el-col>
            <el-col :span="13" :offset="1">累计获赞数:</el-col>
            <el-col :span="9" class="right">2.3w</el-col>
            <el-col :span="13" :offset="1">粉丝数:</el-col>
            <el-col :span="9" class="right">4.2w</el-col>
            <el-col :span="22" :offset="1" class="info-title">视频信息</el-col>
            <el-col :span="13" :offset="1">视频时长:</el-col>
            <el-col :span="9" class="right">673s</el-col>
            <el-col :span="13" :offset="1">累计播放量:</el-col>
            <el-col :span="9" class="right">3.5w</el-col>

          </el-row>
        </el-col>

        <el-col :span="24" class="prevalence">
          <span>流行度：4.60164</span>
        </el-col>

        <el-col class="last" >
          <el-row class="center-vertically">
            <img src="src/assets/img/suggestion.svg" height="30" alt="建议">
            <h3>您还可以采取以下策略提高您的视频流行度</h3>
          </el-row>
          <span class="subtitle">我们使用chatGPT为您实时生成建议</span>
          <el-skeleton :loading="loading"  animated>
            <template slot="template">
              <div style="padding: 14px;align-items: start;" v-for="j in 3">
                <el-skeleton-item variant="h3" style="width: 50%;" />
                <div v-for="i in 6"
                     style="display: flex; margin-top: 16px; height: 16px;"
                >
                  <el-skeleton-item variant="text" />
                </div>
              </div>
            </template>
          </el-skeleton>
          <el-row v-if="load">
            <h4>整体内容</h4>
            <p>从整体视频制作上，您还可以：</p>
            <ol>
              <li>优化视频标题和描述：标题和描述是让人们点击观看视频的关键。为了吸引更多的观众，标题和描述应该简短、吸引人、明确表达视频的主题和内容</li>
              <li>制作优质内容：制作高质量的视频是吸引更多观众的基本要素。您可以考虑加入一些特殊的效果、动画或剪辑，使视频更加生动有趣</li>
              <li>与受众互动：在视频下方留言区回复观众的评论，回答他们的问题，增强互动，吸引更多观众</li>
              <li>利用SEO优化：通过搜索引擎优化（SEO）的技术手段，包括关键词排名和元数据优化等方法，提高视频在搜索引擎中的排名，让更多人看到您的视频</li>
            </ol>

            <h4>详细建议</h4>
            <p>针对您的具体内容，可以调整以下部分：</p>
            <el-row class="suggestion">
              <el-col :span="22" :offset="1">
                您的表述：感谢甲方爸爸的大力支持！
              </el-col>
              <el-col :span="22" :offset="1">
                修改建议：可以将恰饭内容结合进视频剧情中，降低违和感。建议不直接表达“甲方”。
              </el-col>
              <el-col :span="22" :offset="1">
                理由：您的视频具有一定的情节性。强调“甲方”可能会降低观众观赏连贯性。
              </el-col>
            </el-row>


            <h4>灵感</h4>
            <p>您可以参考以下思路：</p>
            <ol>
              <li>单开一个恰饭标题系列，让老观众看标题就知道是恰饭视频，以免在视频中突然恰饭引起观众反感。如UP主老番茄的“番茄带你……”系列</li>
              <li>如果您的赞助商同意提供独家折扣或福利，您可以在视频中分享这些信息，以吸引更多的观众</li>
            </ol>
          </el-row>
        </el-col>


        <el-col :span="6" :offset="6" style="text-align: center">
          <el-button type="primary" plain @click="toPrevalence">再次填写</el-button>
        </el-col>
        <el-col :span="6" style="text-align: center">
          <el-button type="primary">重新生成策略</el-button>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="6" :offset="1" class="first tip-box left">
      <el-row class="tip-title">名词解释</el-row>
      <el-row class="left">
        <el-col  class="center-vertically">
          <div><img src="src/assets/img/point-b.svg" height="20" alt="分点"></div>
          <span class="tip-point">流行度</span>
        </el-col>
        <el-col  class="tip-content">
          视频流行度是指视频在社交媒体或网络上的普及程度和受欢迎程度。
          一个视频的流行度可以直接影响它在搜索引擎中的排名和曝光率，进而影响到它的传播和推广效果。
          对于创作者而言，提高视频的流行度有利于吸引更多的用户或粉丝等。
        </el-col>

      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from "_echarts@5.4.1@echarts";

export default {
  name: "result",
  data(){
    return{
      load:false
    }
  },
  mounted() {
    this.myRadar();
    this.setLoading();
  },
  methods:{
    toPrevalence(){
      this.$router.push('/prevalence');
    },
    myRadar(){
      let radar =  echarts.init(document.getElementById("my-radar"));
      let option = {
        color: ['#56A3F1', '#FF917C'],
        title: {
          // text: '投稿数据统计'
        },
        radar: [
          {
            indicator: [
              { text: '点赞' },
              { text: '投币' },
              { text: '收藏' },
              { text: '转发' },
              { text: '弹幕' },
              { text: '评论' }
            ],
            radius: 80, //半径
            startAngle: 90,
            splitNumber: 4,
            // shape: 'circle',
            axisName: {
              formatter: '{value}',
              color: '#428BD4',
              fontSize:'15px'
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)'
              }
            }
          }
        ],
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value: [71.14, 80.86, 18,56, 9.71, 8.50,9.71],
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: 'rgba(0, 165, 230, 0.1)',
                      offset: 0
                    },
                    {
                      color: 'rgba(0, 165, 230, 0.2)',
                      offset: 1
                    }
                  ])
                },
                label: {
                  show: true,
                  formatter: function (params) {
                    // 标签加上"W"
                    return params.value+'W';
                  }
                }
              }
            ]
          }
        ]
      };
      radar.setOption(option);
    },
    setLoading() {
      this.loading = true
      setTimeout(() => {
          this.loading = false;
          this.load = true;
      }
      , 3000)
    },
  }
}
</script>

<style scoped>
.result-box{
  line-height: 30px;
  margin-top: 30px;
  color: #606266;
}

.prevalence{
  font-size: 25px;
  font-weight: bolder;
  /*color: #008df2;*/
  color: #498FC8;
  text-align: center;
  margin-top: 15px;
  /*background-image: linear-gradient(to right, #c6fbff, #d2fcff, #ddfdff, #e8fdff, #f3feff);*/
  background-image: linear-gradient(to right, #a3d6ff, #b6deff, #c8e5ff, #d9edff, #eaf5ff);
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 30px;
}

.subtitle{
  color: #7F7F7F;
  font-size: 15px;
  margin-bottom: 20px;
}

.result-box li{
  display: list-item;
}

.result-box img{
  margin-right: 5px;
}

.result-title >>> .el-divider--horizontal{
  margin-top: 0;
}

#my-radar{
  height: 230px;
}

.my-tag{
  background-color: #ecf5ff;
  display: inline-block;
  padding: 4px 10px 6px;
  font-size: 16px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}

.my-statistic span{
  font-size: 18px;
}

.my-statistic img{
  margin-right: 5px;
}

.result-content{
  border-radius: 4px;
  border: 1px solid #EBEEF5;
  background-color: #FFF;
  overflow: hidden;
  -webkit-transition: .3s;
  transition: .3s;
  font-size: 15px;
  /*box-shadow: 0 2px 2px 2px rgb(0 0 0 / 10%);*/
}

.result-content .el-col{
  border-bottom: #EBEEF5 solid 0.8px;
}

.info-title{
  font-weight: bolder;
  font-size: 16px;
  line-height: 35px;
}

.suggestion{
  border: 1px solid #EBEEF5;
  border-radius: 10px;
  padding: 10px 5px;
}

.suggestion .el-col{
  border-bottom: 1px solid #EBEEF5;
}
</style>
