<template>
  <div>
    <TheNav :style="headStyle" v-if="this.user.phone == ''"></TheNav>
    <TheNavLogin :style="headStyle" v-else></TheNavLogin>

    <el-row>
      <el-col class="my-banner">
        <el-row>
          <el-col :span="10" :offset="2" class="left home-title">
            <h1>恰帮帮</h1>
            <p>b站视频智能辅助工具，高效进行弹幕情感分析和流行度预测</p>
            <button class="started">开始体验</button>
          </el-col>
          <el-col :span="12" class="banner-img">
            <img src="src/assets/img/banner-img.svg" height="400" alt="人物">
          </el-col>
        </el-row>

        <el-row class="left introduction-box">
          <el-col :span="10" :offset="2">
            <img src="src/assets/img/up.svg" height="400" alt=" ">
          </el-col>
          <el-col :span="9" :offset="1">
            <el-row>
              <el-col>
                <h2>创作智能辅助工具</h2>
                <p>
                  面向<span>UP主和MCN</span>提供强大的弹幕情感分析和视频流行度预测功能，让视频创作更加高效精准。
                </p>
              </el-col>
<!--              <el-col :span="6" :offset="18" style="text-align: right">-->
<!--                <router-link to="/" class="home-link center-vertically">-->
<!--                  一键使用-->
<!--                  <img src="src/assets/img/enter.svg" height="20" alt="进入">-->
<!--                </router-link>-->
<!--              </el-col>-->
            </el-row>
          </el-col>
        </el-row>

        <el-row class="left introduction-box">
          <el-col :span="9" :offset="2">
            <el-row>
              <el-col>
                <h2>视频弹幕监管利器</h2>
                <p>
                  利用强大的弹幕情感词程度预警功能，为<span>监管方</span>提供准确的数据支持，让监管更加有效。
                </p>
              </el-col>
<!--              <el-col :span="6" :offset="18" style="text-align: right">-->
<!--                <router-link to="/" class="home-link center-vertically">-->
<!--                  一键使用-->
<!--                  <img src="src/assets/img/enter.svg" height="20" alt="进入">-->
<!--                </router-link>-->
<!--              </el-col>-->
            </el-row>
          </el-col>
          <el-col :span="10" :offset="3">
            <img src="src/assets/img/monitor.svg" height="400" alt=" ">
          </el-col>
        </el-row>

        <div class="gredient-bg">
          <el-row class="model">
            <el-col :offset="8" :span="16" class="center-vertically">
              <img src="src/assets/img/analysis.svg" height="30" alt="分析">
              <span>
              一键了解<router-link to="/model" class="hand">恰帮帮视频弹幕智能分析模式</router-link>
            </span>
            </el-col>
          </el-row>

          <el-row class="society">
            <el-col style="margin-bottom: 30px">
              <h1>恰帮帮，与每位用户共同进步</h1>
            </el-col>
            <el-col style="margin-bottom: 40px">
              <el-row>
                <el-col :span="6" :offset="2">
                  <el-card class="my-card">
                    <h2 class="center-vertically">
                      <img src="src/assets/img/card-society.svg" height="30" alt="广场">
                      视频广场
                    </h2>
                    <el-divider></el-divider>
                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>多维度案例解读，分析视频流量密码</p></div>
                    </div>

                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>视频流行趋势可视化展现，轻松掌握变化趋势</p></div>
                    </div>

                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>研究热门案例，了解分区流行趋势</p></div>
                    </div>

                    <div class="card-btn">
                      <el-button type="primary" round>进入广场</el-button>
                    </div>

                  </el-card>
                </el-col>
                <el-col :span="6" :offset="1">
                  <el-card class="my-card">
                    <h2 class="center-vertically">
                      <img src="src/assets/img/card-up.svg" height="30" alt="流行度">
                      视频流行度预测
                    </h2>
                    <el-divider></el-divider>
                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>依托数据，洞察流量走向，助您抢占流行风口</p></div>
                    </div>

                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>提供个性化建议，为视频流量提升保驾护航</p></div>
                    </div>

                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>从视频数据中探索价值，提高推广效率</p></div>
                    </div>

                    <div class="card-btn">
                      <el-button type="primary" round>进入预测</el-button>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6" :offset="1"  class="my-card">
                  <el-card>
                    <h2 class="center-vertically">
                      <img src="src/assets/img/card-monitor.svg" height="30" alt="预警器">
                      弹幕预警
                    </h2>
                    <el-divider></el-divider>
                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>准确识别和预警视频弹幕情感，让监管更加精准高效</p></div>
                    </div>

                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>助力监管方掌握热度趋势，有效维护平台秩序</p></div>
                    </div>

                    <div class="center-img">
                      <div><img src="src/assets/img/point.svg" height="20" alt="分点"></div>
                      <div><p>快速识别情感倾向，守护视频广场生态</p></div>
                    </div>

                    <div class="card-btn">
                      <el-button type="primary" round>进入预警器</el-button>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>

        <el-row class="users">
          <el-col style="margin-bottom: 30px">
            <h1>他们都在使用恰帮帮</h1>
          </el-col>
          <el-col :span="20" :offset="2" class="comment">
            <el-carousel height="250px">
              <el-carousel-item v-for="item in comments" :key="item">
                <el-row>
                  <el-col>
                    <img src="src/assets/img/quotation-marks.svg" height="40" alt="引号">
                  </el-col>
                  <el-col :span="18" :offset="3">
                    <p class="comment-content">{{item.content}}</p>
                    <h5>{{item.up}}</h5>
                  </el-col>
                </el-row>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>

