<template>
  <div>
    <header class="home-header f-clearfix">
      <div class="home-header-left">
        <router-link to="city">
          <span>{{cityName}}</span>
          <i class="icon-angle-down"></i>
        </router-link>
      </div>
      <div class="home-header-middle">
        <search-input @keyupHandle="keyupHandle"></search-input>
      </div>
      <div class="home-header-right" @click="loginHandle">
        <i class="icon-user"></i>
      </div>
    </header>
  </div>
</template>

<script>
  import SearchInput from 'base/SearchInput/SearchInput'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'cityName',
        'tel'
      ])
    },
    methods: {
      loginHandle() {
        if (this.tel) {
          this.$router.push('user')
        } else {
          this.$router.push('login')
        }
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

<style scoped lang="sass">
.home-header {
    position:fixed;
    left:0;
    top:0;
    width:100%;
    background: #f63;
    display: flex;
    align-items: center;
    height:50px;
    z-index:10;
    * {
      color:#fff;
    }
    .home-header-left {
      flex: 0 0 50px;
      padding:0 10px;
      text-align: left;
    }
    .home-header-middle {
      flex:1;
    }
    .home-header-right {
      flex:0 0 25px;
      padding:0 10px;
      text-align:center;
    }
}
</style>