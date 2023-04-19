<template>
  <el-row style="background: rgb(247,249,250)">
    <TheNav v-if="this.user.phone == ''"></TheNav>
    <TheNavLogin v-else></TheNavLogin>

    <el-col :span="2" :offset="2" class="first bread left" >
      当前位置：
    </el-col>
    <el-col :span="10" class="first">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
        <el-breadcrumb-item :to="{ path: '/square' }">视频广场</el-breadcrumb-item>
        <el-breadcrumb-item>视频分析</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="20" :offset="2" class="main-box last">
      <el-row>
        <el-col :span="15"  style="margin-bottom: 50px" class="example-info">
          <div class="center-vertically">
            <img src="src/assets/img/square-popularity.svg" height="20" alt="优秀" style="margin-right: 8px">
            <h2>{{ videoTitle }}</h2>
          </div>
          <el-divider></el-divider>
          <el-row :gutter="20">
            <el-col :span="6">
              <div>
                <el-statistic group-separator="," :precision="2"></el-statistic>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-statistic title="类型">
                  <template slot="formatter"><span class="my-tag">{{ adType }}</span></template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="4">
              <el-statistic title="分区">
                <template slot="formatter"><span class="my-tag">{{ getArea }}</span></template>
              </el-statistic>
            </el-col>
            <el-col :span="4">
              <div>
                <el-statistic title="广告链接">
                  <template slot="formatter">
                    <div v-if="haveLink==1" class="center-vertically my-statistic">
                      <img src="src/assets/img/true.svg" height="20" alt="是">
                      <span style=" font-size: 18px;">是</span>
                    </div>
                    <div v-else class="center-vertically my-statistic">
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
                    <div v-if="isCooperation==1" class="center-vertically my-statistic">
                      <img src="src/assets/img/true.svg" height="20" alt="是">
                      <span style=" font-size: 18px;">是</span>
                    </div>
                    <div v-else class="center-vertically my-statistic">
                      <img src="src/assets/img/false.svg" height="20" alt="否">
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
                    <div v-if="matching==1" class="center-vertically my-statistic">
                      <img src="src/assets/img/true.svg" height="20" alt="是">
                      <span style=" font-size: 18px;">匹配</span>
                    </div>
                    <div v-else class="center-vertically my-statistic">
                      <img src="src/assets/img/false.svg" height="20" alt="否">
                      <span style=" font-size: 18px;">否</span>
                    </div>
                  </template>
                </el-statistic>
              </div>
            </el-col>
          </el-row>

          <el-row style="margin-top: 30px">

            <el-col :span="10">
              <div id="my-radar"></div>
