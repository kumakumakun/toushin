<template>
  <div class="name1" >
    <div class="topback">
      <!-- <Card style="width:300px" class="card">
        <div style="text-align:center">
          <h1 class=" animate__animated animate__swing">TSS事業概要</h1>
        </div>
      </Card> -->
    </div>
    <div class="image-container001">
      <div class="boxone">
        <h1 class="animate__animated animate__backInRight centered-title" >Service</h1>
        <h4 class="animate__animated animate__backInRight centered-title1">事業概要</h4>
      </div>
      <img src="@/assets/imgs/6.png" alt="First Image" class="animate__animated animate__backInRight" :class="{ 'fade-in': items[1].isInViewport }">
    </div>
    <div class="animate__animated animate__fadeInDownBig name2">
      <h1 class="centered-title">Service</h1>
      <h4 class="centered-title1">事業概要</h4><hr>
    </div>
    <h1 class="name11">T.S.Sのバリュー「技術と人間性の両立」</h1><hr>
    <div class="name3">
      私たちはIT企業です。IT企業といえば技術力で勝負するというのがスタンダード。もちろん我々も技術力は重要視し、クライアントの皆様から求められる技術に対する期待に応えるべく、日々スタッフの技術水準の向上に努めております。それと同時にテクニカルスキルだけでなく、私たちはビジネスパーソン力の向上にも注力しています。どんなに力があっても、それを扱う人間力が適切に育っていなければその力は正しく発揮されることはありません。裏を返せば、人間力はその人の持つ技術の力を110％、120％、時に200％にすることすらできると私たちは信じています。その人の持つ個性を、その人の強みを最大限発揮できるようにするためにもビジネスパーソンとしての人間力の育成には特に注力をしています。そして、これこそが顧客に対する真の満足と価値の提供につながると私たちは考えています。
    </div>
    <div class="name4">
      <h1 class="name5">事業特性「５つのPOINT」</h1><hr>
    </div>
    <div class="name6">
      <h4>Webアプリケーション開発、フロント・モバイル関連技術</h4>
      日常的に使用するITの世界と様々なユーザをつなげることを目的として、Java、PHP、C#、JavaScriptなどを用いてWeb系フロント開発、モバイル関連事業に注力をしています。
    </div><hr>
    <div class="name6">
      <h4>パッケージシステム</h4>
      T.S.Sでは Microsoft365、Kintoneなどのビジネスソリューションシステムの導入支援やERPやCRMといった各種パッケージソフト開発支援を行っています。
    </div><hr>

    <div class="name6">
      <h4>先進技術開発</h4>
      世の中のニーズに積極的に応えるべく、先進的な技術を追いかけ、新たな事業特性分野として拡大することに対し挑戦を続けることもS.E.Cの事業特性の一つです。AI、ディープラーニング、RPAなどといった先進性のある技術分野に対しても積極的に対応しています。
    </div><hr>
    <div class="name6">
      <h4>クラウドソリューション</h4>
      AWS、GCP、Azureなど現在では当たり前となったクラウド技術を用いて、社内インフラ利便性向上の支援や、プライベートクラウドの構築・導入支援、各種クラウドの開発支援などを行っています。
    </div><hr>
    <div class="name6">
      <h4>システムソリューション</h4>
      現行システムに対し、コンサルティングを通して改善提案・システムの開発・技術支援など様々なニーズに対応をしております。ITでのお悩みやトラブルに対して、柔軟性をもちつつ、的確なターゲットシューティングを実施。様々なソリューション提案を行い、支援を行っています。
    </div><hr>
    <div class="image-container">
      <div class=" side-by-side-image1">
        <h1 class=" centered-title">TSS</h1>
        <h4 class=" centered-title1">TSS事業</h4>
        クライアントが求める技術リクエストに対し、的確なリソースを迅速にご用意いたします。その上で、ただのマッチングビジネススタイルではなく、弊社の掲げる「共創」の理念を背景に、お客様目線に立ったスタンスでの新しいSESのカタチを模索しながらサービス提供をさせていただいております。業務を生み出すその場所から我々の支援は始まります。
      </div>
      <img src="@/assets/imgs/1.png" alt="First Image" class=" animate__animated animate__backInRight" :class="{ 'fade-in': items[1].isInViewport }">
    </div>
    <div class="image-container">
      <img src="@/assets/imgs/2.png" alt="First Image" class=" animate__animated animate__backInLeft":class="{ 'fade-in': items[1].isInViewport }">
      <div class="side-by-side-image1">
        <h1 class="centered-title">SIbusiness</h1>
        <h4 class="centered-title1">ワンストップソリューション事業（SI事業）</h4>
        DX化や業務の効率化など、お客様からITにまつわるご要望や課題をしっかりと伺い、最適な技術をもって、問題解決のための提案、設計・開発から評価・検証、運用・保守に至るまでワンストップで対応。事業規模、内容に応じて求められたニーズに対し的確に対応し、どんな些細な内容であっても誠意をもって必ずお応えすることをお約束いたします。
      </div>
    </div>
    <div class="image-container">
      <div class="side-by-side-image1">
        <h1 class="tittle1">Human</h1>
        <h1 class="tittle1">resource</h1>
        <h1 class="tittle1">development</h1>
        <h4 class="centered-title1">人材育成支援</h4>
        育てることが難しいと言われるITエンジニア育成ですが、弊社では創業以来長きにわたって未経験者を広く受け入れ、育成を行い、お客様のリクエストに対して適切に対応できるエンジニアを多数輩出し、世に送りだしてきました。そこで得たナレッジ、ノウハウをもとに各企業様のニーズにあった人材育成制度の確立支援や実際に新人エンジニアの育成を請け負うことなど、育成面でも対応をしています。技術だけでなく「人」に注力したS.E.Cだからこその人材育成支援を行います。
      </div>
      <img src="@/assets/imgs/3.png" alt="First Image" class=" animate__animated animate__backInRight" :class="{ 'fade-in': items[1].isInViewport }">
    </div>
    <div class="name7">
      <h1 >私たちの「目指すところ」と、これからのT.S.S</h1><hr>
    </div>
    <div class="name8">
      我々がこれからの先に見据える未来には、クライアント様から求められる期待に応えていくことはもちろんのこと、それと同時に「S.E.Cでなければならない理由」を作っていくことが大切であると考えています。
      「強固なアライアンス関係」
      言葉で見るとありきたりですが、単なるビジネスパートナーではなく「相手の目線」に立ち、技術貢献だけにとどまらず、一緒に考え、一緒に悩み、一緒に笑顔になることができること。本当の意味で必要なものを提供できる組織であることが求められ、その場所にたどり着くのは決して簡単ではないと思います。
      「T.S.Sでよかった」「T.S.Sじゃなきゃダメだ」その一言のためにも、さらなる企業成長が急務であると考えています。
      2020年現在、おおよそ60名という体制の現在の企業規模を2025年には100名体制に、そして事業特性として「5つ強み」を確立し明確な企業ビジョンをもって次のステージへと進んでまいります。これからのS.E.Cにご期待いただきたいと思います。そして我々はその期待にしっかりと応えていきたいと思っています。
    </div>
    <img src="@/assets/imgs/4.png" alt="First Image" class=" animate__animated animate__backInLeft" :class="{ 'fade-in': items[1].isInViewport }">
    <img src="@/assets/imgs/5.png" alt="First Image" class=" animate__animated animate__backInLeft" :class="{ 'fade-in': items[1].isInViewport }">
    <div class="bottomback"></div>
  </div>
