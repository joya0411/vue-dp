<template>
  <transition name="top">
    <div class="page">
      <hd title="选择城市"></hd>
      <current-city :cityName="cityName"></current-city>
      <city-list :cityList="cityList" @selectCity="selectCity"></city-list>
    </div>
  </transition>
</template>

<script>
  import Hd from 'base/Hd/Hd'
  import CurrentCity from 'components/CurrentCity/CurrentCity'
  import CityList from 'components/CityList/CityList'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
        cityList: ['北京', '上海', '深圳', '广州', '杭州', '苏州', '南京', '厦门', '重庆', '长沙', '武汉', '西安']
      }
    },
    computed: {
      ...mapGetters([
        'cityName'
      ])
    },
    methods: {
      selectCity(item) {
        this.setCityName(item)
      },
      ...mapActions([
        'setCityName'
      ])
    },
    components: {
      Hd,
      CurrentCity,
      CityList
    }
  }
</script>

<style scoped lang="sass">
</style>