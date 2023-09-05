<template>
    <div id="guide" class="guide">
      
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
  
      .title {
        word-break: break-word;
        margin: 20px 0 40px 0;
        font-size: 34px;
        text-align: center;
        font-weight: 700;
        line-height: 1.3;
        font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      }
  
      .origin-wrapper {
        float: right;
  
        .origin{
          font-size: 0.75rem;
          font-weight: 500;
          color: #bcbcbc;
  
          &:hover{
            text-decoration: none;
          }
  
        }
      }
  
      .content {
        word-wrap: break-word;
        word-break: normal;
        padding: 0;
  
        a:hover{
          color: #0366d6
        }
  
        img {
          max-width: 100%;
        }
  
      }
  
      .copyright {
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #c8c8c8;
        font-size: 12px;
      }
  
      .btn-like {
        padding: 8px 25px;
        font-size: 16px;
        color: #fff;
        background-color: #ea6f5a;
        border-radius: 20px;
        border: none;
  
        &:hover {
          color: #fff;
        }
  
        &:focus {
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
        }
  
      }
    }
  
  </style>
  