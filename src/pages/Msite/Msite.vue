<template>
  <div>
    <section class="msite">
      <!--首页头部-->
      <Header :title="address.name">
         <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
          </span>
        <span class="header_login" slot="right">
              <span class="header_login_text">登录|注册</span>
        </span>
      </Header>
      <!--首页导航-->
      <nav class="msite_nav" v-if="categorys.length">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(category,index) in categorys2" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(cate,index) in category" :key="index">
                <div class="food_container">
                  <img :src="imgUrl+cate.image_url">
                </div>
                <span>{{cate.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>

      <div v-else>
        <img src="./images/msite_back.svg" alt="">
      </div>
      <!--首页附近商家-->
      <ShopList/>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import ShopList from '../../components/ShopList/ShopList'
  import {mapState} from 'vuex'

  export default {
    data(){
      return {
        imgUrl:'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
    },
    computed: {
      ...mapState(['address', 'categorys']),
      categorys2(){
        let arr=[]
        let smallArr=[]
       this.categorys.forEach(function(categroy){
         if(smallArr.length===0){
           arr.push(smallArr)
         }
         smallArr.push(categroy)
         if(smallArr.length===8){
           smallArr=[]
         }
       })
        return arr
      }
    },
    components: {
      ShopList
    },
    watch:{
      categorys(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%

      .icon-sousuo
        font-size 25px
        color #fff

    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)

      .header_login_text
        color #fff

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774


</style>
