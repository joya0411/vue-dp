<template>
  <div class="search-container">
    <i class="icon-search"></i>
    <form action=''>
      <input type="search" placeholder="输入商户名、地点" v-model="searchValue" @keyup.enter="keyupHandle">
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: ''
      }
    },
    mounted() {
      this.searchValue = this.$router.searchValue || ''
    },
    methods: {
      keyupHandle() {
        this.$emit('keyupHandle', this.searchValue)
      }
    }
  }
</script>

<style scoped lang="sass">
.search-container {
    display:flex;
    flex:1;
    height:30px;
    justify-content:center;
    align-items:center;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 0 4px;
    i {
        color: #ccc;
    }
    input {
        font-size: 12px;
        color: #333;
        flex:1;
        height:100%;
        padding:4px;
        box-sizing:border-box;
        border:0;
    }
}
</style>