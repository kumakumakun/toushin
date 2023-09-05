<template>
  <div id="article" class="article">

    <div class="image-container1">
      <div class="title-title">
        <div class="title1">
        <h2 class="IPP animate__animated animate__lightSpeedInLeft">
          <h2 class="titlle1">Information</h2>
          <h2 class="titlle1">management </h2>
          <h2 class="titlle1">development</h2>
          <h2 class="titlle1">policy</h2>
        </h2></div>
        <div class="title2" >
            <h5 class="title-a">
              <p>情</p>
              <p>報</p>
              <p>管</p>
              <p>理</p>
              <p>保</p>
              <p>護</p>
              <p>方</p>
              <p>針</p>
            </h5>
        </div>
      </div>
      <div class="image-image">
        <img src="@/assets/imgs/1.png" alt="First Image" class="animate__animated animate__backInRight ">
      </div>
      <!-- <img src="@/assets/imgs/1.png" alt="First Image" class="animate__animated animate__backInRight "> -->
    </div>

    <div class="card-IPP">

        <div class="card-back">
          <div class="glass">
            <div class="main-title">
              <h4 class="main-title-text">情報管理保護方針</h4>
            </div>

            <div class="main-content-top">
              <p class="main-content-top1">制定年月日&emsp;2022年7月1日<br>最終改正年月日&emsp;2022年7月1日<br>東進ソリューションズ株式会社<br>代表取締役&emsp;劉 暁東</p>
            </div>

            <div class="main-content-text">
              <p class="text-top-IPP">当社は、当社が取り扱う全ての個人情報の保護について、社会的使命を十分に認識し、本人の権利の保護、個人情報に関する法規制等を遵守します。また、以下に示す方針を具現化するための個人情報保護マネジメントシステムを構築し、最新のＩＴ技術の動向、社会的要請の変化、経営環境の変動等を常に認識しながら、その継続的改善に、全社を挙げて取り組むことをここに宣言します。</p>

              <p class="text-IPP">ａ）個人情報は、ソリューションサービス、SES、パッケージ代理・仲介、SIサービス（受託開発）、経営コンサルティング業務における当社の正当な事業遂行上並びに従業員の雇用、人事管理上必要な範囲に限定して、取得・利用及び提供をし、特定された利用目的の達成に必要な範囲を超えた個人情報の取扱い（目的外利用）を行いません。また、目的外利用を行わないための措置を講じます。</p>

              <p class="text-IPP">ｂ）個人情報保護に関する法令、国が定める指針及びその他の規範を遵守致します。</p>

              <p class="text-IPP">ｃ）個人情報の漏えい、滅失、き損などのリスクに対しては、合理的な安全対策を講じて防止すべく事業の実情に合致した経営資源を注入し個人情報セキュリティ体制を継続的に向上させます。また、個人情報保護上、問題があると判断された場合には速やかに是正措置を講じます。</p>

              <p class="text-IPP">ｄ）個人情報取扱いに関する苦情及び相談に対しては、迅速かつ誠実に、適切な対応をさせていただきます。</p>

              <p class="text-IPP">ｅ）個人情報保護マネジメントシステムは、当社を取り巻く環境の変化を踏まえ、適時・適切に見直してその改善を継続的に推進します。</p>

              <p class="text-bottom-IPP">以上</p>
            </div>

            <div class="main-content-bottom">
              <p class="main-content-bottom1">【お問合せ窓口】<br>個人情報保護方針に関するお問合せにつきましては、下記窓口で受付けております。<br>東進ソリューションズ株式会社&emsp;個人情報問合せ窓口<br>東京都江東区佐賀1-11-11東海永代ハイツ403号室<br>E-Mail :  info@tss-jp.net
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
import Cookie from 'js-cookie'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import '@/assets/styles/github-md.css'
import { fetchBlog, addBlogLike, addBlogClick } from '@/api/blog'


export default {
  props: {
    blogId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      blog: {
        id: '',
        title: '',
        summary: '',
        createDate: '',
        updateDate: '',
        clickCount: '',
        commentCount: '',
        likeCount: '',
        tag: '',
        blogImage: '',
        originalUrl: '',
        content: '',
        typeName: ''
      },
      content: '',
      cookieKey: 'LIKE_BLOG_' + this.blogId
    }
  },
  watch: {
    blogId() {
      this.fetchData()
    }
  },
  created() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    this.fetchData()
    this.addClick() // 添加点击数
  },
  methods: {
    fetchData() {
      fetchBlog(this.blogId).then(response => {
        this.blog = response.data
        this.content = marked(this.blog.content)
      })
    },
    addClick() {
      addBlogClick(this.blogId)
    },
    addLike() {
      if (Cookie.get(this.cookieKey)) return
      addBlogLike(this.blogId).then(response => {
        this.blog.likeCount += 1
        Cookie.set(this.cookieKey, 1)
      })
    }
  }
}
</script>

<style lang="scss">

