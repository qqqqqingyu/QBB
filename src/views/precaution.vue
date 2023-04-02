<template>
  <el-row class="grey-bg">
    <TheNavLogin></TheNavLogin>

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
                <h2>【广场往事】欲戴皇冠，必承其重！</h2>
              </div>
              <el-divider></el-divider>
            </el-col>

            <el-col class="precaution-value">
              <span >弹幕预警程度:低</span>
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

export default {
  name: "precaution",
  data(){
    return{
      input:'',
    }
  },
  mounted() {
    this.myTime();
  },
  methods:{
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
            data: [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900,910,920,930,940,950,960,970,980,990,1000,1010,1020,1030,1040,1050,1060,1070,1080,1090,1100,1110,1120,1130]
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
            // prettier-ignore
            data: [0.779564141,1.003322928,0.781334921,0.484618275,0.648131846,0.545476427,0.872368856,1.192477103,1.438008025,0.919013583,0.733548637,1.514565986,1.424719881,1.844154055,1.35657903,1.405941015,1.006139905,0.594113714,0.58589241,0.70736814,0.540940547,1.096176874,1.172111139,1.00833882,0.743375429,0.951472082,2.03474042,1.583043309,1.020697599,0.780350193,0.478508069,1.146455832,2.098123827,1.948855936,1.325239191,1.678336282,2.313948983,1.698690611,1.082720929,0.734549886,0.578856662,0.430431828,0.626282119,1.077999088,1.024759171,1.164350897,1.126465211,1.858335183,1.559930187,1.24120413,1.153064793,0.702757808,0.650680702,0.91728658,1.014312831,0.866795789,1.67488741,2.98489838,2.006155317,1.096097967,1.590532682,1.436491827,1.505769012,1.128311496,0.992518579,0.864765944,0.906917794,1.433678713,1.313879024,1.204753797,1.03902405,0.860502466,1.032536352,1.834073439,2.663177127,2.352946529,1.545593118,0.946229641,0.91934024,1.407062562,0.801721334,1.168923815,0.748912021,0.612109346,1.843995338,1.518525039,0.585122893,0.727626402,0.512781257,0.835835184,1.275256201,1.127178559,0.855725353,1.452827807,1.073754845,2.40866697,2.118114052,1.419667106,0.636479496,1.432193093,1.387110779,1.403673354,1.464524155,1.055797628,1.048981019,1.142300411,1.109001581,0.896350277,0.859997084,1.345122226,0.9796711,0.902872286,0.62381086,1.271972724],
            markArea: {
              itemStyle: {
                color: 'rgba(192,255,249, 0.4)'
              },
              // 标记区间
              data: [
                [
                  {
                    name: '广告区间',
                    xAxis: '230'
                  },
                  {
                    xAxis: '1130'
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
            // prettier-ignore
            data: [-0.230110959,-0.334159695,-0.637578122,-0.658162828,-0.445939344,-0.389337176,-0.491173909,-0.320815768,-0.240580218,-0.545820871,-0.542276052,-0.522596113,-0.255850656,-0.348938463,-0.47024414,-0.530884535,-0.512393737,-0.103887754,-0.540267248,-0.922742888,-0.466977467,-0.253324953,-0.393912239,-0.376808772,-0.654614043,-0.367997879,-0.516805098,-0.199533383,-0.250563139,-0.146831576,-0.256599258,-0.252861083,-0.168473847,-0.16346056,-0.245084743,-0.259992492,-0.388059911,-0.215572127,-0.359843202,-0.443658511,-0.452061848,-0.471938455,-0.463622712,-0.229365126,-0.230080528,-0.163673483,-0.081618485,-0.108032859,-0.183361271,-0.332144119,-0.54731908,-0.544779092,-0.569889075,-0.399282243,-1.049979831,-0.842516496,-0.48968429,-0.225166259,-0.382406658,-0.542663708,-0.577815049,-0.345822312,-0.312731917,-0.147114562,-0.22066713,-0.300752085,-0.084658774,-0.246512855,-0.162133744,-0.215054807,-0.1618052,-0.063829787,-0.236739393,-0.119126868,-0.074619481,-0.18218141,-0.472143139,-0.563400073,-0.542934079,-0.376810735,-0.061649942,-0.399854486,-0.231522635,-0.186316052,-0.631408785,-0.469580434,-0.506597215,-0.456355629,-0.502581431,-0.184565818,-0.194639045,-0.387262426,-0.428788645,-0.545081313,-0.557399837,-0.33066474,-0.3277929,-0.409581313,-0.962098173,-0.733259368,-0.483234123,-0.325566466,-0.49853135,-0.273107291,-0.369398108,-0.313502104,-0.193085054,-0.280991437,-0.398399688,-0.26293849,-0.367990236,-0.429495813,-0.980585348,-0.648696152],
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
  background-image: linear-gradient(to right, #cbffe6, #d6ffeb, #e1fff1, #ecfff6, #f7fffb);
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  padding: 8px;
  border-radius: 5px;
  color: #55bb8a;
  font-weight: bolder;
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
