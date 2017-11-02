<template>
  <div>
    <list :data="data"></list>
    <loadMore :page="page" :isLoadingMore="isLoadingMore" @loadMoreAjax="loadMoreAjax" v-show="!hasMore"></loadMore>
  </div>
</template>
<script>
  import List from 'base/List/List'
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
      List,
      LoadMore
    }
  }
</script>
<style scoped lang="scss">
</style>