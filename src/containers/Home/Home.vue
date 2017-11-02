<template>
  <div class="homePage">
    <home-header @keyupHandle="keyupHandle"></home-header>
    <div class="homeContent">
      <scroll ref="scroll"
              :pullup="pullup"
              @scrollToEnd="loadMore"
              :data="allData"
      >
        <div>
          <category></category>
          <border10></border10>
          <ad cate="czth" :data="czth" title="超值特惠" v-show="czth.length"></ad>
          <border10></border10>
          <ad cate="ttlj" :data="ttlj" title="天天立减" v-show="ttlj.length"></ad>
          <border10></border10>
          <like ref="like"
                :data="cnxh"
                :page="page"
                :isLoadingMore="isLoadingMore"
                :hasMore="hasMore"
                @loadMoreAjax="loadMoreAjax"
          ></like>
        </div>
      </scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from 'components/HomeHeader/HomeHeader'
  import Scroll from 'base/Scroll/Scroll'
  import Category from 'components/Category/Category'
  import Border10 from 'base/Border10/Border10'
  import Ad from 'components/Ad/Ad'
  import Like from 'components/Like/Like'
  import axios from 'axios'
  import {ERR_OK} from 'common/config.js'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        czth: [], // 超值特惠
        ttlj: [], // 天天立减
        cnxh: [], // 猜你喜欢
        pullup: true,
        page: 0,
        hasMore: false, // 是否还有下一页数据，hasMore为true没有数据
        isLoadingMore: true // 加载中true || 加载更多false(默认)
      }
    },
    computed: {
      allData() {
        if (this.czth.length > 0 && this.ttlj.length > 0 && this.cnxh.length > 0) {
          return this.czth.concat(this.ttlj, this.cnxh)
        }
      },
      ...mapGetters([
        'cityName'
      ])
    },
    mounted() {
      // 超值特惠
      this._initCZTH()
      // 天天立减
      this._initTTLJ()
      // 猜你喜欢
      this._initCNXH()
    },
    methods: {
      // 超值特惠
      _initCZTH() {
        axios.post('api/czth', {
          cityName: this.cityName
        }).then(response => {
          if (response.status === ERR_OK) {
            this.czth = response.data
          }
        })
      },
      // 天天立减
      _initTTLJ() {
        let self = this
        axios.post('api/ttlj', {
          cityName: this.cityName
        }).then(response => {
          if (response.status === ERR_OK) {
            self.ttlj = response.data
          }
        })
      },
      // 猜你喜欢
      _initCNXH() {
        axios.post(`api/cnxh/${encodeURI(this.cityName)}/${this.page}`).then(response => {
          if (response.status === ERR_OK) {
            this.cnxh = response.data
          }
          this.page++
        })
      },
      // 猜你喜欢(加载更多)
      loadMore() {
        if (this.page % 5 === 0) {
          // 加载更多
          return
        }
        this.loadMoreAjax()
      },
      loadMoreAjax() {
        // 加载中
        this.isLoadingMore = true
        setTimeout(() => {
          axios.post(`api/cnxh/${encodeURI(this.cityName)}/${this.page}`).then(response => {
            if (response.status === ERR_OK) {
              this.cnxh = this.cnxh.concat(response.data)
            }
            this.page++
            if (this.page % 5 === 0) {
              // 加载更多
              this.isLoadingMore = false
            }
            if (this.page >= 10) {
              this.hasMore = true
            }
          })
        }, 200)
      },
      // 搜索
      keyupHandle(searchValue) {
        this.$router.searchValue = searchValue
        this.$router.push('search/all')
      }
    },
    watch: {
      'cityName'() {
        // 超值特惠
        this._initCZTH()
        // 天天立减
        this._initTTLJ()
        // 猜你喜欢
        this._initCNXH()
      }
    },
    components: {
      HomeHeader,
      Category,
      Border10,
      Ad,
      Like,
      Scroll
    }
  }
</script>

<style scoped lang="scss">
.homeContent {
  position:fixed;
  top:50px;
  left:0;
  right:0;
  bottom:0;
}
.swiper-container {
  height:100%;
}
.swiper-slide {
  height: auto;
}
.swiper-scrollbar {
  display:none;
}
</style>