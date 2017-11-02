<template>
  <div class="home-ad">
    <h2 class="f-clearfix">
        <span class="titBest f-fl">{{title}}</span>
        <div class="more f-fr">更多优惠</div>
        <div class="arrowRight"></div>
    </h2>
    <ul>
      <li v-for="item in data" key="item.dgId">
        <a>
          <div class="picWrap">
            <img class="pic" v-lazy="item.imageUrl">
          </div>
          <div class="title">{{item.shortTitle}}</div>
          <div class="price">
              <ins class="price_current">{{item.price | int}}</ins>
              <del class="price_old" v-show="cate==='czth'">{{item.markPrice | int}}</del>
              <ins class="price_down" v-show="cate==='ttlj'">
                {{item.tag}}
              </ins>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      cate: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: []
      }
    },
    filters: {
      int: function(value) {
        return parseInt(value)
      }
    }
  }
</script>
<style scoped lang="sass">
.home-ad {
	padding:10px 15px;
    h2 {
      position:relative;
      margin-bottom:.5rem;
      >span {
        height:1.6rem;
        line-height:1.6rem;
        font-size:1.0rem;
      }
      .titBest {
        color:#ff524b;
      }
      .titSub {
        color:#ff7800;
      }
      .more {
        font-size:12px;
        padding-right:0.9rem;
        color:#bbb;
        line-height:1.6rem;
      }
      .arrowRight {
        position:absolute;
        top:0;
        right:0;
        top:50%;
        width:0.4rem;
        height:0.4rem;
        border:0.1rem solid #bbb;
        border-bottom:0;
        border-left:0;
        transform:translate(0,-50%) rotate(45deg);
      }
    }
    ul {
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      li {
        width:33.33%;
        padding:0 0.25rem;
        box-sizing:border-box;
        .title {
          color: #333;
          font-size: 14px;
          padding-top: 3px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .picWrap {
          position:relative;
          &:after {
            content:'';
            padding-top:74.77%;
            display:block;
          }
        }
        .pic {
          position:absolute;
          top:0;
          width:100%;
        }
        .price {
          line-height: 16px;
          height: 16px;
          font-size: 0;
          padding-top: 5px;
          position: relative;
          .price_current {
            color: #f63;
            text-decoration: none;
            font-size: 20px;
            &:before {
              content:'￥';
              font-size:12px;
            }
          }
          .price_old {
            color: #999;
            font-size: 12px;
            margin-left: 2px;
            &:before {
              content:"￥"
            }
          }
          .price_down {
            padding: 1px 6px 1px 3px;
            border-radius: 2px;
            color: #f63;
            text-decoration: none;
            font-size: 12px;
            border: 1px solid #ff9470;
            position: absolute;
            top: 4px;
            max-width: 50px;
            -webkit-transform: scale(.75);
            transform: scale(.75);
            margin-left: -3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width:63px;
          }
        }
      }
    }
}
</style>