</template>
<script>
import 'animate.css'; // 导入Animate.css库
export default {
  data() {
    return {
      items: [
        { element: null, isInViewport: false }, // Add element property
        { element: null, isInViewport: false }, // Add element property
        // Add more items here
      ],
      observer: null // Intersection Observer instance
    };
  },
  created() {
    // Add a scroll event listener
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    // Options for Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5 // 50% of the element must be visible for the callback to trigger
    };

    // Create Intersection Observer instance
    this.observer = new IntersectionObserver(this.handleIntersection, options);

    // Assign elements to their respective items
    this.items[0].element = this.$refs.image1;
    this.items[1].element = this.$refs.image2;
    // Assign other elements to their respective items

    // Start observing each item's element
    this.items.forEach(item => {
      if (item.element) {
        this.observer.observe(item.element);
      }
    });
  },
  beforeDestroy() {
    // Disconnect Intersection Observer and remove scroll event listener
    if (this.observer) {
      this.observer.disconnect();
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        const targetItem = this.items.find(item => item.element === entry.target);
        if (targetItem) {
          targetItem.isInViewport = entry.isIntersecting;
        }
      });
    },
    handleScroll() {
      this.items.forEach(item => {
        if (item.element) {
          const rect = item.element.getBoundingClientRect();
          item.isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        }
      });
    }
  }
};
</script>
<style>
.tittle1{
  text-align: center; /* 居中对齐文本 */
  line-height: 50px;
}
.name1{
  width: 1000px;
  margin-left: -170px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}
