<template>
  <div class="loadMoreWrap">
    <span v-show="isLoadingMore" class="loading">
      <img src="./loading.gif">
      加载中...
    </span>
    <span v-show="!isLoadingMore" @click="loadingMoreHandle">加载更多</span>
  </div>
</template>

<script>
  export default {
    props: {
      isLoadingMore: { // 加载中true || 加载更多false（默认）
        type: Boolean,
        dafault: true
      },
      page: {
        type: Number,
        default: 0
      }
    },
    methods: {
      loadingMoreHandle() {
        this.$emit('loadMoreAjax')
      }
    }
  }
</script>

<style lang="scss">
  .loadMoreWrap {
    text-align:center;
    padding:10px 0;
    .loading img{
      width:24px;
      height:24px;
      vertical-align:middle
    }
  }
</style>