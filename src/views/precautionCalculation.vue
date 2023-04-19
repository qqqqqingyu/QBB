<template>
  <el-row>
    <TheNav v-if="this.user.phone == ''"></TheNav>
    <TheNavLogin v-else></TheNavLogin>

    <el-col :span="2" :offset="2" class="first bread left" >
      当前位置：
    </el-col>
    <el-col :span="10" class="first">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
        <el-breadcrumb-item :to="{ path: '/precaution' }">预警器</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :offset="10" :span="6" class="center-vertically">
      <img src="src/assets/img/precation-title.svg" height="30" alt="预警器">
      <h2 style="margin-left: 15px">视频预警器</h2>
    </el-col>

    <el-col :span="18" :offset="2" style="margin-bottom: 15px">
      <el-input
        placeholder="复制视频链接，分析弹幕预警程度"
        prefix-icon="el-icon-search"
        v-model="input">
      </el-input>
    </el-col>
    <el-col :span="2" class="right">
      <span class="analysis-btn" @click="analysis">
        <img src="src/assets/img/analysis-icon.svg" height="20" alt="分析">
      </span>
    </el-col>

    <el-col :span="20" :offset="2" class="unSearch" v-if="isSearch === 0">
      <el-row>
        <el-col :span="8" :offset="1" class="right">
          <img src="src/assets/img/precau-analysis.svg" width="60%" alt="分析">
        </el-col>
        <el-col :span="8" style="margin-top: 60px">
          <h2>视频弹幕实时预警</h2>
          <p>输入视频链接，实时生成弹幕预警分析</p>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="20" :offset="2" class="Searching" v-if="isSearch === 1">
      <el-row>
        <el-col :span="8" :offset="2" class="right">
          <lottie :options="lottieOptions" width="80%"/>
        </el-col>
        <el-col :span="12" style="margin-top: 90px" class="left">
          <el-steps :active="stepActive">
            <el-step title="获取视频" ></el-step>
            <el-step title="分析弹幕" ></el-step>
            <el-step title="生成建议"></el-step>
            <el-step title="输出结果"></el-step>
          </el-steps>
          <h2>弹幕预警信息分析中</h2>
          <div class="timer">
            <div ref="startTimer">00:00:00</div>
          </div>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="20" :offset="2" v-if="isSearch === 2">
      <el-row class="left">
        <el-col class="result-box">
          <el-row>
            <el-col :span="18" :offset="1" style="margin-top: 20px">
              <h2>情感极端程度</h2>
            </el-col>
            <el-col :span="2" style="position: absolute;right: 20px;top: 20px">
              <div class="grade">中</div>
            </el-col>
            <el-col>
              <el-col :span="22" :offset="1" class="center-vertically video-title">
                <img src="src/assets/img/video-example.svg" height="20" class="my-icon" alt="视频">
                <span>在老妈生气的边缘疯狂试探</span></el-col>
            </el-col>
            <el-col :span="6" :offset="1" >
              视频分区：生活区
            </el-col>
            <el-col :span="6">
              视频时长：548 s
            </el-col>
            <el-col :span="6">
              弹幕数量：6789
            </el-col>
            <el-col :span="17" :offset="1" style="margin-top: 20px">
              <el-row>
                <el-col><h4>积极情感值</h4></el-col>
                <el-col :span="2" class="pos-grade right">4.83</el-col>
                <el-col :span="20" :offset="1" style="padding-top: 13px" class="pos-bar" >
                  <el-progress :percentage="33" status="success"></el-progress>
                  <el-row class="right">
                    <el-col :span="3" class="kd-grade">低</el-col>
                    <el-col :span="3" class="kd-success">4.73</el-col>
                    <el-col :span="6" class="kd-grade">中</el-col>
                    <el-col :span="6" class="kd-success">5.10</el-col>
                    <el-col :span="2" class="kd-grade">高</el-col>
                  </el-row>
                </el-col>
              </el-row>

              <el-col  style="margin-top: 10px"><h4>消极情感值</h4></el-col>
              <el-row>
                <el-col :span="2" class="neg-grade right">-4.76</el-col>
                <el-col :span="20" :offset="1" style="padding-top: 13px" class="neg-bar">
                  <el-progress :percentage="70" status="warning"></el-progress>
                  <el-row class="right">
                    <el-col :span="3" class="kd-grade">低</el-col>
                    <el-col :span="3" class="kd-warning">-5.02</el-col>
                    <el-col :span="6" class="kd-grade">中</el-col>
                    <el-col :span="6" class="kd-warning">-4.46</el-col>
                    <el-col :span="2" class="kd-grade">高</el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="5" class="explanation">
              <el-row>
                <p><b>生活区积极情感值</b></p>
                <p>低&emsp;情感值&nbsp;≤&nbsp;4.73</p>
                <p>中&emsp;4.73&nbsp;≤&nbsp;情感值&nbsp;<&nbsp;5.10</p>
                <p>高&emsp;情感值&nbsp;>&nbsp;5.10</p>
                <p style="margin-top: 8px"><b>生活区消极情感值</b></p>
                <p>低&emsp;情感值&nbsp;≤&nbsp;-5.02</p>
                <p>中&emsp;-5.02&nbsp;≤&nbsp;情感值&nbsp;<&nbsp;-4.46</p>
                <p>高&emsp;情感值&nbsp;>&nbsp;-4.46</p>
              </el-row>

            </el-col>
          </el-row>
        </el-col>

        <el-col :span="10">
          <div  id="my-word-cloud"></div>
        </el-col>
        <el-col :span="14" id="time"></el-col>


        <el-col class="left precaution-words">
          <span class="left-part-title">极端情感词</span>
          <el-row style="margin-top: 15px">
            <el-col :span="3">积极情感程度</el-col>
            <el-col :span="20" :offset="1" class="precaution-bar-pos"></el-col>
          </el-row>
          <el-row style="margin-top: 15px">
            <el-col :span="3" class="word-box">
              <div class="precaution-word-pos1 word">梅开三度</div>
            </el-col>
            <el-col :span="3" class="word-box">
              <div class="precaution-word-pos2 word">梦幻联动</div>
            </el-col>
            <el-col :span="4" class="word-box">
              <div class="precaution-word-pos3 word">已经开始笑了</div>
            </el-col>
            <el-col :span="3" class="word-box">
              <div class="precaution-word-pos4 word">双厨狂喜</div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :span="3">消极情感程度</el-col>
            <el-col :span="20" :offset="1" class="precaution-bar"></el-col>
          </el-row>
          <el-row style="margin-top: 15px">
            <el-col :span="2" class="word-box">
              <div class="precaution-word-neg1 word">丑</div>
            </el-col>
            <el-col :span="3" class="word-box">
              <div class="precaution-word-neg2 word">真狠</div>
            </el-col>
            <el-col :span="3" class="word-box">
              <div class="precaution-word-neg2 word">玛德</div>
            </el-col>
            <el-col :span="3" class="word-box">
              <div class="precaution-word-neg3 word">看不下去</div>
            </el-col>
          </el-row>
        </el-col>

        <el-col style="margin-top: 30px">
        </el-col>

        <el-col class="center-vertically">
          <img src="src/assets/img/better.svg" height="20" alt="改进" class="my-icon">
          <span class="left-part-title">您可以尝试使用以下方法降低负面反馈</span>
        </el-col>

        <el-col style="margin-top: 5px">
          <h4 style="color: #606266;">建议</h4>
          <span class="subtitle">我们使用chatGPT生成建议</span>
          <ol class="our-ol">
            <li>作为一位视频创作者，您可以通过调整视频内容的方式来降低观众对您视频的负面反馈,包括避免使用敏感或带有贬义的词语、强调产品或广告的过度推销、注重产品实际使用情况和优点等方面的调整。</li>
            <li>当涉及到广告时，尤其要注意观众对于“显眼”广告的反感。在视频中不要过度强调产品或者广告，也不要过分渲染产品的好处，而是要更多地关注产品的实际使用情况和优点。</li>
            <li>尽量避免使用一些敏感或者带有贬义的词语，选择更中性和客观的词汇，可以更好地引导观众的情绪和认知。</li>
            <li>为了让观众有更好的用户体验，您可以在视频中标注广告的存在</li>
          </ol>
        </el-col>

        <el-col style="text-align: center;margin-top: 10px" class="last">
          <el-button type="primary" round plain>重新生成建议</el-button>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<script>
