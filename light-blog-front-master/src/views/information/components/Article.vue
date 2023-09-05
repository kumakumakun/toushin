<template>
  <div id="article" class="article">
    <div class="animate__animated animate__fadeIn animate__slower">
      <div style="font-size: 50px; color: white;">Overview</div>
      <div style="color: white; margin-left: 10px;">会 社 概 要</div>
      <div class="overview" >
        <el-table class="overviewTable" :data="tableData" style=" width: 100% ; background-color: transparent;"  >
            <el-table-column class="C1" prop="name" label=" " width="180" ></el-table-column>
            <el-table-column prop="address" label=" "></el-table-column>
        </el-table>
      </div>
    </div>
    <br/>
    <el-row :gutter="0">
      <el-col :span="24" class="flex-container">
        <div class="left-content">
          <div class="mapHeader">
            <a class="mapLink" target="_blank" href="https://www.google.com/maps/place/Japan,+%E3%80%92135-0031+Tokyo,+Koto+City,+Saga,+1-ch%C5%8Dme%E2%88%9211%E2%88%9211+%E6%9D%B1%E6%B5%B7%E6%B0%B8%E4%BB%A3%E3%83%8F%E3%82%A4%E3%83%84/@35.6770447,139.7871174,17z/data=!3m1!4b1!4m6!3m5!1s0x60188941df63deeb:0xe17e36a5faf31476!8m2!3d35.6770404!4d139.7896923!16s%2Fg%2F11bw3yjrjh?entry=ttu">
              Map
            </a>
          </div>
          <div class="left-content japanese">アクセスマップ</div>
        </div>
        <div class="right-content">
          <el-card class="box-card" style="text-align: center; background-color: transparent; color: white; border-radius: 70px;" shadow="hover">
            <div class="text item animate__animated animate__fadeInRight animate__slow">
              {{'お気軽にお問い合わせください '}}
            </div>
            <div class="text item animate__animated animate__fadeInRight animate__slow">
              {{'電話番号:03-4361-5467 '}}
            </div>
            <div class="text item animate__animated animate__fadeInRight animate__slow">
              {{'受付時間 9:00 &#8211; 18:00 [ 土日・祝日除く ] '}}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'animate.css';

export default {
  props: {
    blogId: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      tableData: [{
            name: '社名',
            address: '株式会社T.S.S'
          }, {
            name: '設立日',
            address: '2004年4月'
          }, {
            name: '所在地',
            address: '〒101-0031 東京都千代田区東神田1-9-8 THE WAVES AKIHABARA(旧：ミユキビル) 5F'
          }, {
            name: 'TEL',
            address: '03-5825-4612'
          }, {
            name: 'FAX',
            address: '03-5825-4712'
          }, {
            name: 'URL',
            address: 'http://www.sec-service.co.jp/'
          }, {
            name: '事業内容',
            address: 'ITソリューション事業 ITマネジメント事業 アウトソーシング事業 ソフトウェア開発 人材育成・能力開発 コンピュータ関連ビジネスの企画開発 カスタマーサポート事業'
          }, {
            name: '資本金',
            address: '14,000,000円'
          }, {
            name: '代表者',
            address: '岡田  充弘'
          }, {
            name: '従業員数',
            address: '約60名'
          }, {
            name: '取引銀行',
            address: '三菱東京ＵＦＪ銀行 朝日信用金庫'
          },] 
    }
  },
  watch: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .text {
    font-size: 18px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 380px;
  }

  .article {
    position: relative;
    display: block;
    padding-bottom: 60px;
  }
  /* 自定义表格字体颜色 */
  // .el-table th,
  // .el-table td {
  // background-color: transparent; /* 设置字体颜色为红色，你可以根据需要修改颜色值 */
  // }
  .flex-container {
  display: flex;
  justify-content: space-between; // 将内容放置在两端
  }
  .left-content {
    color: rgb(238, 238, 238);
    font-size: 80px;
    font-family: Times, "Times New Roman", Georgia, serif;
    margin-top: 98px;
    .mapHeader{
      color: rgb(238, 238, 238);
      .mapLink{
        color: rgb(238, 238, 238);
      }
    }
    .japanese{
      font-size: 20px;
      margin-top: -18px;
    }
  }
  .right-content {
    margin-top: 30px;
    margin-bottom: -30x;
  }
  .el-table th,
  .el-table td {
    background-color: #25a0b6a9 !important;
    .cell{
      font-size: 16px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: rgb(252, 252, 252) !important;
    }
  }  
</style>
