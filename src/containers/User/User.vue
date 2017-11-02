<template>
  <transition name="slide">
  <div class="page">
    <hd title="用户主页"></hd>
    <div class="userContent">
      <scroll :data="orderList">
        <div>
          <userInfo></userInfo>
          <Border10></Border10>
          <OrderList :data="orderList"></OrderList>
        </div>
      </scroll>
    </div>
  </div>
  </transition>
</template>
<script>
  import Hd from 'base/hd/hd'
  import Scroll from 'base/Scroll/Scroll'
  import UserInfo from 'components/UserInfo/UserInfo'
  import Border10 from 'base/Border10/Border10'
  import OrderList from 'components/OrderList/OrderList'
  import axios from 'axios'
  import {ERR_OK} from 'common/config'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        orderList: []
      }
    },
    mounted() {
      if (!this.tel) {
        this.$router.push('/')
      } else {
        this._initOrderList()
      }
    },
    computed: {
      ...mapGetters([
        'tel'
      ])
    },
    methods: {
      _initOrderList() {
        axios.post(`/api/orderList/${this.tel}`).then(response => {
          if (response.status === ERR_OK) {
            this.orderList = response.data
          }
        })
      }
    },
    components: {
      Hd,
      Scroll,
      UserInfo,
      Border10,
      OrderList
    }
  }
</script>
<style scoped lang="sass">
  .userContent {
    position:fixed;
    top:50px;
    left:0;
    bottom:0;
    width:100%;
  }
</style>