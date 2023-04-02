<template>
  <el-row>
    <TheNavLogin></TheNavLogin>

    <el-col style="margin-top: 50px">
      <img src="src/assets/img/poster-personal2.png" width="100%" alt="背景">
    </el-col>

    <el-col class="personal-info">
      <img src="src/assets/img/avatar.jpg" width="110" alt="头像" style="border-radius: 50%" >
      <h3>恰小帮</h3>
      <span>UP主</span>
    </el-col>

    <el-col class="content-box">
      <el-row>
        <el-col :span="6" :offset="2" class="part left">
         <el-row class="content">
           <el-col :span="22" :offset="1" class="center-vertically">
             <img src="src/assets/img/personal.svg" width="25" alt="个人信息" class="my-icon">
             <h3 style="color: #2c3e50;">个人信息</h3>
           </el-col>
           <el-col :span="15" :offset="1">累计视频发布量</el-col>
           <el-col :span="8">32</el-col>

           <el-col :span="15" :offset="1">累计播放量</el-col>
           <el-col :span="8">61.5W</el-col>

           <el-col :span="15" :offset="1">累计获赞数</el-col>
           <el-col :span="8">17.6W</el-col>

           <el-col :span="15" :offset="1">粉丝数</el-col>
           <el-col :span="8">12W</el-col>
         </el-row>
        </el-col>

        <el-col :span="13" :offset="1" class="part last right-box left">
          <h3 style="color: #2c3e50;">历史记录</h3>


          <el-row class="history left">
            <el-col :span="18" :offset="1" class="right-part-title">
              <span>在老妈生气的边缘疯狂试探</span>
              <span class="history-tag2">弹幕预警</span>
            </el-col>
            <el-col :span="4" class="right">2023.3.31</el-col>

            <el-col :span="22" :offset="1">
              预警程度：中
            </el-col>
            <el-col :span="22" :offset="1">
              建议：作为一位视频创作者，您可以通过调整视频内容的方式来降低观众对您视频的负面反馈,包括避免使用敏感或带有贬义的词语、强调产品或广告的过度推销、注重产品实际……
            </el-col>

            <el-col :span="23" class="right">
              <a class="hand" @click="openDetail">查看详情</a>
            </el-col>

          </el-row>
          <el-row class="history left">
            <el-col :span="18" :offset="1" class="right-part-title">
              <span >不上班的日子真的很有趣</span>
              <span class="history-tag1">流行度预测</span>
            </el-col>
            <el-col :span="4" class="right">2023.2.17</el-col>

            <el-col :span="22" :offset="1">
              预测分数：4.32
            </el-col>
            <el-col :span="22" :offset="1">
              建议：优化视频标题和描述：标题和描述是让人们点击观看视频的关键。为了吸引更多的观众，标题和描述应该简短、吸引人、明确表达视频的主题和内容；制作优质内容：制作……
            </el-col>

            <el-col :span="23" class="right">
              <a class="hand" @click="openDetail">查看详情</a>
            </el-col>
          </el-row>


          <el-row class="history left">
            <el-col :span="18" :offset="1" class="right-part-title">
              <span >当我用动画片角色声线，去为《狂飙》里的人物配音时</span>
              <span class="history-tag1">流行度预测</span>
            </el-col>
            <el-col :span="4" class="right">2023.1.29</el-col>

            <el-col :span="22" :offset="1">
              预测分数：1.34
            </el-col>
            <el-col :span="22" :offset="1">
              建议：您的视频标题较长。“有趣”是视频的直接吸引力。您可以标题控制在18个字内，把看点写在最前面、直击痛点。您可以使用这些标题公式：①新信息：外网最火的彩妆首测……
            </el-col>

            <el-col :span="23" class="right">
              <a class="hand" @click="openDetail">查看详情</a>
            </el-col>

          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "personalCenter",
  methods:{
    openDetail(){
      this.$notify({
        title: '建议',
        dangerouslyUseHTMLString: true,
        message: '<h4>整体内容</h4>\n' +
          '          <p>从整体视频制作上，您还可以：</p>\n' +
          '          <ol>\n' +
          '            <li>优化视频标题和描述：标题和描述是让人们点击观看视频的关键。为了吸引更多的观众，标题和描述应该简短、吸引人、明确表达视频的主题和内容</li>\n' +
          '            <li>制作优质内容：制作高质量的视频是吸引更多观众的基本要素。您可以考虑加入一些特殊的效果、动画或剪辑，使视频更加生动有趣</li>\n' +
          '            <li>与受众互动：在视频下方留言区回复观众的评论，回答他们的问题，增强互动，吸引更多观众</li>\n' +
          '            <li>利用SEO优化：通过搜索引擎优化（SEO）的技术手段，包括关键词排名和元数据优化等方法，提高视频在搜索引擎中的排名，让更多人看到您的视频</li>\n' +
          '          </ol>\n' +
          '\n' +
          '          <h4>详细建议</h4>\n' +
          '          <p>针对您的具体内容，可以调整以下部分：</p>\n' +
          '              <ol><li>您的表述：感谢甲方爸爸的大力支持！</li>\n' +
          '              <li>修改建议：可以将恰饭内容结合进视频剧情中，降低违和感。建议不直接表达“甲方”。</li>\n' +
          '              <li>理由：您的视频具有一定的情节性。强调“甲方”可能会降低观众观赏连贯性。</li>' +
          '              </ol>\n' +
          '          <h4>灵感</h4>\n' +
          '          <p>您可以参考以下思路：</p>\n' +
          '          <ol>\n' +
          '            <li>单开一个恰饭标题系列，让老观众看标题就知道是恰饭视频，以免在视频中突然恰饭引起观众反感。如UP主老番茄的“番茄带你……”系列</li>\n' +
          '            <li>如果您的赞助商同意提供独家折扣或福利，您可以在视频中分享这些信息，以吸引更多的观众</li>\n' +
          '\n' +
          '          </ol>',
        position: 'top-left',
        duration: 0
      });
    }
  }
}
</script>

<style scoped>
.personal-info{
  transform:translateY(-80px);
  height: 100px;
}
.personal-info h3{
  margin-top: 5px;
  margin-bottom: 5px;
}

.content-box{
  background: rgb(247,249,250);
  padding-top: 30px;
}

.content{
  color: #7F7F7F;
  line-height: 30px;
}

.part{
  background: #FFFFFF;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.right-box{
  padding-left: 1%;
  padding-right: 1%;
}

.history{
  border: 1px solid #EBEEF5;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #7F7F7F;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.right-part-title{
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 16px;
}

.history-tag1{
  color: #409eff;
  border: #409eff solid 1px;
  border-radius: 20px;
  padding: 4px 6px;
  margin-left: 5px;
  font-weight: 500;
  font-size: 12px;
}

.history-tag2{
  color: #FF6655;
  border: #FF6655 solid 1px;
  border-radius: 20px;
  padding: 4px 6px;
  margin-left: 5px;
  font-weight: 500;
  font-size: 12px;
}

.el-notification{
  width: 100%;
}
</style>
