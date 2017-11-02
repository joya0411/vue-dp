<template>
  <div class="home-category">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <ul>
          <router-link tag="li" to="/search/meishi">
            <img src="./images/meishi.png" class="carousel-icon">
            <div class="carousel-name">美食</div>
          </router-link>
          <router-link tag="li" to="/search/maoyan">
            <img src="./images/dp_wx_maoyan_icon.png" class="carousel-icon">
            <div class="carousel-name">猫眼电影</div>
          </router-link>
          <router-link tag="li" to="/search/jiudian">
            <img src="./images/jiudian.png" class="carousel-icon">
            <div class="carousel-name">酒店</div>
          </router-link>
          <router-link tag="li" to="/search/xiuxianyule">
            <img src="./images/xiuxianyule.png" class="carousel-icon">
            <div class="carousel-name">休闲娱乐</div>
          </router-link>
          <router-link tag="li" to="/search/waimai">
            <img src="./images/waimai.png" class="carousel-icon">
            <div class="carousel-name">外卖</div>
          </router-link>
          <router-link tag="li" to="/search/huoguo">
            <img src="./images/huoguo.png" class="carousel-icon">
            <div class="carousel-name">火锅</div>
          </router-link>
          <router-link tag="li" to="/search/liren">
            <img src="./images/liren.png" class="carousel-icon">
            <div class="carousel-name">丽人</div>
          </router-link>
          <router-link tag="li" to="/search/zhoubianyou">
            <img src="./images/zhoubianyou.png" class="carousel-icon">
            <div class="carousel-name">周边游</div>
          </router-link>
          <router-link tag="li" to="/search/ktv">
            <img src="./images/ktv.png" class="carousel-icon">
            <div class="carousel-name">KTV</div>
          </router-link>
          <router-link tag="li" to="/search/jiehun">
            <img src="./images/jiehun.png" class="carousel-icon">
            <div class="carousel-name">婚纱摄影</div>
          </router-link>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <router-link tag="li" to="/search/community_new">
            <img src="./images/community_new.png" class="carousel-icon">
            <div class="carousel-name">生活服务</div>
          </router-link>
          <router-link tag="li" to="/search/jingguan">
            <img src="./images/jingguan.png" class="carousel-icon">
            <div class="carousel-name">景点</div>
          </router-link>
          <router-link tag="li" to="/search/aiche">
            <img src="./images/aiche.png" class="carousel-icon">
            <div class="carousel-name">爱车</div>
          </router-link>
          <router-link tag="li" to="/search/jianshen">
            <img src="./images/jianshen.png" class="carousel-icon">
            <div class="carousel-name">运动健身</div>
          </router-link>
          <router-link tag="li" to="/search/icongouwu135">
            <img src="./images/icongouwu135.png" class="carousel-icon">
            <div class="carousel-name">购物</div>
          </router-link>
          <router-link tag="li" to="/search/qinzi">
            <img src="./images/qinzi.png" class="carousel-icon">
            <div class="carousel-name">亲子</div>
          </router-link>
          <router-link tag="li" to="/search/zhuangxiu">
            <img src="./images/zhuangxiu.png" class="carousel-icon">
            <div class="carousel-name">家装</div>
          </router-link>
          <router-link tag="li" to="/search/jxpx">
            <img src="./images/jxpx.png" class="carousel-icon">
            <div class="carousel-name">学习培训</div>
          </router-link>
          <router-link tag="li" to="/search/yiliao">
            <img src="./images/yiliao.png" class="carousel-icon">
            <div class="carousel-name">医疗健康</div>
          </router-link>
          <router-link tag="li" to="/search/daojia">
            <img src="./images/daojia.png" class="carousel-icon">
            <div class="carousel-name">到家</div>
          </router-link>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <router-link tag="li" to="/search/xiaochikuaican">
            <img src="./images/xiaochikuaican.png" class="carousel-icon">
            <div class="carousel-name">小吃快餐</div>
          </router-link>
          <router-link tag="li" to="/search/zizhucan">
            <img src="./images/zizhucan.png" class="carousel-icon">
            <div class="carousel-name">自助餐</div>
          </router-link>
          <router-link tag="li" to="/search/rihanliaoli">
            <img src="./images/rihanliaoli.png" class="carousel-icon">
            <div class="carousel-name">日本菜</div>
          </router-link>
          <router-link tag="li" to="/search/meifa">
            <img src="./images/meifa.png" class="carousel-icon">
            <div class="carousel-name">美发</div>
          </router-link>
          <router-link tag="li" to="/search/meijia">
            <img src="./images/meijia.png" class="carousel-icon">
            <div class="carousel-name">美甲美睫</div>
          </router-link>
          <router-link tag="li" to="/search/meirong">
            <img src="./images/meirong.png" class="carousel-icon">
            <div class="carousel-name">美容SPA</div>
          </router-link>
          <router-link tag="li" to="/search/shoushen">
            <img src="./images/shoushen.png" class="carousel-icon">
            <div class="carousel-name">瘦身纤体</div>
          </router-link>
          <router-link tag="li" to="/search/qinzisheying">
            <img src="./images/qinzisheying.png" class="carousel-icon">
            <div class="carousel-name">亲子摄影</div>
          </router-link>
          <router-link tag="li" to="/search/qinziyoule">
            <img src="./images/qinziyoule.png" class="carousel-icon">
            <div class="carousel-name">亲子游乐</div>
          </router-link>
          <router-link tag="li" to="/search/more">
            <img src="./images/more.png" class="carousel-icon">
            <div class="carousel-name">全部分类</div>
          </router-link>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="sass">
.home-category {
    position: relative;
    .swiper-container {
      padding-bottom:20px;
    }
    .swiper-slide {
      padding:10px 0;
      ul {
        display:flex;
        flex-wrap:wrap;
        li {
          width:20%;
          padding:5px 0;
          .carousel-icon {
              display: block;
              width:36px;
              height:36px;
              margin:0 auto;
          }
          .carousel-name {
              text-align: center;
              font-size:12px;
              color:#333;
              margin-top:5px;
          }
        }
      }

    }
}
</style>