import lottie from 'vue-lottie'
import * as echarts from "_echarts@5.4.1@echarts";

export default {
  name: "precautionCalculation",
  components:{
    lottie
  },
  data(){
    return{
      input:'',
      video:[
        {
          imgUrl:'src/assets/img/video/42.jpg',
          title:'【广场往事】凤凰涅槃吧！',
          url:'https://www.bilibili.com/video/BV1cL411V7Zr'
        },
        {
          imgUrl:'src/assets/img/video/129.jpg',
          title:'当你看到它，恭喜你的经济实力被大数据认可了',
          url:'https://www.bilibili.com/video/BV1n3411j7TY'
        },
        {
          imgUrl:'src/assets/img/video/8.jpg',
          title:'2021“画饼”挑战',
          url:'https://www.bilibili.com/video/BV1JT4y1P77e'
        },
        {
          imgUrl:'src/assets/img/video/101.jpg',
          title:'当代达芬奇！',
          url:'https://www.bilibili.com/video/BV1fV411k7T2'
        },
        {
          imgUrl:'src/assets/img/video/14.jpg',
          title:'自制宅男快乐器，吃喝玩乐游戏机',
          url:'https://www.bilibili.com/video/BV1uz4y1C7YP'
        },
      ],
      isSearch:2,
      lottieOptions: {
        animationData: require("../assets/img/loading.json"), // 引入JSON格式的动态图文件
        loop: true, // 是否循环播放
        autoplay: true // 是否自动播放
      },
      // 计时器
      timer: "",
      hour: 0,
      minutes: 0,
      seconds: 0,
      cr: '',
      // 状态
      stepActive:1,
      worddata: [
        {
          name: "笑死",
          value: 179
        },
        {
          name: "爸爸",
          value: 96
        },{
          name: "可爱",
          value: 66
        },
        {
          name: "平板",
          value: 56
        },
        {
          name: "不至于",
          value: 37
        },
        {
          name: "小弟",
          value: 30
        },
        {
          name: "救命",
          value: 25
        },
        {
          name: "甲方",
          value: 23
        },
        {
          name: "眼睛瞪得像铜铃",
          value: 23
        },
        {
          name: "广告",
          value: 20
        },
        {
          name: "笑不活了",
          value: 17
        },
        {
          name: "猝不及防",
          value: 15
        },
        {
          name: "羡慕",
          value: 23
        },
        {
          name: "沉沦",
          value: 63
        },
        {
          name: "前方高能",
          value: 123
        },
        {
          name: "已经开始笑了",
          value: 12
        },
        {
          name: "没想到",
          value: 6
        },
        {
          name: "一模一样",
          value: 32
        },
        {
          name: "啊哈",
          value: 14
        },
        {
          name: "搞笑",
          value: 26
        },
        {
          name: "卧槽",
          value: 52
        },
        {
          name: "红火火恍恍惚惚",
          value: 43
        },
        {
          name: "快跑",
          value: 19
        },
        {
          name: "玛德",
          value: 23
        },
        {
          name: "看不下去",
          value:12
        },
        {
          name: "不愧是",
          value:57
        },
        {
          name: "无语",
          value:12
        },{
          name: "红火火恍恍惚惚",
          value:56
        },
        {
          name: "清奇",
          value:31
        },
        {
          name: "失望",
          value:39
        },
      ],
    }
  },
  methods:{
    // 页面显示内容切换
    analysis(){
      this.isSearch = 1
      this.timer = setInterval(this.startTimer, 1000);
      // 步骤条效果
      setTimeout(() => (this.stepActive = 2), 10000)
      setTimeout(() => (this.stepActive = 3), 15000)
      // 切换分析结果
      setTimeout(() => (this.isSearch = 2), 20000)

      setTimeout(() => (this.myTime()), 20000)
      setTimeout(() => (this.myCloud()), 20000)
    },
    startTimer() {
      this.seconds += 1;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
      }

      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hour = this.hour + 1;
      }
      this.$refs.startTimer.innerHTML = (this.hour < 10 ? '0' + this.hour: this.hour) + ':' + (this.minutes < 10 ? '0' + this.minutes: this.minutes) + ':' + (this.seconds < 10 ? '0' + this.seconds: this.seconds);
      this.cr =  this.seconds
    },
    stop () {
      clearInterval(this.timer)
      clearInterval(this.stepActive)
    },
    start () {
      this.timer = setInterval(this.startTimer, 1000)
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
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          data: [
            { name:'积极情感值',itemStyle: {color: '#77d07a'},lineStyle:{color: '#77d07a'} },
            { name:'消极情感值',itemStyle: {color: '#0088C6'},lineStyle:{color: '#0088C6'} }
          ],
          left:10
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // prettier-ignore
            data: [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,548]
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
        grid: [
          {
            // top: '60%',
            bottom: '13%',
            // right:'5%'
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
            type: 'line',
            name:'积极情感值',
            smooth: true,
            // prettier-ignore
            data: [0.795703857,0.740402144,0.851435694,0.920757298,0.907693646,0.678191602,0.341403615,0.51127703,1.861585176,1.040386188,0.677645665,0.555739464,0.839912088,0.857330578,0.85880126,1.14582598,1.723779556,1.305112913,0.594021182,0.853962398,0.975733106,0.883419314,1.020126023,0.575335262,0.4150162,0.751246669,0.698662796,0.528448069,1.982311759,1.148684687,0.796682225,0.635770862,0.952098293,1.192407142,2.360972342,1.538484959,0.742786157,0.884614985,1.555565027,0.582086,0.75177126,0.894678973,1.289394152,1.964950712,1.141477984,1.112645036,1.112158381,0.74725125,1.55066833,0.207236554,0.453158421,0.406603919,0.487422034,0.719313164,1.261538488,0.820170443,1.42076484,1.746275313],
            markArea: {
              itemStyle: {
                color: 'rgba(192,255,249, 0.4)'
              },
              // 标记区间
              data: [
                [
                  {
                    name: '广告区间',
                    xAxis: '0'
                  },
                  {
                    xAxis: '548'
                  }
                ]
              ]
            },
          },
          {
            type: 'line',
            name:'消极情感值',
            smooth: true,
            // prettier-ignore
            data: [-0.201626403,-0.197574282,-0.227854655,-0.218118281,-0.423554466,-0.475342512,-0.19822346,-0.088757184,-0.109644521,-0.318518567,-0.278593382,-0.233076557,-0.27284563,-0.281210397,-0.205788929,-0.160537821,-0.193999969,-0.255167222,-0.225993849,-0.307396603,-0.40476088,-0.545666162,-0.443602795,-0.227092818,-0.212202998,-0.733421348,-1.242768333,-1.424654682,-0.244472351,-0.039986012,-0.080505976,-0.124304516,-0.401920431,-0.301960226,-0.309557643,-0.424445408,-0.262346302,-0.380317057,-0.469976938,-0.376470933,-0.442301358,-1.734329729,-1.004268205,-0.438024913,-0.043237632,-0.357567089,-0.583265645,-0.432581546,-0.281974941,-0.081518708,-0.136014669,-0.066742978,-0.097752818,-0.197970084,-0.154602843,-0.198336941,-0.346989134,-0.149206349],
          }
        ]
      };
      line.setOption(option1);
    },

    myCloud() {
      let cloud =  echarts.init(document.getElementById("my-word-cloud"));
      const color1 = ["#0091B5","#00B685","#61C365","#77d07a","#8cdd8e", "#a0e9a3", "#b5f6b8"]
      let option = {
        title: {
          text: "视频弹幕情感词词云图",
          x: "center",
          textStyle:{
            fontSize:15
          }
        },
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [13, 26],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              fontFamily: '微软雅黑',
              color: v => (
                `${color1[v.dataIndex%7]}`
              )
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "170%",
            height: "160%",
            //数据
            data: this.worddata,
          }
        ]
      };
      cloud.setOption(option);
    },
  },
  beforeDestroy() {
    this.stop()
  }
}
</script>

