<template>
  <el-row class="grey-bg">
    <TheNav v-if="this.user.phone == ''"></TheNav>
    <TheNavLogin v-else></TheNavLogin>

    <el-col :span="2" :offset="2" class="first bread left" >
      当前位置：
    </el-col>
    <el-col :span="10" class="first">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
        <el-breadcrumb-item :to="{ path: '/square' }">视频广场</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/precaution' }">视频预警详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="20" :offset="2" class="main-box last">
      <el-row>
        <el-col :span="16"  class="precaution-box">

          <el-row class="left">
            <el-col  style="text-align: left">
              <div class="center-vertically">
                <img src="src/assets/img/video-example.svg" height="20" alt="优秀" style="margin-right: 8px">
                <h2>{{ videoTitle }}</h2>
              </div>
              <el-divider></el-divider>
            </el-col>

            <el-col class="precaution-value low" v-if="precaution=='低'">
              <span >弹幕预警程度:{{ precaution }}</span>
            </el-col>
            <el-col class="precaution-value medium" v-else-if="precaution=='中'">
              <span >弹幕预警程度:{{ precaution }}</span>
            </el-col>
            <el-col class="precaution-value high" v-else>
              <span >弹幕预警程度:{{ precaution }}</span>
            </el-col>

            <el-col :span="24" id="time"></el-col>

            <el-col class="left precaution-words last">
              <el-col class="left precaution-words">
                <span class="left-part-title">极端情感词</span>
                <el-row  style="margin-top: 10px">
                  <el-col :span="4">积极情感程度</el-col>
                  <el-col :span="19" :offset="1" class="precaution-bar-pos"></el-col>
                </el-row>
                <el-row style="margin-top: 15px" class="center">
                  <el-col :span="4" class="word-box">
                    <div class="precaution-word-pos1 word">大手笔</div>
                  </el-col>
                  <el-col :span="4" class="word-box">
                    <div class="precaution-word-pos2 word">很漂亮</div>
                  </el-col>
                  <el-col :span="4" class="word-box">
                    <div class="precaution-word-pos3 word">如痴如醉</div>
                  </el-col>
                  <el-col :span="3" class="word-box">
                    <div class="precaution-word-pos4 word">太牛</div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 20px" class="center">
                  <el-col :span="4">消极情感程度</el-col>
                  <el-col :span="19" :offset="1" class="precaution-bar"></el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                  <el-col :span="3" class="word-box">
                    <div class="precaution-word-neg1 word">觊觎</div>
                  </el-col>
                  <el-col :span="3" class="word-box">
                    <div class="precaution-word-neg2 word">扯淡</div>
                  </el-col>
                  <el-col :span="3" class="word-box">
                    <div class="precaution-word-neg2 word">不要脸</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-col>

          </el-row>
        </el-col>

        <el-col :span="7" :offset="1" >
          <el-row>
            <el-col class="tip-box" style="margin-top: 70px">
              <el-row class="tip-title">
                <span>名词解释</span>
              </el-row>
              <el-row class="left">
                <el-col class="center-vertically">
                  <div><img src="src/assets/img/point-b.svg" height="20" alt="分点"></div>
                  <span class="tip-point">预警程度</span>
                </el-col>
                <el-col class="tip-content">
                  弹幕预警程度指通过对弹幕的分析和识别，检测其中包含的极端负面情感词汇，例如暴力、歧视、辱骂、诽谤等。再根据其严重程度，给出相应预警提示。
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from "_echarts@5.4.1@echarts";
import {popularitySH, popularitySS} from "../api/video";

