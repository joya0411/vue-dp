<template>
  <div class="userinfo-container">
      <p>
          <i class="icon-user"></i>
          <span>{{cityName}}</span>
      </p>
      <p>
          <i class="icon-map-marker"></i>
          <span>{{tel}}</span>
      </p>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'cityName',
        'tel'
      ])
    }
  }
</script>
<style scoped lang="sass">
.userinfo-container {
    padding:10px;
    p {
        margin:10px 0;
        line-height: 1.5;
        font-size:12px;
        i {
            color:#f63;
        }
        span {
            padding-left:10px;
            color: #666;
        }
    }
}
</style>