.image-container1 {
  display: flex;
  width: 100%;
}



 .title-title{
  flex: 1; /* 让两个子元素平均占据容器的宽度 */
  border-radius: 8% 0 0 8%;
  box-sizing: border-box; /* 让边框和内边距计算在元素的宽度内 */
  // background-color: #ffe8e8;
  background-color: #ffcccc;
  padding: 0px; 
 }

 .title1{
  padding: 25px;
 }

.image-image{
  flex: 1; /* 让两个子元素平均占据容器的宽度 */
  box-sizing: border-box; /* 让边框和内边距计算在元素的宽度内 */
  background-color: #fff;
  border-radius:0 8% 8% 0;

}

.image-image img {
  max-width: 100%; 
  // height: auto; /* 保持图片的纵横比例 */
  min-height: 100%; 
}

.titlle1{
  text-shadow: 2px;
}
.title2{
  margin-top: 15px;
    text-align: center; /* 居中对齐文本 */
}


@keyframes title-a-anim{
  // to {
  //   transform: translateY(0);
  // }
  0%{
    transform: translateY(-150%); /*表示範囲外から*/
  }
  10%{
    transform: translateY(0); /*通常の位置へ*/
  }
  50%{
    transform: translateY(0); /*文字が上に揃うまで待機*/
  }
  60%{
    transform: translateY(150%); /*下がる*/
  }
  100%{
    transform: translateY(0%); /*待機*/
  }
 }

 .title-a{
  margin: auto;
    width: 85%;
    display: flex; /*　横 */
    overflow: hidden; /* 隐藏溢出 */
 }

// /*** アニメーション ***/
 .title-a p {
  width: 50%;
  text-align: center;
  //margin:0px auto;
   transform: translateY(-150%); /*隐藏溢出*/
   display: block; /*在动态输入提示中*/
   animation: title-a-anim 2s ease-out forwards 1; /* 设置迭代次数为1 */
 }

/*** 遅延時間delay設定 ***/
.title-a p:nth-child(1) {
  animation-delay: 0s;
}
.title-a p:nth-child(2) {
  animation-delay: 0.1s;
}
.title-a p:nth-child(3) {
  animation-delay: 0.2s;
}
.title-a p:nth-child(4) {
  animation-delay: 0.3s;
}
.title-a p:nth-child(5) {
  animation-delay: 0.4s;
}
.title-a p:nth-child(6) {
  animation-delay: 0.5s;
}
.title-a p:nth-child(7) {
  animation-delay: 0.6s;
}
.title-a p:nth-child(8) {
  animation-delay: 0.7s;
}


.glass {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  opacity: 0;
  animation: fadeIn 4s forwards;
}
// .main-title-text,
// .main-content-top1,
// .text-top,
// .text,
// .text-bottom,
// .main-content-bottom1
// {
//   margin-bottom: 10px;
//   opacity: 0;
//   animation: fadeInParagraph 2s forwards;
// }


@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

// @keyframes fadeInParagraph {
//   to {
//     opacity: 1;
//   }
// }

// // .main-title-text:nth-child(1) {
// //   animation-delay: 1s;
// // }

// // .main-content-top1:nth-child(1){
// //   animation-delay: 2s;
// // }

// .text-top:nth-child(1){
//   animation-delay: 1s;
// }

// .text:nth-child(1){
//   animation-delay: 2s;
// }
// .text:nth-child(2){
//   animation-delay: 2.25s;
// }
// .text:nth-child(3){
//   animation-delay: 2.5s;
// }
// .text:nth-child(4){
//   animation-delay: 2.75s;
// }
// .text:nth-child(5){
//   animation-delay: 3s;
// }
// .text:nth-child(6){
//   animation-delay: 3.25s;
// }
// .text:nth-child(7){
//   animation-delay: 3.5s;
// }
// .text-bottom:nth-child(9){
//   animation-delay: 3.5s;
// }
// .main-content-bottom1:nth-child(1){
//   animation-delay: 3.75s;
// }



.card-IPP {
  padding: 30px;
  margin-top: 40px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  perspective: 1000px;
   border-radius: 15px;
   -webkit-backdrop-filter: blur(10px); /* 调整模糊程度 */
   background-color:#FFFFFF; /* 调整透明度 */
   backdrop-filter: blur(20px);
   box-shadow: 0 5px 20px  rgba(2, 2, 2, 0.5); /* 薄い影 */
   transition: all .3s;
}

.card-IPP:hover {
	top:-3px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


.main-title-text{
  text-align:center;
  margin-top:50px;
}

.main-content-top{
  line-height: 2.0;
  margin-top:50px;
  margin-bottom:50px;
  text-align: right;
}




p.text-IPP{
  margin-top:40px;
  margin-bottom:30px;
}

.text-bottom-IPP{
  margin-top:50px;
  margin-bottom:50px;
  text-align: right;
}

.main-content-bottom{
  line-height: 2.0;
  font-size: 18px;
}



</style>
