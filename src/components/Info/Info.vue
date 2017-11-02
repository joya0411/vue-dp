<template>
  <div class="detail-info-wrap">
      <div class="info-container">
          <div class="info-img f-fl">
              <img :src="data.img">
          </div>
          <div class="info-content">
              <h3>{{data.title}}</h3>
              <div class="star-container">
                  <star :star="data.star"></star>
                  <span class="price">￥{{data.price}}</span>
              </div>
              <div class="subtitle">{{data.subTitle}}</div>
          </div>
      </div>
      <p class="info-desc" v-html="data.desc"></p>
  </div>
</template>

<script>
  import Star from 'base/Star/Star'

  export default {
    props: {
      data: {
        type: Object,
        default: null
      }
    },
    components: {
      Star
    }
  }
</script>

<style scoped lang="sass">
.detail-info-wrap {
    padding:10px 15px;
    .info-container {
        position: relative;
        padding-bottom:10px;
        overflow: hidden;
        &:after {
            content: '';
            position: absolute;
            left:0;
            right: 0;
            bottom: 0;
            border:1px solid #f1f1f1;
            transform:scaleY(.5);
        }        
        .info-img {
            width:6.5rem;
            margin-right:.5rem;
            img {
                display: block;
                width:100%;
            }
        }

        .info-content {
            margin-left:7rem;
            h3 {
                font-size:1rem;
                color:#333;
            }
            .star-container {
                padding:.5rem 0;
                font-size:0;
                >* {
                    display: inline-block;
                }
                .price {
                    color:#999;
                    line-height: 1.5;
                    font-size:.7rem;
                    margin-left:1rem;
                }
            }
            .subtitle {
                color:#999;
                line-height: 1.5;
                font-size:.7rem;
            }
        }
    }
    .info-desc {
        padding-top:10px;
        color:#999;
        line-height: 1.5;
        font-size:.7rem;
    }
}
</style>