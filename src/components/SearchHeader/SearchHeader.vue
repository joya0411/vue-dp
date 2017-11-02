<template>
  <div class="search-header">
      <span class="back-icon" @click="backHandle">
          <i class="icon-chevron-left"></i>
      </span>
      <div class="search-input">
        <search-input @keyupHandle="keyupHandle"></search-input>
      </div>
  </div>
</template>
<script>
  import SearchInput from 'base/SearchInput/SearchInput'
  export default {
    methods: {
      backHandle() {
        this.$router.searchValue = ''
        this.$router.back()
      },
      keyupHandle(searchValue) {
        this.$emit('keyupHandle', searchValue)
      }
    },
    components: {
      SearchInput
    }
  }
</script>
<style scoped lang="scss">
.search-header {
  display:flex;
  align-items:center;
  height:50px;
	text-align:center;
	color:#fff;
  background:#f63;
	.back-icon {
    flex:0 0 30px;
		color:#fff;
  }
  .search-input {
    flex:1;
    margin-right:10px;
  }
}
</style>