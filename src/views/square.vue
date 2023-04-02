<template>
  <el-row style="background: rgb(247,249,250)">
    <TheNavLogin></TheNavLogin>

    <el-col :span="20" :offset="2" style="margin-top: 80px">
      <el-row class="left">
        <el-col>
          <img src="src/assets/img/poster.png" id="poster" alt="banner">
        </el-col>

        <el-col :span="4" style="margin-top: 10px;margin-bottom: 10px">
          <el-radio-group v-model="area" class="radio-bg">
            <el-radio-button class="industry-radio" label="生活"></el-radio-button>
            <el-radio-button class="industry-radio" label="时尚"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6" class="video" v-for="item in video">

            <el-row class="round">
              <el-col>
                <img :src="item.imgUrl" class="video-img" alt="视频封面">
              </el-col>
              <el-col style="height: 55px;font-size: 13px">
                <span class="video-tap">生活</span>
                <span class="title">{{ item.title }}</span>
              </el-col>
              <el-col class="video-info">
                <el-row>
                  <el-col :span="13" class="left center-vertically">
                    <img src="src/assets/img/square-popularity.svg" height="18" alt="流行度">
                    <span>流行度：{{item.a}}</span>
                  </el-col>
                  <el-col :span="11" class="right">
                    <router-link :to="{path:'/details',query:{detailId:item.videoId}}" class="hand">查看分析</router-link>
                  </el-col>

                  <el-col :span="13" class="left center-vertically">
                    <img src="src/assets/img/dm.svg" height="18" alt="弹幕">
                    <span>预警程度：{{item.precaution}}</span>
                  </el-col>
                  <el-col :span="11" class="right">
                    <router-link :to="{path:'/precaution',query:{detailId:item.videoId}}" class="hand">查看预警</router-link>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
        </el-col>
      </el-row>

      <el-row class="last" style="margin-top: 15px">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "square",
  data(){
    return{
      area:'生活',
      video:[
        {
          a:1.13,
          imgUrl:'src/assets/img/video/51.jpg',
          title:'【广场往事】欲戴皇冠，必承其重！',
          url:'https://www.bilibili.com/video/BV1yL4y1B7JF/',
          videoId:'51',
          precaution:'低'
        },
        // {
        //   a:3.14,
        //   imgUrl:'src/assets/img/video/42.jpg',
        //   title:'【广场往事】凤凰涅槃吧！',
        //   url:'https://www.bilibili.com/video/BV1cL411V7Zr',
        //   videoId:'42',
        //   precaution:'低'
        // },
        {
          a:2.98,
          imgUrl:'src/assets/img/video/129.jpg',
          title:'当你看到它，恭喜你的经济实力被大数据认可了',
          url:'https://www.bilibili.com/video/BV1n3411j7TY',
          videoId:'129',
          precaution:'中'
        },
        {
          a:6.21,
          imgUrl:'src/assets/img/video/8.jpg',
          title:'2021“画饼”挑战',
          url:'https://www.bilibili.com/video/BV1JT4y1P77e',
          videoId:'8',
          precaution:'中'
        },
        {
          a:3.68,
          imgUrl:'src/assets/img/video/101.jpg',
          title:'当代达芬奇！',
          url:'https://www.bilibili.com/video/BV1fV411k7T2',
          videoId:'8',
          precaution:'低'
        },
        {

          a:1.52,
          imgUrl:'src/assets/img/video/14.jpg',
          title:'自制宅男快乐器，吃喝玩乐游戏机',
          url:'https://www.bilibili.com/video/BV1uz4y1C7YP',
          videoId:'8',
          precaution:'中'
        },
        {

          a:1.87,
          imgUrl: 'src/assets/img/video/18.jpg',
          title: '完全一样~毫无违和感',
          url:'https://www.bilibili.com/video/BV1Gq4y157Lb',
          videoId:'8',
          precaution:'高'
        },
        {

          a:1.18,
          imgUrl: 'src/assets/img/video/61.jpg',
          title: '都扭成这样了 还流动的这么快 猫绝对是液体',
          url:'https://www.bilibili.com/video/BV19a4y1x7j7/',
          videoId:'8',
          precaution:'低'
        },{
          a:3.22,
          imgUrl: 'src/assets/img/video/104.jpg',
          title: '三吵大闹环球影城',
          url:'',
          videoId:'8',
          precaution:'中'
        },{
          a:3.22,
          imgUrl: 'src/assets/img/video/1.jpg',
          title: '关于我打扮成原神角色接我妹放学这件事',
          url:'https://www.bilibili.com/video/BV1pv411G7RT',
          videoId:'8',
          precaution:'高'
        },
        {
          a:2.12,
          imgUrl: 'src/assets/img/video/2.jpg',
          title: '在老妈生气的边缘疯狂试探',
          url:'https://www.bilibili.com/video/BV1RL4y1871M',
          videoId:'8',
          precaution:'低'
        },{
          a:0.92,
          imgUrl: 'src/assets/img/video/3.jpg',
          title: '再也不和爸妈出去玩了！',
          url:'https://www.bilibili.com/video/BV1nq4y1P7zy',
          videoId:'8',
          precaution:'低'
        },
        {
          a:2.19,
          imgUrl: 'src/assets/img/video/4.jpg',
          title: '唱的不错，以后不要再唱了！',
          url:'https://www.bilibili.com/video/BV1JU4y1j7qf',
          videoId:'8',
          precaution:'中'
        }
      ]
    }
  },
  methods:{
  },
  // // 设置背景
  // beforeCreate() {
  //   this.$nextTick(() => {
  //     document.body.setAttribute('style', 'background:rgb(247,249,250)')
  //   })
  // },
  // //实例销毁之前钩子，移除body标签的属性style
  // beforeUnmount() {
  //   document.body.removeAttribute('style')
  // },
}
</script>

