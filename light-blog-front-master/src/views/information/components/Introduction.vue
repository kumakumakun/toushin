<template>
    <div id="introduction" class="introduction">
      <div class="headline animate__animated animate__fadeIn animate__slower">
          <div>Company</div>
          <div class="sub">会 社 概 要</div>
      </div>

      <div class="seperation"></div>

      <div class="greet animate__animated animate__fadeIn animate__slower">
          <div>Top message</div>
          <div class="sub">挨 拶</div>
          <div class="content animate__animated animate__fadeIn animate__slow">
            私たちは2004年にIT企業としてサービスを開始しました。

            私たちの「モノづくり」のサービスの特徴は、
            ITのデジタル技術と人の心の温かみ(アナログ)の融合にあります。
            それは単に「作るモノ」に対しての貢献ではなく、「お客様が笑顔になる」為のモノづくりです。

            その為、社員教育にはとても力を入れています。技術力はもちろんの事、人間性を重視したビジネススキルやホスピタリティーの精神をもって温かみあるサービスを心がけています。

            私たちは、モノづくりを通じて、人と人との笑顔を繋げるココロのメッセンジャーとして、
            「SECで良かった」「SECとまた一緒に仕事がしたい」と言って貰えるような
            お客様にとって心の拠り所になるような存在を目指しています。

            お客様一人一人と同じ目線で物事を考え、悩み、寄り添い、協力し合う事で、
            次につながる楽しい未来を共に創っていく。

            その強い想いを持って、これからも日々精進していく所存です。

            今後とも皆様のご支援とご愛顧を賜りますようよろしくお願い致します

            代表取締役  岡田 充弘
          </div>
      </div>

      
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
.headline {
  font-family: sans-serif, monospace, 'Courier New', Courier;  
  font-size: 80px;
  color: white;
  text-align: center; 
  text-shadow: 0 0 5px rgb(99, 99, 99);
  .sub{
    font-size: 18px;
  }
}
.seperation{
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    color: white;
    padding: 1.5px;
    box-shadow: 0 0 5px rgb(99, 99, 99);
    border-radius: 10px;
}
.greet{
  margin-top: 80px;  
  margin-bottom: 80px;
  font-family: sans-serif, monospace;  
  font-size: 50px;
  color: white;
  text-align: center;
  text-shadow: 0 0 5px rgb(99, 99, 99);
  .sub{
    font-size: 18px;
  }
  .content{
    font-weight: 100;
    font-family: 'Yu Mincho', serif;
    font-size: 18px;
    text-shadow: 0 0 0px transparent;
    margin-top: 40px;
    margin-left: 100px;
    margin-right: 150px;
    padding-left: 50px;
    padding-bottom: 50px;
    text-align: left;
    white-space: pre-line;
    border-left: 5px solid white;
    border-left-style: ridge;
    border-bottom: 5px solid white;
    border-bottom-style: groove;
    border-bottom-left-radius: 20px;
  }
}

</style>
  