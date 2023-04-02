<template>
  <el-row style="background: rgb(247,249,250)">
    <TheNavLogin></TheNavLogin>


    <el-col :span="2" :offset="2" class="first bread left" >
      当前位置：
    </el-col>
    <el-col :span="10" class="first">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
        <el-breadcrumb-item :to="{ path: '/square' }">视频广场</el-breadcrumb-item>
        <el-breadcrumb-item>视频分析</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
<!--    <el-col :span="10" class="first right">-->
<!--      <el-input v-model="input" placeholder="搜索视频" style="width: 40%"></el-input>-->
<!--      <el-button type="primary" icon="el-icon-search"></el-button>-->
<!--    </el-col>-->

    <el-col :span="20" :offset="2" class="main-box last">
      <el-row>
        <el-col :span="15"  style="margin-bottom: 50px" class="example-info">
          <div class="center-vertically">
            <img src="src/assets/img/square-popularity.svg" height="20" alt="优秀" style="margin-right: 8px">
            <h2>【广场往事】欲戴皇冠，必承其重！</h2>
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
                      <img src="src/assets/img/true.svg" height="20" alt="是">
                      <span style=" font-size: 18px;">是</span>
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
                      <img src="src/assets/img/true.svg" height="20" alt="是">
                      <span style=" font-size: 18px;">是</span>
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
                      <img src="src/assets/img/false.svg" height="20" alt="否">
                      <span style=" font-size: 18px;">不匹配</span>
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
                  <h3>流行度:1.13</h3>
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
                <el-col :span="4">448.8w</el-col>
                <el-col :span="7" >时长:</el-col>
                <el-col :span="3">18:49</el-col>

              </el-row>
              <el-row class="result-content">
                <el-col :span="24" class="center-vertically">
                  <img src="src/assets/img/up-form.svg" height="20" alt="up">
                  <span>UP主信息</span>
                </el-col>
                <el-col :span="9" :offset="1"  class="info">累计视频投稿量:</el-col>
                <el-col :span="3">392</el-col>
                <el-col :span="6">累计播放量:</el-col>
                <el-col :span="3">25389.2w</el-col>

                <el-col :span="8" :offset="1"  class="info">累计获赞数:</el-col>
                <el-col :span="4">2175.8w</el-col>
                <el-col :span="6">粉丝数:</el-col>
                <el-col :span="3">328.2w</el-col>

                <el-col :span="9" :offset="1"  class="info">视频更新频率:</el-col>
                <el-col :span="3">13天</el-col>
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
          <img src="src/assets/img/video/51.jpg" class="video-img hand" @click="toBilibili(url)" alt="video">

          <el-row>
            <el-col>
              <el-collapse v-model="activeNames" class="my-collapse" >
                <el-collapse-item title="弹幕列表" name="1">
                  <el-row class="left">
                    <el-scrollbar style="height: 300px" class="my-scroll">
                      <el-col v-for="item in bulletScreen">
                        {{item}}
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

