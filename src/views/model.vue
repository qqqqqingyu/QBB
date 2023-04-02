<template>
  <el-row class=" model">
    <TheNav></TheNav>

    <el-col  class="model-bg">
      <el-row>


        <el-col :span="2" :offset="2" class="first bread left" >
          当前位置：
        </el-col>
        <el-col :span="10" class="first">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 40px">
            <el-breadcrumb-item :to="{ path: '/' }">模型介绍</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>

        <el-col style="margin-bottom: 30px">
          <h1><b>恰帮帮——基于大数据的恰饭视频智能优化系统</b></h1>
        </el-col>

        <el-col :span="18" :offset="3" class="left introduction">
          &emsp;&emsp;科技助力文化，数字引领潮流。通过恰帮帮，“恰”出弹幕文化的营养，通过数据挖掘，把弹幕数据融入自媒体数字经济生产，
          把广告传播荣誉自媒体视频创作，控制不良网络文化负面传播。“恰”出网络视频文化产业新科技，“恰”出情感营销vlog广告新模式，
          “恰”出弹幕数字文化创新新未来。
        </el-col>

        <el-col :span="18" :offset="3" class="left">
          <h2>模型思路</h2>
          <p>&emsp;&emsp;恰帮帮创造性地将弹幕文化和vlog视频广告综合分析，研究二者相互促进的叠加效应，计算其情感值影响下，视频关注度的影响因素。</p>
        </el-col>

        <el-col :span="18" :offset="3">
          <img src="src/assets/img/model-process3.svg" width="100%" alt="模型">
        </el-col>

        <el-col :span="20" :offset="2" class="line"></el-col>
      </el-row>
    </el-col>


    <el-col>
      <el-row>
        <el-col :span="18" :offset="3" class="left">
          <h2>哔哩哔哩vlog广告情感词典</h2>
          <p>&emsp;&emsp;恰帮帮基于vlog 广告视频弹幕语料自建情感词库，实时收录最新的热门弹幕，为相关的NLP研究提供词典工具支持。情感词典样例如图。</p>
        </el-col>

        <el-col :span="20" :offset="2" class="last">
          <img src="src/assets/img/dictionary3.svg" width="100%" alt="情感词典">
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "model"
}
</script>

<style scoped>
.model-bg{
  background-image: linear-gradient(to bottom, #ccfcff, #dbfcff, #ecfbff, #f9fcff, #ffffff);
}

.model-bg1{
  background-image: linear-gradient(to right bottom, #ffffff,#fdfeff, #fbfdff, #f7fdff, #fbfdff, #f3fdff, #e9fdff, #e0fdff);
}


.introduction{
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 20px;
}

.model p{
  line-height: 30px;
}

.line{
  height:1px;
  background:linear-gradient(244deg,rgba(255,255,255,0) 0%,rgba(0,173,194,0.8) 50%,rgba(255,255,255,0) 100%);
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