.topback{
  width: 2100px;
  height: 450px;
  background-color: orange;
  margin-left: -540px;
  margin-top: -50px;
}
.image-container {
  margin-top: 50px;
  width: 1000px;
  height: 500px;
  display: flex; /* 使用flex布局 */
  justify-content: space-between; /* 在容器内均匀分布 */

}
.image-container001{
  margin-top: -250px;
  width: 1000px;
  height: 500px;
  display: flex; /* 使用flex布局 */
  justify-content: space-between; /* 在容器内均匀分布 */
}
.side-by-side-image1{
  width: 50%;
  background-color: orange;
}
.boxone{
  width: 50%;
  background-color: whitesmoke;
}
.side-by-side-image2{
  width: 50%; /* 每个图片占据容器的一半宽度 */
  max-width: 100%; /* 限制图片的最大宽度为容器宽度的50% */
  height: auto; /* 保持图片的纵横比 */
}
.centered-title {
  text-align: center; /* 居中对齐文本 */
  margin-top: 160px;
}
.animate__animated animate__backInRight centered-title{
  text-align: center; /* 居中对齐文本 */
  margin-top: 160px;
}
.animate__animated animate__backInRight centered-title1{
  text-align: center; /* 居中对齐文本 */
}
.centered-title1 {
  text-align: center; /* 居中对齐文本 */
}
.animate__animated animate__fadeInDownBig name2{
  text-align: center;
}
.name3{
  width: 1000px;
  height: 300px;

  text-align: center;
  line-height: 40px;

}
.name5{
  margin-top: 50px;
  text-align: center;
  }
.name6{
  margin-top: 50px;
  height: 150px;

}
.name11{
  margin-top: 50px;
  height: 80px;
  text-align: center;
}
.name7{
  height: 150px;
  text-align: center;
  margin-top: 100px;
}
.name8{
  width: 1000px;
  height: 300px;
  text-align: center;

  line-height: 40px;
}
.animate__animated {
  animation-duration: 1s; /* 调整动画持续时间 */
}

.animate__backInRight {
  opacity: 0; /* 初始时隐藏内容 */
  animation-name: backInRight; /* 使用Animate.css提供的动画名称 */
}

.animate__backInLeft {
  opacity: 0; /* 初始时隐藏内容 */
  animation-name: backInLeft; /* 使用Animate.css提供的动画名称 */
}

.fade-in {
  opacity: 1; /* Show when in viewport */
  transition: opacity 0.5s ease-in-out; /* Add smooth transition */
  /* Add other animation styles as needed */
}

/* 使用Animate.css提供的动画定义 */
@keyframes backInRight {
  from {
    transform: translateX(200px); /* 定义初始位置 */
    opacity: 0; /* 定义初始透明度 */
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes backInLeft {
  from {
    transform: translateX(-200px); /* 定义初始位置 */
    opacity: 0; /* 定义初始透明度 */
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.bottomback{
  width: 2100px;
  height: 450px;
  background-color: orange;
  margin-left: -540px;
  margin-top: -300px;
}

</style>