<!--              <el-row>-->
<!--                <el-col :span="8">-->
<!--                  -->
<!--                </el-col>-->
<!--                <el-col :span="8">-->
<!--                  -->
<!--                </el-col>-->
<!--                <el-col :span="8">-->
<!--                  <img src="src/assets/img/dm.svg" width="20" alt="播放">-->
<!--                </el-col>-->
<!--              </el-row>-->
            </el-col>

            <el-col :span="13" :offset="1">
              <el-row class="popularity-box">
                <el-col>
                  <h3>流行度:{{ popularity }}</h3>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="13" :offset="1" class="result-box left">
              <el-row class="video-info">
                <el-col :span="24" class="center-vertically">
                  <img src="src/assets/img/video-info.svg" height="15" alt="up">
                  <span>视频信息</span>
                </el-col>

                <el-col :span="8" :offset="1"  class="info">播放量:</el-col>
                <el-col :span="4">{{ airplay }}w</el-col>
                <el-col :span="7" >时长:</el-col>
                <el-col :span="3">{{ videoLength }}s</el-col>

              </el-row>
              <el-row class="result-content">
                <el-col :span="24" class="center-vertically">
                  <img src="src/assets/img/up-form.svg" height="20" alt="up">
                  <span>UP主信息</span>
                </el-col>
                <el-col :span="9" :offset="1"  class="info">累计视频投稿量:</el-col>
                <el-col :span="3">{{ cumulativeSubmissions }}</el-col>
                <el-col :span="6">累计播放量:</el-col>
                <el-col :span="3">{{ cumulativeAirplay }}w</el-col>

                <el-col :span="8" :offset="1"  class="info">累计获赞数:</el-col>
                <el-col :span="4">{{ cumulativeLike }}w</el-col>
                <el-col :span="6">粉丝数:</el-col>
                <el-col :span="3">{{ fans }}w</el-col>

                <el-col :span="9" :offset="1"  class="info">视频更新频率:</el-col>
                <el-col :span="3">{{ updateFrequency }}天</el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24"  id="time"></el-col>
            <el-col :span="12">
              <div  id="my-word-cloud"></div>
            </el-col>
            <el-col :span="12">
              <div id="part-word-cloud"></div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="8" :offset="1">
          <img :src="'src/assets/img/video/'+getId+'.jpg'" class="video-img hand" @click="toBilibili(this.videoLink)" alt="video">

          <el-row>
            <el-col>
              <el-collapse v-model="activeNames" class="my-collapse" >
                <el-collapse-item title="弹幕列表" name="1">
                  <el-row class="left">
                    <el-scrollbar style="height: 300px" class="my-scroll">
                      <el-col v-for="item in bulletScreens">
                        {{item.danmu}}
                      </el-col>
                    </el-scrollbar>
                  </el-row>
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </el-row>

          <!--      <el-col class="tip-box" style="margin-top: 30px">-->
          <!--        <h3 class="tip-title">同类视频</h3>-->
          <!--        <el-scrollbar style="height: 410px" class="my-scroll">-->
          <!--          <el-row v-for="item in video">-->
          <!--            <el-col :span="23" class="example">-->
          <!--              <el-row>-->
          <!--                <el-col :span="18">{{ item.title }}</el-col>-->
          <!--                <el-col :span="5" :offset="1">-->
          <!--                  <img :src=item.imgUrl alt="视频图片" width="100%">-->
          <!--                </el-col>-->
          <!--                <el-col :span="12">流行度：5.4</el-col>-->
          <!--                <el-col :span="12" style="text-align: right">-->
          <!--                  <a class="hand">立即查看</a>-->
          <!--                </el-col>-->
          <!--              </el-row>-->
          <!--            </el-col>-->
          <!--          </el-row>-->
          <!--        </el-scrollbar>-->
          <!--      </el-col>-->
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts';
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import {
  cloudSH,
  cloudSS,
  detailsListSH,
  detailsListSS,
  detailsSH,
  detailsSS,
  frequencySH,
  frequencySS, popularitySH, popularitySS
} from "../api/video";

