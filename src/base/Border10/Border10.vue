<template>
  <div class="border10"></div>
</template>
<script>
  export default {}
</script>
<style lang="sass">
  .border10 {
    position:relative;
    height:10px;
    background:#f0f0f0;
  }
  .border10:before,
  .border10:after {
      content: '';
      position: absolute;
      left:0;
      right: 0;
      height:1px;
      transform: scaleY(.5);
      background:#e1e1e1;
  }
  .border10:before {
    top:0;
  }
  .border10:after {
    bottom:0;
  }
</style>