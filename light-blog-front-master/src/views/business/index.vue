<template>
  <div class="container" style="background-color: transparent">
    <div class="row blog-wrapper">
      <div class="article-wrapper">
        <lb-article :blog-id="blogId"/>
      </div>
      <div class="comment-box-wrapper">
        <lb-comment-box :blog-id="blogId"/>
      </div>
      <div class="comment-wrapper">
        <lb-comment :blog-id="blogId"/>
      </div>
    </div>
    <lb-footer/>
  </div>
</template>

<script>
import 'animate.css';
import { Scrollama } from 'vue-scrollama';
import article from "./components/Article";
import comment from "./components/Comment";
import commentBox from "./components/CommentBox";
import footer from "./components/Footer";

export default {
  components: {
    lbArticle: article,
    lbComment: comment,
    lbCommentBox: commentBox,
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
    this.$root.state.currPage = "business";
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 72px;
  height: 100vh;
  background-color: transparent;

  @media (min-width: 960px) {
    .blog-wrapper {
      margin: 0 auto;
      padding: 40px 20px 20px 20px;
      max-width: 720px;
      width: 90%;
      background-color: transparent;
    }
  }
 

}
</style>
