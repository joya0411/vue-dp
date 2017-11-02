<template>
  <div class="order-list-container">
    <h2>您的订单</h2>
    <div>
      <div class="order-item-container" v-for="(item,index) in data" key="index">
        <OrdItem :item="item"></OrdItem>
      </div>
    </div>
  </div>
</template>
<script>
  import OrdItem from 'components/OrdItem/OrdItem'
  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      OrdItem
    }
  }
</script>
<style scoped lang="sass">
.order-list-container {
  padding:10px 15px;
  h2 {
    position: relative;
    font-size:14px;
    color: #333;
    padding-bottom: 10px;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid #e1e1e1;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
.order-item-container {
  position:relative;
  padding:10px 0;
  &:after {
    content: '';
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
    border-bottom:1px solid #e1e1e1;
    transform: scaleY(.5);
  }
}

</style>