export default {
  name: "details",
  data(){
    return{
      getId:this.$route.query.detailId,
      input:'',
      url:'https://www.bilibili.com/video/BV1yL4y1B7JF',
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
      activeNames: ['1'],
      bulletScreen:[
        "所以鹅姐永远不会退位了是吗？","国道","这个马小玲笑死了","鲁西南小肥羊表示不服","都是大鹏的人（）",
        "蚌埠住了","无间道2名场面","日内瓦！！！退钱！","我鹅姨，哪个叫的楂姐","这精神也出户了吧","娥姐可能要死不瞑目了",
        "甲方你广告这么做，真不怕卖不出去？","没有特写对的人物刻画不利呀","肥牛不新鲜 散架了都","岳云鹏？？？","好家伙，到这三连了",
      ],
      worddata: [
        {
          name: "泪目",
          value: 576
        },
        {
          name: "真的",
          value: 548
        },{
          name: "笑死",
          value: 488
        },
        {
          name: "喜剧之王",
          value: 333
        },
        {
          name: "好家伙",
          value: 281
        },
        {
          name: "猝不及防",
          value: 193
        },
        {
          name: "导演",
          value: 179
        },
        {
          name: "细节",
          value: 174
        },
        {
          name: "耽误",
          value: 167
        },
        {
          name: "呜呜呜",
          value: 171
        },
        {
          name: "厉害",
          value: 153
        },
        {
          name: "大爷",
          value: 120
        },
        {
          name: "不会",
          value: 111
        },
        {
          name: "好看",
          value: 111
        },
        {
          name: "女儿",
          value: 105
        },
        {
          name: "一定",
          value: 99
        },
        {
          name: "我要",
          value: 100
        },
        {
          name: "致敬",
          value: 92
        },
        {
          name: "孩子",
          value: 92
        },
        {
          name: "居然",
          value: 86
        },
        {
          name: "不行",
          value: 84
        },
        {
          name: "鹅姐",
          value: 66
        },
        {
          name: "笑不活了",
          value: 65
        },
        {
          name: "离谱",
          value: 65
        },
        {
          name: "经典",
          value:63
        },
        {
          name: "不愧是",
          value:57
        },{
          name: "爸爸",
          value:56
        },
        {
          name: "前方高能",
          value:66
        },{
          name: "红火火恍恍惚惚",
          value:56
        },
        {
          name: "私货",
          value:55
        },
        {
          name: "一场空",
          value:51
        },
      ],
      lifeData: [
        {
          name: "猝不及防",
          value: 13896
        },
        {
          name: "可爱",
          value: 10671
        },{
          name: "笑死",
          value: 10519
        },
        {
          name: "广告",
          value: 8482
        },
        {
          name: "好吃",
          value: 7410
        },
        {
          name: "喜欢",
          value: 7395
        },
        {
          name: "来了",
          value: 6999
        },
        {
          name: "好家伙",
          value: 6412
        },
        {
          name: "泪目",
          value: 5815
        },
        {
          name: "好看",
          value: 4610
        },
        {
          name: "爱",
          value: 4548
        },
        {
          name: "狂喜",
          value: 4212
        },
        {
          name: "危",
          value: 4150
        },
        {
          name: "牛",
          value: 3636
        },
        {
          name: "快跑",
          value: 3248
        },
        {
          name: "博爱",
          value: 3143
        },
        {
          name: "离谱",
          value: 2797
        },
        {
          name: "不至于",
          value: 2792
        },
        {
          name: "甲方",
          value: 2708
        },
        {
          name: "厉害",
          value: 2497
        },
        {
          name: "不对劲",
          value: 2409
        },
        {
          name: "害怕",
          value: 2386
        },
        {
          name: "老板",
          value: 2285
        },
        {
          name: "梦幻联动",
          value: 2202
        },
        {
          name: "热乎",
          value:2118
        },
        {
          name: "真实",
          value:2033
        },{
          name: "好帅",
          value:2004
        },
        {
          name: "前方高能",
          value:1808
        },{
          name: "下次一定",
          value:1761
        },
        {
          name: "硬核",
          value:1735
        },
      ],
    }
  },
  mounted(){
    this.myTime();
    this.myCloud();
    this.partCloud();
    this.myRadar();
  },
  methods:{
    toBilibili(myUrl){
      window.open(myUrl, "_blank");
    },
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
            width: "180%",
            height: "150%",
            //数据
            data: this.worddata,
          }
        ]
      };
      cloud.setOption(option);
    },
    partCloud(){
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
            width: "180%",
            height: "160%",
            //数据
            data: this.lifeData,
          }
        ]
      };
      cloud.setOption(option);
    },
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
          data: [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900,910,920,930,940,950,960,970,980,990,1000,1010,1020,1030,1040,1050,1060,1070,1080,1090,1100,1110,1120,1130]
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
            data: [276,216,211,193,254,170,151,157,185,132,229,219,124,188,281,255,138,81,114,144,63,48,179,475,457,219,190,169,117,142,146,192,129,190,126,121,315,226,117,120,106,134,187,179,209,195,233,258,169,253,204,196,136,75,235,211,234,388,165,115,236,162,178,62,101,219,165,115,197,97,73,47,151,210,314,270,142,175,120,124,138,109,130,129,93,111,103,142,93,120,108,112,163,173,86,167,130,84,120,148,214,168,163,173,209,264,229,192,192,192,156,195,132,38],
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
                value: [36.5, 35.1, 6.9, 4.7, 3.0, 0.7],
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
