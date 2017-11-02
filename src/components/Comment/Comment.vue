<template>
  <div class="detail-comment-wrap">
    <h2>用户点评</h2>
    <div class="comment-list">
      <div class="comment-item" v-for="item in data" key="item.username">
          <h3>
              <i class="icon-user"></i>
              {{item.username}}
          </h3>
          <star :star="item.star"></star> 
          <p>{{item.comment}}</p>
      </div>
    </div>
    <loadMore :page="page" :isLoadingMore="isLoadingMore" @loadMoreAjax="loadMoreAjax" v-show="!hasMore"></loadMore>
  </div>
</template>
<script>
  import Star from 'base/Star/Star'
  import LoadMore from 'base/LoadMore/LoadMore'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      },
      page: {
        type: Number,
        default: 0
      },
      isLoadingMore: {
        type: Boolean,
        default: false
      },
      hasMore: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      loadMoreAjax() {
        this.$emit('loadMoreAjax')
      }
    },
    components: {
      Star,
      LoadMore
    }
  }
</script>
<style scoped lang="scss">
.detail-comment-wrap h2 {
  position: relative;
  font-size: .9rem;
  padding: 10px 15px;
}
.comment-list {
    padding:0 15px;
}
.comment-item {
    position: relative;
    padding:10px 0;
    &:before {
        content:'';
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        border-bottom:1px solid #f1f1f1;
        transform:scaleY(.5);
    }
    h3 {
        font-size:.8rem;
        line-height: 1.5;
        color:#666;
    }
    p {
        font-size:.7rem;
        line-height: 1.5;
        color:#999;
    }
}
</style>