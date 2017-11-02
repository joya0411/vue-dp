<template>
  <div class="buy-store-container">
    <button @click="storeHandle" :class="{'selected':selected}">
      {{selectTxt}}
    </button>
    <button @click="buyHandle">购买</button>
  </div>
</template>
<script>
  export default {
    props: {
      selected: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      selectTxt() {
        return this.selected ? '已收藏' : '收藏'
      }
    },
    methods: {
      // 收藏
      storeHandle() {
        this.$emit('storeHandle')
      },
      // 购买
      buyHandle() {
        this.$emit('buyHandle')
      }
    }
  }
</script>
<style scoped lang="scss">
  .buy-store-container {
    display: flex;
    justify-content: space-around;
    padding:10px 15px;
    button {
      flex:1; 
      background:#f63;
      color:#fff;
      font-size:14px;
      height:30px;
      margin:0 5px;
    }
    .selected {
        background:red;
    }
  }
</style>