export default {
  name: "details",
  data(){
    return{
      getId:this.$route.query.detailId,
      getArea:this.$route.query.area,
      myData:{
        phone:this.user.phone,
        videoId:this.$route.query.detailId
      },
      popularity:'', // 流行度
      videoTitle:'', // 视频标题
      airplay:'', // 播放量
      like:'', // 点赞
      collection:'', // 收藏
      forwarding:'', // 转发
      comments:'', // 评论
      coin:'', // 投币
      adType:'', // 广告类型
      haveLink:'', // 是否有广告链接
      isCooperation:'', // 是否合作视频
      matching:'', // 商品性质和视频分区是否匹配
      cumulativeSubmissions:'', // 累计视频投稿量
      cumulativeAirplay:'', // 累计播放量
      cumulativeLike:'', // 累计获赞数
      fans:'', // 粉丝数
      updateFrequency:'', // 视频更新频率
      videoLength:'', // 视频时长
      bulletScreen:'', // 弹幕数量
      videoLink:'', // 视频链接
      video:[
        {
          imgUrl:'src/assets/img/video/42.jpg',
          title:'【广场往事】凤凰涅槃吧！',
          url:'https://www.bilibili.com/video/BV1cL411V7Zr'
        }
      ],
      activeNames: ['1'],
      bulletScreens:[],
      wordData: [],
      areaData: [],
      location: [],
      count: [],
      adStart: '',
      adEnd: '',
    }
  },
  mounted(){
    // 获取数据
    this.detailData();
    this.detailsList();
    this.frequencyData();
    this.popularityData();
  },
  methods:{
    toBilibili(myUrl){
      window.open(myUrl, "_blank");
    },
    // 视频详情获取
    detailData(){
      if(this.getArea === '生活'){
        detailsSH(this.myData).then(res =>{
          this.videoTitle = res.data.videoTitle
          this.airplay = res.data.airplay
          this.like = res.data.like
          this.collection = res.data.collection
          this.forwarding = res.data.forwarding
          this.comments = res.data.comments
          this.coin = res.data.coin
          this.adType = res.data.adType
          this.haveLink = res.data.haveLink
          this.isCooperation = res.data.isCooperation
          this.matching = res.data.matching
          this.cumulativeSubmissions = res.data.cumulativeSubmissions
          this.cumulativeAirplay = res.data.cumulativeAirplay
          this.cumulativeLike = res.data.cumulativeLike
          this.fans = res.data.fans
          this.updateFrequency = res.data.updateFrequency
          this.videoLength = res.data.videoLength
          this.bulletScreen = res.data.bulletScreen
          this.videoLink = res.data.videoLink
          this.popularity = res.data.popularity
          // 雷达图
          this.myRadar();
        })
          .catch((res) => {
            console.log('生活区视频详情接口调用失败：' + res);
          });
      }else{
        detailsSS(this.myData).then(res =>{
          this.videoTitle = res.data.videoTitle
          this.airplay = res.data.airplay
          this.like = res.data.like
          this.collection = res.data.collection
          this.forwarding = res.data.forwarding
          this.comments = res.data.comments
          this.coin = res.data.coin
          this.adType = res.data.adType
          this.haveLink = res.data.haveLink
          this.isCooperation = res.data.isCooperation
          this.matching = res.data.matching
          this.cumulativeSubmissions = res.data.cumulativeSubmissions
          this.cumulativeAirplay = res.data.cumulativeAirplay
          this.cumulativeLike = res.data.cumulativeLike
          this.fans = res.data.fans
          this.updateFrequency = res.data.updateFrequency
          this.videoLength = res.data.videoLength
          this.bulletScreen = res.data.bulletScreen
          this.videoLink = res.data.videoLink
          this.popularity = res.data.popularity
          // 雷达图
          this.myRadar();
        })
          .catch((res) => {
            console.log('时尚区视频详情接口调用失败：' + res);
          });
      }
    },
    // 弹幕列表获取
    detailsList(){
      if(this.getArea === '生活'){
        detailsListSH(this.myData).then(res =>{
          this.bulletScreens = res.data
        })
          .catch((res) => {
            console.log('生活区弹幕列表接口调用失败：' + res);
          });
      }else{
        detailsListSS(this.myData).then(res =>{
          this.bulletScreens = res.data
        })
          .catch((res) => {
            console.log('时尚区弹幕列表接口调用失败：' + res);
          });
      }
    },
    // 词云图数据获取
    frequencyData(){
      let phoneData = {
        phone:this.user.phone
      }

      if(this.getArea === '生活'){
        // 生活区全区词云图
        cloudSH(phoneData).then(res =>{
          for(let i = 0;i <= res.data.danmu.length;i++){
            // y轴数据的转化
            this.areaData.push({
              name: res.data.danmu[i],
              value: res.data.count[i],
            })
          }
          this.areaCloud();
        })
          .catch((res) => {
            console.log('生活区视频词云图接口调用失败：' + res);
          });

        // 视频词云图
        frequencySH(this.myData).then(res =>{
          this.wordData = res.data
          // for(let i = 0;i < res.data.length;i++){
          //   // y轴数据的转化
          //   this.wordData.push({
          //     name: res.data[i].name,
          //     value: res.data[i].value,
          //   })
          // }
          // console.log('wordData'+JSON.stringify(this.wordData))

          console.log('获取数据完成')
          this.myCloud();
        })
          .catch((res) => {
            console.log('生活区词云图接口调用失败：' + res);
          });
      }else{
        // 时尚区全区词云图
        cloudSS(phoneData).then(res =>{
          for(let i = 0;i <= res.data.danmu.length;i++){
            // y轴数据的转化
            this.areaData.push({
              name: res.data.danmu[i],
              value: res.data.count[i],
            })
          }
          this.areaCloud()
        })
          .catch((res) => {
            console.log('时尚区全区词云图接口调用失败：' + res);
          });

        // 视频词云图
        frequencySS(this.myData).then(res =>{
          this.wordData = res.data
          this.myCloud()
        })
          .catch((res) => {
            console.log('时尚区全区接口调用失败：' + res);
          });
      }
    },
    popularityData(){
      if(this.getArea === '生活'){
        popularitySH(this.myData).then(res =>{
          this.location = res.data.location
          this.count = res.data.count
          this.adStart = res.data.adStart
          this.adEnd = res.data.adEnd
          this.myTime();
        })
          .catch((res) => {
            console.log('生活区折线图接口调用失败：' + res);
          });
      }else{
        popularitySS(this.myData).then(res =>{
          this.location = res.data.location
          this.count = res.data.count
          this.adStart = res.data.adStart
          this.adEnd = res.data.adEnd
          this.myTime();
        })
          .catch((res) => {
            console.log('时尚区折线图接口调用失败：' + res);
          });
      }
    },
    // 词频词云图
    myCloud() {
      let cloud =  echarts.init(document.getElementById("my-word-cloud"));
      const color1 = ["#0091B5","#00B685","#61C365","#77d07a","#8cdd8e", "#a0e9a3", "#b5f6b8"]
      let option = {
        title: {
          text: "视频弹幕情感词词云图",
          x: "center",
        },
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 9,
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
            width: "180%",
            height: "150%",
            //数据
            data: this.wordData.slice(0,50),
          }
        ]
      };
      cloud.setOption(option);
    },
    // 分区词云图
    areaCloud(){
      let cloud =  echarts.init(document.getElementById("part-word-cloud"));
      const color = [
        '#48A5F3', '#00C1F9', '#00D9E4', '#6690E8', '#00CAB9', '#00D2D0', '#0092F4',
      ];
      let option = {
        title: {
          text: "生活区弹幕情感词词云图",
          x: "center",
        },
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 9,
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
                `${color[v.dataIndex%7]}`
              )
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: '2%',
            width: "170%",
            height: "140%",
            //数据
            data: this.areaData.slice(0,45),
          }
        ]
      };
      cloud.setOption(option);
    },
    // 折线图
    myTime(){
      let line =  echarts.init(document.getElementById("time"));
      let option1 = {
        title: [{
          text: '弹幕数量-时间趋势图',
          left: 'center',
          textStyle:{
            fontSize:15
          }
        },
          // {
          //   top: '50%',
          //   left: 'center',
          //   text: '弹幕情感-时间趋势图',
          //   textStyle:{
          //     fontSize:15
          //   }
          // }
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
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          // prettier-ignore
          data: this.location
        },
          // {
          //   type: 'category',
          //   boundaryGap: false,
          //   // prettier-ignore
          //   data: [0,10,20,30,40,50,60,70,80,90,100],
          //   gridIndex: 1
          // }
        ],
        yAxis: [{
          type: 'value',
          // y轴标签
          axisLabel: {
            formatter: '{value}'
          },
          axisPointer: {
            snap: true
          }
        },
          // {
          //   gridIndex: 1
          // }
        ],
        // 分成两个图
        // grid: [
        //   {
        //     top: '10%',
        //     bottom: '60%',
        //     right:'5%'
        //   },
        //   {
        //     top: '60%',
        //     bottom: '10%',
        //     right:'5%'
        //   }
        // ],
        visualMap: [{
          show: false,
          dimension: 0,
          // 线段颜色设置
          pieces: [
            {
              lte: 23,
              color: '#2bae85'
            },
            {
              gt: 23,
              lte: 113,
              color: '#2b73af'
            }
          ]
        },
          // {
          //   show: false,
          //   type: 'continuous',
          //   seriesIndex: 1,
          //   min: 0,
          //   max: 5,
          //   inRange: {
          //     color: ["#61C365","#77d07a","#8cdd8e", "#a0e9a3", "#b5f6b8", "#00D9D4","#86DEFF"]
          //   }
          // },
          // {
          //   show: false,
          //   type: 'continuous',
          //   seriesIndex: 2,
          //   min: -6,
          //   max: 0,
          //   inRange: {
          //     color: ["#0067A2","#0088C6","#4596E6", "#00ABEB", "#00C4EA"]
          //   }
          // }
        ],
        series: [
          {
            name: 'Electricity',
            type: 'line',
            smooth: true,
            data: this.count,
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
            }
          },
          // {
          //   name: 'Electricity',
          //   type: 'line',
          //   smooth: true,
          //   // prettier-ignore
          //   data: [1.52002839820652, 1.23333333339999, 1.90857970352987, 1.64303433485965, 0.714285714285714, 0.906470805542725, 0.719664165600538, 1.44315513841654, 1.35714285714285, 2.01240165483127, 0.717370670337784],
          //   markArea: {
          //     itemStyle: {
          //       color: 'rgba(192,255,249, 0.4)'
          //     },
          //     // 标记区间
          //     data: [
          //       [
          //         {
          //           name: '广告区间',
          //           xAxis: '60'
          //         },
          //         {
          //           xAxis: '80'
          //         }
          //       ]
          //     ]
          //   },
          //   xAxisIndex: 1,
          //   yAxisIndex: 1
          // },
          // {
          //   name: 'Electricity',
          //   type: 'line',
          //   smooth: true,
          //   // prettier-ignore
          //   data: [0,-0.636467707567238, -0.288019967797892, 0, -2.12633425913709, -0.357741268843177, -0.653227954917049,-1.12007765254735, -1.06006758013245, -0.555555555555555,-0.201613977458524],
          //   xAxisIndex: 1,
          //   yAxisIndex: 1
          // }
        ]
      };
      line.setOption(option1);
    },
    // 雷达图
    myRadar(){
      let radar =  echarts.init(document.getElementById("my-radar"));
      let option = {
        color: ['#FFC354', '#FFE434', '#56A3F1', '#FF917C'],
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
            radius: 70, //半径
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            axisName: {
              formatter: '{value}',
              color: '#428BD4',
              fontSize:'15px'
            },
            splitArea: {
              areaStyle: {
                color: ['#b8dfff', '#9dcbf1', '#82b6e3', '#81BDEE'],
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
              }
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
                value: [this.like, this.coin, this.collection, this.forwarding, this.bulletScreen, this.comments],
                areaStyle: {
                  color: 'rgba(697.7, 228, 52, 0.6)'
                },
                label: {
                  show: true,
                  position: 'top',
                  formatter: function (params) {
                    // 标签加上"W"
                    return params.value+'w';
                  }
                }
              }
            ]
          }
        ]
      };
      radar.setOption(option);
    }
  },
}
</script>

