<template>
  <div id="article" class="article">
    <!-- <h1 id="title" class="title"> {{ blog.title }}</h1>
    <div v-if="blog.typeName !== '原创' && blog.originalUrl" class="origin-wrapper">
      <a v-if="blog.typeName === '转载'" :href="blog.originalUrl" target="_blank" class="origin">转自{{ blog.originalUrl }}</a>
      <a v-if="blog.typeName === '翻译'" :href="blog.originalUrl" target="_blank" class="origin">译自{{ blog.originalUrl }}</a>
    </div>
    <div class="content markdown-body" v-html="content"/>
    <div class="copyright"><i class="fa fa-copyright"/>欢迎转载，请注明出处</div>
    <div style="text-align: center; margin-top: 40px">
      <button id="like-btn" class="btn btn-like" @click="addLike">喜欢 {{ blog.likeCount }}</button>
    </div> -->
    <div class="card">
      <div class="card-image">
        <img src="../../../assets/imgs/9892d9b9d203646dd7ec82f9b403fdb6_1.jpg" alt="" class="card-image_image">
        <!-- 请求后端访问数据库获取图片地址 -->
        <!-- <img src="imageSrc" alt="" class="card-image_image"> -->
      </div>
      <div class="card-titles"><p class="card-titles-text">お問い合わせ</p></div>
    </div>
    <div class="bb">弊社サービスへのお問い合わせは以下のフォームよりお願いいたします。弊社より折り返しご連絡させていただきます。</div>
      <div class="aa">＊印は必須項目です。</div>
      
      <!-- 表单元素
      <input v-model="formData.name" type="text" placeholder="Name">
      <input v-model="formData.email" type="email" placeholder="Email">
      <textarea v-model="formData.message" placeholder="Message"></textarea>
      <button type="submit">Submit</button> -->
    
    <form @submit="onSubmit">
    <div class="form-content__row">
      <div class="form-content__label">お名前 <span class="hp_orange">*</span></div>
      <div class="form-content__input--double">
      <input v-model="formData.familyName" type="text" name="family-name" class="input--double" size="60" value="" placeholder="姓">
      <!-- <span v-if="errors.familyName || errors.lastName" class="error">{{ errors.familyName || errors.lastName }}</span> -->
      <input v-model="formData.lastName" type="text" name="last-name" class="input--double" size="60" value="" placeholder="名">
      <span class="error">未入力です。</span>
      </div>
    </div>

    <div class="form-content__row">
      <div class="form-content__label">お名前（ふりがな）
        <span class="hp_orange">*</span>
      </div>
      <div class="form-content__input--double">
        <input v-model="formData.familyNameFuri" type="text" name="family-name-furi" class="input--double" size="60" value="" placeholder="せい">
        <input v-model="formData.lastNameFuri" type="text" name="last-name-furi" class="input--double" size="60" value="" placeholder="めい">
      </div>
    </div>

    <div class="form-content__row">
      <div class="form-content__label">メールアドレス <span class="hp_orange">*</span></div>
      <div class="form-content__input">
        <input v-model="formData.email"  type="email" name="email" class="input" size="60" value="" placeholder="例）xx@example.com">
      </div>
    </div>

    <div class="form-content__row">
      <div class="form-content__label">TEL</div>
        <div class="form-content__input--tri">
          <input type="number" name="tel-1" class="input--tri" value="" step="1" placeholder="例）000">
        <div class="hyphen">
          <input type="number" name="tel-2" class="input--tri" value="" step="1" placeholder="000">
        </div>
        <div class="hyphen">
          <input type="number" name="tel-3" class="input--tri" value="" step="1" placeholder="000">
        </div>
      </div>
    </div>

    <div class="form-content__row">
      <div class="form-content__label">会社名</div>
      <div class="form-content__input">
        <input type="text" name="company-name" class="input" size="60" value="" placeholder="例）〇〇株式会社">
      </div>
    </div>

    <div class="form-content__row form-content__row--textarea">
      <div class="form-content__label form-content__label--textarea">お問い合わせ内容 <span class="hp_orange">*</span></div>
      <div class="form-content__input">
        <textarea name="content" class="input--area" cols="50" rows="5" placeholder="例）お問い合わせ内容をご記入ください"></textarea>
        <span class="error">未入力です。</span>
      </div>
    </div>

    <div class="word-document">
      <div class="document-content" v-html="formattedContent"></div>
    </div>

    
      <div class="form-content__row">
        <div class="form-content__input">
          <input type="checkbox" v-model="formData.agree" required>
          上記「個人情報の取扱い」に同意します
        </div>
      </div>

    <button type="submit"><p class="send-btn__text">送信する</p></button>
    </form>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "@/assets/styles/github-md.css";
import { fetchBlog, addBlogLike, addBlogClick } from "@/api/blog";
import axios from "axios";
import mammoth from "mammoth"; // Import mammoth.js library

