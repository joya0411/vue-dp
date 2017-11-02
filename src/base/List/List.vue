<template>
  <div class="list-container">
    <div class="list-item" v-for="item in data" key="item.shopId" @click="clickHandle(item)">
      <div class="item-img">
        <img v-lazy="item.defaultPic">
      </div>
      <div class="item-content">
        <div class="item-content-tit f-clearfix">
          <h3 class="tit f-fl">{{item.shopName}}</h3>
          <span class="distance f-fr">{{item.distance}}</span>
        </div>
        <p class="item-content-subTitle">{{item.distance}}</p>
        <div class="item-content-price f-clearfix">
          <span class="price f-fl">{{item.dealgroupPrice}}</span>
          <span class="num f-fr">{{item.salesdesc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    clickHandle(item) {
      let cate = this.$route.params.cate
      let path = cate ? `${cate}/detail/${item.shopId}` : `detail/${item.shopId}`
      this.$router.push(path)
    }
  }
}
</script>
<style lang="sass">
  .list-container {
    padding:0 15px;
  }
  .list-item {
    position:relative;
    padding:0.5rem 0;
    font-size:0;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    &:after {
      content:'';
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      border:1px solid #f1f1f1;
      transform:scaleY(.5);
    }
    .item-img {
      width:6.0rem;
      height:4.5rem;
      img {
        width:100%;
        height:100%;
        display:block;
      }
    }
    .item-content{
      flex:1;
      padding-left:10px;
    }
    .item-content-tit {
      .tit {
        font-size:0.9rem;
        line-height:1;
        color:#333;
      }
      .distance {
        font-size:0.65rem;
        line-height:0.9rem;
        color:#999;
      }
    }
    .item-content-subTitle {
      font-size:0.7rem;
      color:#666;
      line-height:1.5;
      padding:0.6rem 0;
    }
    .item-content-price {
      .price {
        font-size:0.9rem;
          line-height: 1;
          font-weight:border;
          color: #e9203d;
          &:before {
          content:'￥';
          display:inline;
          font-size:0.9rem;
            line-height: 1;
            font-weight:border;
            color: #e9203d;
          }
      }
      .num {
        font-size:0.65rem;
        line-height:0.9rem;
        color:#999;
      }
    }
  }
</style>