<template>
  <div class="star-group">
    <i class="icon-star" v-for="(item,index) in starLen" key="index" :class="{light: item<= star}" @click="starClick(index)"></i>
  </div>
</template>
<script>
  export default {
    props: {
      star: {
        type: Number,
        default: 0
      }
    },
    methods: {
      starClick(index) {
        this.$emit('starClick', index)
      }
    },
    data() {
      return {
        starLen: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
<style lang="sass">
.star-group {
    i {
        display: inline-block;
        margin:0 .1rem;
        font-size:.7rem;
        color:#999;
    }
    .light {
        color:#f63;
    }
}
</style>