<style scoped>
.my-form{
  color: #606266;
  line-height: 30px;
}

.video-img{
  border-radius: 10px;
  width: 100%;
  margin-top: 100px;
}

#my-radar{
  height: 230px;
  margin-top: 20px;
  width: 100%;
}

#time{
  height: 350px;
  margin-top: 20px;
  border: 1px solid #EBEEF5;
  padding-top: 30px;
}

#my-word-cloud{
  padding-top: 20px;
  height: 250px;
  margin-top: 20px;
  border: 1px solid #EBEEF5;
  width: 98%;
  margin-right: 2%;
}

#part-word-cloud{
  border: 1px solid #EBEEF5;
  padding-top: 20px;
  height: 250px;
  margin-top: 20px;
  width: 98%;
  margin-left: 2%;
}



.example-info >>> .el-divider--horizontal{
  margin-top: 0;
}

.result-content {
  font-size: 14px;
  /*overflow: hidden;*/
  -webkit-transition: .3s;
  transition: .3s;
  /*box-shadow: 0 2px 2px 2px rgb(0 0 0 / 10%);*/
}

.result-content img{
  margin-right: 5px;
}

.result-box{
  line-height: 30px;
  margin-top: 3px;
  color: #606266;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #EBEEF5;
}

/* element滚动条组件 隐藏水平滚动条 */
.my-scroll >>> .el-scrollbar__wrap {
  overflow-x: hidden;
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

.example{
  padding: 15px 7px;
  background: rgba(202,202,202,0.1);
  border-radius: 5px;
  text-align: left;
  margin-bottom: 10px;
}

.my-collapse{
  margin-top: 30px;
}

.my-collapse .el-col{
  line-height: 30px;
}

.my-collapse >>> .el-collapse-item__header{
  font-size: 19px;
  color: #00A5E6;
}

.main-box{
  border-radius: 10px;
  background: #FFFFFF;
  padding-right: 2%;
  padding-left: 2%;
}

.popularity-box{
  margin-top: 10px;
  border-radius: 10px;
}

.popularity-box h3{
  margin-bottom: 5px;
  margin-top: 8px;background-image: linear-gradient(to right, #a3d6ff, #b6deff, #c8e5ff, #d9edff, #eaf5ff);
  padding: 5px;
  border-radius: 5px;
  color: #498FC8;
}

.video-info {
  /*margin: 5px 0 10px;*/
  font-size: 14px;
  /*color: #606266;*/
}

.video-info img{
  margin-right: 5px;
}

.info{
  padding-left: 3%;
}


</style>