<style scoped>
/*被选后的单选框颜色*/
.industry-radio >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: rgb(21,154,245);
  background: #FFFFFF;
}

/*单选框样式*/
.industry-radio >>> .el-radio-button__inner {
  border-radius: 5px;
  background: #F5F8FA;
  color: #7F7F7F;
  border: 0;
  padding: 8px 16px;
  font-size: 16px;
}

/*单选框覆盖原有阴影*/
.industry-radio >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: none;
}

/*背景*/
.radio-bg {
  background: #F5F8FA;
  padding: 5px;
  border-radius: 5px;
}

#poster{
  width: 100%;
}

.video{
  margin-bottom: 10px;
  text-align: left;
  padding: 0 8px;
}

.video .title{
  margin-top: 5px;
  margin-bottom: 0;
  font-weight: 500;
}


.video-img{
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
}

.video-tap{
  border-radius: 10px;
  border: #00A5E6 solid 1px;
  padding: 3px 5px;
  font-size: 8px;
  color: #00A5E6;
  margin-right: 5px;
  line-height: 30px;
}

.round{
  /*background: url("../assets/img/circle.png") 110px -100px;*/
  /*background-repeat: no-repeat;*/
  padding: 5px 10px;
  background: #FFFFFF;
  border-radius: 20px;
  /*background-image: linear-gradient(to right bottom, #e2f4fb, #e8f6fc, #eef8fd, #f3fbfe, #f9fdff);*/
}

.precaution-value{
  background-image: linear-gradient(to right bottom, #39c0f3, #5ac9f5, #73d2f8, #8adbfb, #9fe4fe);
  border-radius: 5px;
  padding: 3px 8px;
  color: #FFFFFF;
  opacity: 0.8;
  font-weight: bolder;
  font-size: 12px;
  cursor: pointer;
}

.video-info{
  margin-bottom: 10px;
  font-size: 13px;
  color: #7F7F7F;
}

.video-info .el-col{
  margin-bottom: 5px;
}

.video-info img{
  margin-right: 5px;
}

</style>
