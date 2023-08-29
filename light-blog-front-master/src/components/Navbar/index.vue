<template>
  <nav
    ref = "nav"
    class="navbar navbar-expand-lg navbar-light fixed-top"
    style="background-color: rgb(255,255,255); ; z-index: 999">
    <div class="container">
      <div>
        <a class="navbar-brand" href="" style="color: #ea6f5a; font-weight: bold">
          <img :src="require('@/assets/imgs/34c34f49-8927-47ed-b140-32650f0d55c7.png')" alt="11" style="width: 50px; height: 50px;">
          東進ソリューションズ㍿
          </a>
      <button class="navbar-toggler" style="outline: none" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"/>
      </button>
      </div>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto text-center">
          <li :class="{active: currPage === 'home'}" class="nav-item">
            <router-link to="/home" class="nav-link" tag="div">ホーム</router-link>
          </li>
          <li :class="{active: currPage === 'information'}" class="nav-item">
            <router-link to="/information" class="nav-link" tag="div">会社案内</router-link>
          </li>
          <li :class="{active: currPage === 'business'}" class="nav-item">
            <router-link to="/business" class="nav-link" tag="div">事業内容</router-link>
          </li>
          <li :class="{active: currPage === 'contactUs'}" class="nav-item">
            <router-link to="/contactUs" class="nav-link" tag="div">お問い合わせ</router-link>
          </li>
          <li :class="{active: currPage === 'privacyPolicy'}" class="nav-item">
            <router-link to="/privacyPolicy" class="nav-link" tag="div">個人情報保護について</router-link>
          </li>
          <li :class="{active: currPage === 'informationPrivacyPolicy'}" class="nav-item">
            <router-link to="/informationPrivacyPolicy" class="nav-link" tag="div">情報管理保護方針</router-link>
          </li>
          <li :class="{active: currPage === 'about'}" class="nav-item">
            <router-link to="/about" class="nav-link" tag="div">About</router-link>
          </li>
        </ul>
        <!-- <div id="search" class="input-group col-lg-3">
          <input
            v-model="keyword"
            type="text"
            class="form-control"
            placeholder="Search for..."
            style="border-radius: 12px"
            @keyup.enter="handleSearch">
          <span class="input-group-btn">
            <a
              class="btn btn-secondary"
              style="z-index: 100;position: absolute; top: 0; right: 15px; background-color: #ea6f5a; color: #ffffff; border-color: #ea6f5a; border-top-right-radius: 12px; border-bottom-right-radius: 12px; cursor: pointer"
              @click="handleSearch">
              <i class="iconfont icon-search"/>
            </a>
          </span>
        </div> -->
      </div>
    </div>
  </nav>

  
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  computed: {
    currPage() {
      return this.$root.state.currPage;
    }
  }
  // ,
  // methods: {
  //   handleSearch() {
  //     if (this.currPage !== "home") this.$router.push("/home");
  //     const state = this.$root.state.blogListState; // 通过该变量防止先按关键字搜索后按关键词搜索，然后又按相同关键字搜索时页面不刷新问题
  //     if (state !== 2 && state !== -2) {
  //       // 如果前面不是按关键字搜索的话
  //       this.$root.state.keyword = this.keyword;
  //       this.$root.state.blogListState = 2;
  //     } else if (this.keyword !== this.$root.state.keyword) {
  //       // 如果前面是按关键字搜索的且现在关键字改变了，通过置反blogListState触发computed
  //       this.$root.state.blogListState = -state;
  //       this.$root.state.keyword = this.keyword;
  //     }
  //   }
  // }
}
</script>

<style scoped>
.form-control:focus {
  border-color: #ea6f5a;
  box-shadow: 0 0 10px rgba(234, 111, 90, 0.4);
  border-radius: 5px;
}

.nav-link {
  color:white !important;
}

.nav-link:hover {
  cursor: pointer;
}

.active .nav-link {
  color: #ea6f5a !important;
}

.active .nav-link:hover {
  cursor:auto;
}

a:hover {
  text-decoration: none;
}

.container {
  background-color: #91C944;
  border-radius: 30px;
}
</style>
