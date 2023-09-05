<template>
  <div id="app" class="page-full-screen">
    <lb-navbar  style=" shadow: always;"/>
    <lb-back-to-top/>
    <router-view/>
    
  </div>
</template>

<script>
// 导入导航栏组件
import navbar from '@/components/Navbar'
import backToTop from '@/components/BackToTop'

export default {
  name: 'App',
  components: {
    lbNavbar: navbar,
    lbBackToTop: backToTop
  },
};
</script>

<style>
  .page-full-screen{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #25a0b6a9;
    height: 100%;
    overflow-y: auto;
  }
</style>
