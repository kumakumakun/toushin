<template>
  <footer>
    <div>
      <p>© 2023 (C) 東進ソリューションズ株式会社 All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  /* 使用了两个 @media 查询，分别用于大屏幕和小屏幕情况下的样式。 */
  /* 大屏幕，当屏幕宽度大于等于 960 像素时，footer 的背景颜色将为白色。
  div 内部的文本将居中显示。
  p 元素的文字颜色为灰色（#c8c8c8），字体大小为 1rem，上下边距分别为 1rem。
  */
  @media (min-width: 960px) {
    footer {
      background-color: transparent;
      color: white;
      div {
        text-align: center;

        p {
          color: white;
          font-size: 1rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
  }

  /* 小屏幕 */
  @media (max-width: 960px) {
    footer {
      background-color: white;

      div {
        text-align: center;

        p {
          color: #c8c8c8;
          font-size: 0.625rem;
          margin-top: 0.5em;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
</style>