export default {
  name: "precaution",
  data(){
    return{
      precaution:this.$route.query.precaution,
      videoTitle:this.$route.query.videoTitle,
      input:'',
    }
  },
  mounted() {
    this.popularityData();
  },
  methods:{
    popularityData(){
      if(this.getArea === '生活'){
        popularitySH().then(res =>{
          this.location = res.data.location
          this.positive = res.data.positive
          this.negative = res.data.negative
          this.adStart = res.data.adStart
          this.adEnd = res.data.adEnd
          this.myTime();
        })
          .catch((res) => {
            console.log('生活区折线图接口调用失败：' + res);
          });
      }else{
        popularitySS().then(res =>{
          this.location = res.data.location
          this.positive = res.data.positive
          this.negative = res.data.negative
          this.adStart = res.data.adStart
          this.adEnd = res.data.adEnd
          this.myTime();
        })
          .catch((res) => {
            console.log('时尚区折线图接口调用失败：' + res);
          });
      }
    },
    myTime(){
      let line =  echarts.init(document.getElementById("time"));
      let option1 = {
        title: [
        //   {
        //   text: '弹幕数量-时间趋势图',
        //   left: 'center',
        //   textStyle:{
        //     fontSize:15
        //   }
        // },
          {
            // top: '50%',
            left: 'center',
            text: '弹幕情感-时间趋势图',
            textStyle:{
              fontSize:15
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: [
            { name:'积极情感值',itemStyle: {color: '#77d07a'},lineStyle:{color: '#77d07a'} },
            { name:'消极情感值',itemStyle: {color: '#0088C6'},lineStyle:{color: '#0088C6'} }
          ],
          left:10
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: [
          {
          type: 'category',
          boundaryGap: false,
          // prettier-ignore
            data: this.location
          },
        ],
        yAxis: [
          {
          type: 'value',
          // y轴标签
          axisLabel: {
            formatter: '{value} '
          },
          axisPointer: {
            snap: true
          }
        },
        ],
        // 分成两个图
        grid: [
          {
            bottom: '13%',
          }
        ],
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 5,
            inRange: {
              color: ["#61C365","#77d07a","#8cdd8e", "#a0e9a3", "#b5f6b8", "#00D9D4","#86DEFF"]
            }
          },
          {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            min: -6,
            max: 0,
            inRange: {
              color: ["#0067A2","#0088C6","#4596E6", "#00ABEB", "#00C4EA"]
            }
          }
        ],
        series: [
          {
            name:'积极情感值',
            type: 'line',
            smooth: true,
            data: this.positive,
            markArea: {
              itemStyle: {
                color: 'rgba(192,255,249, 0.4)'
              },
              // 标记区间
              data: [
                [
                  {
                    name: '广告区间',
                    xAxis: this.adStart
                  },
                  {
                    xAxis: this.adEnd
                  }
                ]
              ]
            },
            // xAxisIndex: 1,
            // yAxisIndex: 1
          },
          {
            name:'消极情感值',
            type: 'line',
            smooth: true,
            data: this.negative,
            // xAxisIndex: 1,
            // yAxisIndex: 1
          }
        ]
      };
      line.setOption(option1);
    },
  }
}
</script>

<style scoped>
/* element滚动条组件 隐藏水平滚动条 */
.my-scroll >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}

.precaution-words{
  padding-top: 40px;
}

.word-box{
  padding-right: 10px;
}

.word{
  text-align: center;
  border-radius: 15px;
  padding:5px 0 10px 5px;
  color: #FFFFFF;
}

.precaution-word1{
  background-image: linear-gradient(to right, #a2e8ff, #9de6fe, #99e4fd, #94e2fc, #8fe0fb);
}

.precaution-word2{
  background-image: linear-gradient(to right, #69c5e7, #61c0e4, #59bce1, #50b7df, #47b3dc);
}

.left-part-title{
  font-size: 20px;
}

.precaution-bar{
  height: 6px;
  margin-top: 9px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #a2e8ff, #86d6f3, #69c5e7, #47b3dc, #11a2d1);
}

.precaution-value{
  font-size: 21px;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  padding: 8px;
  border-radius: 5px;
  font-weight: bolder;
}

.low{
  background-image: linear-gradient(to right, #cbffe6, #d6ffeb, #e1fff1, #ecfff6, #f7fffb);
  color: #55bb8a;
}

.medium{
  background-image: linear-gradient(to right, #fcde85, #fce293, #fce5a1, #fbe9af, #fbecbd);
  color: #DEA400;
}

.high{
  background-image: linear-gradient(to right, #feb6b6, #ffc2bf, #ffcdc9, #ffd9d4, #ffe4e0);
  color: #e46063;
}

.our-ol li{
  display: list-item;
  line-height: 30px;
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

.subtitle{
  color: #7F7F7F;
  font-size: 15px;
  margin-bottom: 20px;
}

.precaution-box >>> .el-divider--horizontal{
  margin-top: 0;
}

#time{
  height: 300px;
  /*margin-top: 20px;*/
  border: 1px solid #EBEEF5;
  padding-top: 30px;
}

.precaution-words{
  padding-top: 20px;
}

.word-box{
  padding-right: 10px;
}

.word{
  text-align: center;
  border-radius: 15px;
  padding:5px 0 10px 5px;
  color: #FFFFFF;
}


.precaution-word-neg1{
  background-image: linear-gradient(to right, #a2e8ff, #9de6fe, #99e4fd, #94e2fc, #8fe0fb);
}

.precaution-word-neg2{
  background-image: linear-gradient(to right, #69c5e7, #61c0e4, #59bce1, #50b7df, #47b3dc);
}

.precaution-word-neg3{
  background-image: linear-gradient(to right, #5ab9dc, #52b5d9, #4ab0d7, #41acd4, #38a8d2);
}

.precaution-word-pos1{
  background-image: linear-gradient(to right, #b4ffdf, #a2f9d4, #90f3c8, #7cecbd, #68e6b1);
}

.precaution-word-pos2{
  background-image: linear-gradient(to right, #5cdea6, #54d89f, #4cd399, #43cd92, #3ac88c);
}

.precaution-word-pos3{
  background-image: linear-gradient(to right, #46d195, #40ca8f, #3ac388, #34bc82, #2db57c);
}

.precaution-word-pos4{
  background-image: linear-gradient(to right, #33c686, #2fbe80, #2bb77b, #27af75, #23a870);
}

.precaution-bar-pos{
  height: 6px;
  margin-top: 9px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #b4ffdf, #8ee6be, #69cd9c, #41b47b, #019b5a);
}

</style>