<!--        <el-row class="grow">-->
<!--          <el-col>-->
<!--            <h1>与恰帮帮共同成长</h1>-->
<!--            <p>恰帮帮——面向b站视频创作者和监管方的数据分析平台</p>-->
<!--          </el-col>-->
<!--        </el-row>-->

        <el-row class="enter-system">
          <el-col :span="24" class="system">
            <h1>进入恰帮帮，大数据帮您开启智慧视频创作模式</h1>
<!--            <el-button type="primary">立即使用</el-button>-->
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TheNav from "../assets/components/TheNav";
export default {
  name: "home",
  components: {TheNav},
  data(){
    return{
      // 导航栏样式
      headStyle: {
        background: "rgba(255, 255, 255, 0)",
        color: "rgba(255, 255, 255, 1)",
      },
      comments:[{
        content:'“恰帮帮”能够帮我们创作者解析视频弹幕信息，用大数据和人工智能分析观众的情感，抓住观众的“味蕾”。',
        up:'裴冬柚'
      },{
        content: '恰帮帮能很好的帮助我们分析弹幕，及时得到观众反馈，从而更好地对下期视频进行修改，产出更优质的视频内容！强烈推荐！！！',
        up:'星野茜Akane'
      }
      ]
    }
  },
  mounted() {
    this.handleScroll();
    // 导航栏滚动透明效果
    window.addEventListener("scroll", this.handleScroll); //监听页面滚动
  },
  methods:{
// 滚动页面时触发导航变色
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      //设置背景颜色的透明度
      if (scrollTop > 0) {
        this.headStyle.background = `rgba(255,255,255,${
          scrollTop / (scrollTop + 20)
        })`;
        this.headStyle.borderBottom = `1px solid rgba(230,230,230,${
          scrollTop / (scrollTop + 20)
        })`;
      } else if (scrollTop === 0) {
        this.headStyle.background = 'transparent' // 设置回到顶部时，背景颜色为透明
        this.headStyle.borderBottom = `none`
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<style scoped>
.my-banner{
  background: linear-gradient(180deg,#c2fbff 0%,rgba(255,255,255,0) 93.47%);
  height: 800px;
}

.my-banner h1{
  font-weight: bolder;
}

.banner-img{
  height: 700px;
  background: url("../assets/img/circle-bg.png") 0 200%;
  background-size: 800px;
  background-repeat: no-repeat;
  padding-right: 10%;
  padding-top: 100px;
}

.home-title{
  padding-top: 200px;
}

.home-title h1{
  font-size: 50px;
  color: #00A5E6;
}

.home-title p{
  font-size: 25px;
  color: rgba(16, 33, 59, 0.7);
  margin-top: 0;
}

.started{
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 18px 28px;
  font-size: 18px;
  line-height: 1;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  z-index: 5;
  transition: all .4s ease-in-out;
  border: 2px solid transparent;
  background: #37c2cc;
  overflow: hidden;
}

.btn-hover {
  position: relative;
  overflow: hidden
}

.btn-hover::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 0%;
  border-radius: 50%;
  background: rgba(0,0,0,.05);
  top: 50%;
  left: 50%;
  padding: 50%;
  z-index: -1;
  transition: all .3s ease-out 0s;
  transform: translate3d(-50%,-50%,0) scale(0)
}

.btn-hover:hover::after {
  transform: translate3d(-50%,-50%,0) scale(1.3)
}

.introduction-box h2{
  font-size: 32px;
  font-weight: bolder;
  margin-top: 100px;
}

.introduction-box p{
  color: rgba(16, 33, 59, 0.6);
  font-size: 18px;
}

.introduction-box span{
  color: #678FE1;
}

.home-link{
  font-weight: bolder;
  font-size: 20px;
  text-decoration: none;
  margin-top: 30px;
}

.grow{
  background-image: linear-gradient(to right, #020a4d, #041065, #08167e, #101b98, #1821b2);
}

.grow h1{
  font-weight: bolder;
  font-size: 40px;
  color: #FFFFFF;
}

.grow p{
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
}

.model{
  background-image: linear-gradient(to right, #c2fbff, #cdfcff, #d8fdff, #e3fdff, #edfeff);
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  letter-spacing: 0.1em;
  margin-top: 40px;
  margin-bottom: 40px;
}

.model a{
  font-weight: bolder;
  text-decoration: none;
}

.my-card img{
  margin-right: 10px;
}

.my-card{
  text-align: left;
}

.society{
}

.society p{
  display: inline;
  line-height: 30px;
}

.center-img{
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: flex-start;
  height: 60px;
}

.center-img img{
  display: inline;
  padding-top: 5px;
}

.card-btn{
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
}

.gredient-bg{
  background-image: url("../assets/img/common-bg.png");
  padding-bottom: 100px;
}

.enter-system{
  background: url("../assets/img/bg-circle-purple.png") 50% 0;
  background-repeat: no-repeat;
}

.system{
  padding-top: 100px;
  padding-bottom: 100px;
  background: url("../assets/img/bg-circle-green.png") 10% 0;
  background-size: 10%;
  background-repeat: no-repeat;
}

.enter-system h1{
  font-size: 50px;
  /*渐变*/
  background-image: linear-gradient(to right, #0017e6, #0051f7, #0072fa, #008df2, #00a5e6);
  -webkit-background-clip: text;
  color: transparent;
}

.users{
  /*background:url("../assets/img/users.png");*/
  background-image: linear-gradient(to right, #020a4d, #041065, #08167e, #101b98, #1821b2);
  margin-bottom: 50px;
  background-size: cover;
  color: #FFFFFF;
}

.el-carousel__item p {
  font-size: 22px;
  line-height: 35px;
}

.el-carousel__item h5 {
  font-size: 18px;
}
</style>