<style scoped>


.example{
  padding: 15px 7px;
  background: rgba(202,202,202,0.1);
  border-radius: 5px;
  text-align: left;
  margin-bottom: 10px;
}

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

.left-part-title{
  font-size: 18px;
  font-weight: bolder;
  color: #606266;
}

.precaution-bar-pos{
  height: 6px;
  margin-top: 9px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #b4ffdf, #8ee6be, #69cd9c, #41b47b, #019b5a);
}

.precaution-bar{
  height: 6px;
  margin-top: 9px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #a2e8ff, #86d6f3, #69c5e7, #47b3dc, #11a2d1);
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

.unSearch{
  margin-top: 20px;
  padding-top: 50px;
  background-image: linear-gradient(to right bottom, #8ce3ff, #a4e8ff, #baeeff, #cef3ff, #e2f8ff);
  padding-bottom: 50px;
  border-radius: 10px;
}

.unSearch p{
  color: #7F7F7F;
}

.Searching{
  margin-top: 20px;
  background-image: linear-gradient(to right bottom, #8ce3ff, #a4e8ff, #baeeff, #cef3ff, #e2f8ff);
  border-radius: 10px;
}

.Searching >>> .el-step__icon.is-text{
  border: 1px solid;
  font-weight: 300;
}

.result-box{
  border-radius: 5px;
  border: 1px solid #EBEEF5;
  padding-top: 10px;
  padding-bottom: 15px;
}

.result-box h2{
  margin-top: 0;
  margin-bottom: 15px;
  color: #606266;
}

.video-title{
  color: #333333;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 5px;
  margin-bottom: 15px;
}

.result-box h4{
  margin-top: 2px;
  margin-bottom: 2px;
  color: #606266;
  font-size: 14px;
}

.pos-grade{
  font-size: 30px;
  font-weight: bolder;
  color: #02BD6E;
  padding-top: 5px;
}

.neg-grade{
  font-size: 30px;
  font-weight: bolder;
  color: #FFB346;
  padding-top: 5px;
}

.grade{
  border-radius: 50px;
  font-size: 30px;
  font-weight: bolder;
  color: #FFB346;
  border: 1px solid #EBEEF5;
  padding: 15px;
  height: 40px;
  width: 40px;
  text-align: center;
}

#time{
  height: 250px;
  margin-top: 10px;
  border: 1px solid #EBEEF5;
  padding-top: 30px;
}

#my-word-cloud{
  padding-top: 20px;
  height: 230px;
  margin-top: 10px;
  border: 1px solid #EBEEF5;
  width: 98%;
  margin-right: 2%;
}

.explanation{
  margin-top: 20px;
  border: 1px solid #EBEEF5;
  border-radius: 10px;
  padding:5px 15px;
  font-size: 11px;
  color: #7F7F7F;
}

.explanation p{
  margin-top: 1px;
  margin-bottom: 1px;
}

.pos-bar >>> .el-progress-bar__inner{
  background-color: #3ac388;
}

.neg-bar >>> .el-progress-bar__inner{
  background-color: #FFB346;
}

.kd-warning{
  border-right: #FF9700 solid 1px;
  padding-right: 5px;
  font-size: 13px;
  font-weight: 300;
  color: #FF9700;
  padding-top: 9px;
  transform: translateY(-10px);
}

.kd-success{
  border-right: #0E995D solid 1px;
  padding-right: 5px;
  font-size: 13px;
  font-weight: 300;
  color: #0E995D;
  padding-top: 9px;
  transform: translateY(-10px);
}

.kd-grade{
  font-size: 13px;
}
</style>
