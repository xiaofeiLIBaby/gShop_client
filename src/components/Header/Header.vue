<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header //头部公共css
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 30%
      color #fff
      font-size 22px
      text-align center
      .header_title_text
        font-size: 20px;
        color: #fff;
        display: block;
      .ellipsis
        overflow: hidden
        text-overflow ellipsis
        white-space nowrap
</style>