export default {
  // mounted() {
  //   this.fetchImageUrl(); // 组件加载时获取图片地址
  // },
  props: {
    blogId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      formData: {
        familyName: "",
        lastName: "",
        familyNameFuri: "",
        lastNameFuri: "",
        email: "",
        message: "",
        agree: false // 添加一个字段来表示是否同意
      },
      blog: {
        id: "",
        title: "",
        summary: "",
        createDate: "",
        updateDate: "",
        clickCount: "",
        commentCount: "",
        likeCount: "",
        tag: "",
        blogImage: "",
        originalUrl: "",
        content: "",
        typeName: ""
      },
      content: "",
      cookieKey: "LIKE_BLOG_" + this.blogId,
      wordContent: "",
      formattedContent: ""
      // imageSrc: "" // 初始化图片地址
    };
  },
  watch: {
    blogId() {
      this.fetchData();
    }
  },
  created() {
    // Fetch Word document content from backend
    this.fetchWordDocument();
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
    });
    this.fetchData();
    this.addClick() // 添加点击数
  },
  methods: {
    // 请求后端访问数据库获取图片地址
    // fetchImageUrl() {
    //   fetch("/api/getContactImageUrl")
    //     .then(response => response.text())
    //     .then(imageUrl => {
    //       this.imageSrc = imageUrl; // 将获取到的图片地址设置给 imageSrc
    //     })
    //     .catch(error => {
    //       console.error("Error:无法加载到图片地址", error);
    //     });
    // },

    // 从后端获取表单
    fetchWordDocument() {
      axios.get("/api/get-word-document").then(response => {
        this.wordContent = response.data;
        this.formatWordContent();
      });
    },
    formatWordContent() {
      // Use mammoth.js to convert Word document to HTML
      // 使用 mammoth.js 将 Word 文档转换为 HTML
      mammoth.convertToHtml({ arrayBuffer: this.wordContent })
        .then(result => {
          this.formattedContent = result.value;
        })
        .catch(error => {
          console.error("Error formatting Word content:", error);
        });
    },

    //表单提交
    onSubmit(event) {
      if (!this.formData.agree) {
        alert('您必须同意上記内容才能提交表单。');
        event.preventDefault(); // 阻止表单提交
        return;
        }
      
      // 校验其他必填字段是否已经填写
      const requiredFields = ["familyName", "lastName", "email", "content"];
      const fieldNames = {
        familyName: "お名前",
        lastName: "お名前",
        email: "メールアドレス",
        content: "お問い合わせ内容"
      };
      let hasErrors = false;
      requiredFields.forEach(field => {
        if (!this.formData[field]) {
          this.errors[field] = `${fieldNames[field]}は必須です。`;
          hasErrors = true;
        } else {
          this.errors[field] = "";
        }
      });

      // 验证姓名字段是否为中国汉字和日本汉字
      const nameRegex = /^[\u4e00-\u9fa5\u3005\u3400-\u4DBF\u4E00-\u9FFF\u3400-\u4DBF]+$/;
      if (!nameRegex.test(this.formData.familyName)) {
        this.errors.familyName = "姓は中文汉字と日本漢字で入力してください。";
        hasErrors = true;
      }
      if (!nameRegex.test(this.formData.lastName)) {
        this.errors.lastName = "名は中文汉字と日本漢字で入力してください。";
        hasErrors = true;
      }

      if (hasErrors) {
        event.preventDefault(); // 阻止表单提交
      } else {
          // 在这里处理表单提交逻辑
          console.log("Form submitted:", this.formData);
          // 可以在这里发送表单数据到服务器等操作
          // 发送 POST 请求到服务器
          // 将表单数据转换为 JSON 字符串
          const jsonData = JSON.stringify(this.formData);
          // 发送 POST 请求到服务器，设置请求头为 JSON
          axios.post("/api/contactForm", jsonData, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            // 成功处理
            console.log("Form submitted:", response.data);
          })
          .catch(error => {
            // 处理错误
            console.error("Error submitting form:", error);
          });
        }
    },
    fetchData() {
      fetchBlog(this.blogId).then(response => {
        this.blog = response.data;
        this.content = marked(this.blog.content)
      })
    },
    addClick() {
      addBlogClick(this.blogId)
    },
    addLike() {
      if (Cookie.get(this.cookieKey)) return;
      addBlogLike(this.blogId).then(response => {
        this.blog.likeCount += 1;
        Cookie.set(this.cookieKey, 1)
      })
    }
  }
}
</script>

<style lang="scss">

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.word-document {
  display: flex;
  border: 1px solid #ccc;
  height: 400px; /* Fixed height with scrollbar */
  overflow: hidden; /* Hide overflow beyond the container */
}

.document-content {
  flex: 1;
  overflow: auto; /* Enable scrollbar when content exceeds container height */
  padding: 10px;
}

.bb {
  text-align: center;
  margin-top: 50px;
  display: block;
  font-size: 12.5px;
}

.aa {
  text-align: center; /* 水平居中文本 */
  line-height: 20px; /* 垂直居中文本 */
  margin-bottom: 20px;
  color: #f15d23;
  display: block;
  font-size: 12px;
}

.card-titles {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* 背景颜色 */
}

.card-titles-text {
  color:#f15a24; /* 文本颜色 */
  font-family: Arial, sans-serif; /* 字体 */
  font-size: 35px; /* 字体大小 */
  font-weight: bold; /* 字体粗细 */
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f0f0f0; /* 背景颜色 */
  border-radius: 40px; /* 圆角半径 */
  overflow: hidden; /* 防止内部内容溢出 */
}

.card-image_image {
    width:100%;
    object-fit: cover;
    height: 100%;
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
    font-family: -apple-system, SF UI Display, Arial, PingFang SC,
      Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }

  .origin-wrapper {
    float: right;

    .origin {
      font-size: 0.75rem;
      font-weight: 500;
      color: #bcbcbc;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .content {
    word-wrap: break-word;
    word-break: normal;
    padding: 0;

    a:hover {
      color: #0366d6;
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
