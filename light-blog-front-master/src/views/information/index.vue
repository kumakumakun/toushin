<template>
  <div class="container" style="background-color: transparent">
    <div class="">
      <div class="introduction-wrapper">
        <lb-introduction :blog-id="blogId"/>
      </div>
      <div class="article-wrapper">
        <lb-article :blog-id="blogId"/>
      </div>
      <div class="map-wrapper">
        <lb-googlemap :blog-id="blogId"/>
      </div>
    </div>
    <lb-footer/>
  </div>
</template>

<script>
import article from './components/Article';
import map from './components/Googlemap';
import footer from './components/Footer';

import introduction from './components/Introduction';
export default {
  components: {
    lbIntroduction: introduction,
    lbArticle: article,
    lbGooglemap: map,
    lbFooter: footer
  },
  props: {
    blogId: {
      type: Number,
      default: process.env.ABOUT_ID
    }
  },
    created() {
    // created 钩子用于设置页面状态。
    this.$root.state.currPage = "information";
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 100px;
  height: 200vh;
  .article-wrapper {
    width: 100%;
    margin-bottom: 0px;
  }
}
</style>
