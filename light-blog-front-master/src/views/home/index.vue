<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <!-- 左边一大块-->
      <div class="col-md-8">
        <!-- 首页图片轮播组件 -->
        <div class="carousel-wrapper">
          <lb-carousel/>
        </div>
        <!-- 文章列表模块 博客列表组件 -->
        <div class="blog-list-wrapper">
          <lb-blog-list/>
        </div>

      </div>

      <!-- Sidebar -->
      <div v-if="!isMobile" class="col-md-4">
        <!-- 博主信息 -->
        <div class="blogger-wrapper">
          <lb-blogger/>
        </div>
        <!-- 个人资料 -->
        <div class="profile-wrapper">
          <lb-profile/>
        </div>
        <!-- 博客标签 -->
        <div class="blog-tag-wrapper">
          <lb-blog-tag/>
        </div>
        <!-- 排序 -->
        <div class="sort-wrapper">
          <lb-sort/>
        </div>
        <!-- 项目 -->
        <div class="project-wrapper">
          <lb-project/>
        </div>
        <!-- 链接 -->
        <div class="link-wrapper">
          <lb-link/>
        </div>
      </div>
    </div>
    <figure><!-- eslint-disable-next-line -->
    <iframe width="800" height="400" style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.995494251402!2d139.78751831474594!3d35.677112937806214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188941df644af5%3A0xb812234df9b49e15!2z44CSMTM1LTAwMzEg5p2x5Lqs6YO95rGf5p2x5Yy65L2Q6LOA77yR5LiB55uu77yR77yR4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1623058470634!5m2!1sja!2sjp" allowfullscreen="allowfullscreen" loading="lazy"/>
    </figure>
    <lb-footer/>
  </div>
</template>
<!-- 在这里，你引入了多个子组件，并通过 components 属性注册它们，可以在模板中使用它们。-->
<script>
import carousel from './components/Carousel'
import blogList from './components/BlogList'
import blogTag from './components/BlogTag'
import blogger from './components/Blogger'
import profile from './components/Profile'
import link from './components/Link'
import sort from './components/Sort'
import project from './components/Project'
import footer from './components/Footer'

export default {
  components: {
    lbCarousel: carousel,
    lbBlogList: blogList,
    lbBlogger: blogger,
    lbProfile: profile,
    lbBlogTag: blogTag,
    lbSort: sort,
    lbLink: link,
    lbProject: project,
    lbFooter: footer
  },
  data() {
    return {
      // data 中定义了一个变量 isMobile，用于检测屏幕是否为移动设备。
      isMobile: false
    }
  },
  created() {
    // created 钩子用于设置页面状态。
    this.$root.state.currPage = 'home'
  },
  mounted() {
    // mounted 钩子中，你使用 window.matchMedia 检测屏幕宽度，判断是否为移动设备，并将结果赋给 isMobile 变量。
    this.isMobile = window.matchMedia('(max-width:768px)').matches
  }
}
</script>
<!-- 使用 SCSS 编写的样式，应用于组件内部。定义了容器样式，设置了顶部内边距和最小高度。为轮播组件的包裹元素添加了底部边距。-->
<!--scoped：这表示这段样式只会应用于当前组件的模板中，不会影响其他组件。这是通过将组件的选择器加上一个唯一的哈希值来实现的。-->
<style lang="scss" scoped>
// .container：这是一个选择器，它选中了组件内部的一个元素，具体来说，是一个类名为 container 的元素。这通常用于为元素添加样式。
.container {
  // 添加了顶部内边距（上边距），大小为 72 像素
  padding-top: 72px;
  // 选中的元素设置了最小高度为视口高度的 100%。这样可以确保即使页面内容较少时，页面也至少会占据整个视口高度。
  min-height: 100vh;

  // 首页图片轮播的样式
  .carousel-wrapper {
    // 其中的元素添加了底部外边距（下边距），大小为 1.2 个“rem”（一种相对于根元素字体大小的单位）。这可能是为了在这个容器元素的下方留出一些空白间隔。
    margin-bottom: 1.2rem;
  }
}
</style>
