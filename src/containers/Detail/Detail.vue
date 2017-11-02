<template>
  <transition name="slide">
    <div class="page detailPage">
      <hd title="商户详情"></hd>
      <div class="detailContent">
        <scroll ref="scroll"
                :pullup="pullup"
                @scrollToEnd="loadMore"
                :data="allData"
        >
          <div>
            <info ref="info" :data="infoData"></info>
            <buy @storeHandle="storeHandle" @buyHandle="buyHandle" :selected="selected"></buy>
            <border10></border10>
            <comment ref="comment"
                    :data="commentList"
                    :page="page"
                    :isLoadingMore="isLoadingMore"
                    :hasMore="hasMore"
                    @loadMoreAjax="loadMoreAjax"
            ></comment>
          </div>
        </scroll>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import Hd from 'base/Hd/Hd'
  import Scroll from 'base/Scroll/Scroll'
  import Info from 'components/Info/Info'
  import Buy from 'components/Buy/Buy'
  import Border10 from 'base/Border10/Border10'
  import Comment from 'components/Comment/Comment'
  import axios from 'axios'
  import {ERR_OK} from 'common/config.js'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
        pullup: true,
        infoData: {},
        commentList: [],
        page: 0,
        hasMore: false, // 是否还有下一页数据,hasMore为true没有数据
        isLoadingMore: true, // 加载中true || 加载更多false(默认)
        selected: false
      }
    },
    computed: {
      allData() {
        let ret = []
        if (this.infoData.title && this.commentList.length > 0) {
          ret.push(this.infoData)
          ret.concat(this.commentList)
        }
        return ret
      },
      ...mapGetters([
        'cityName',
        'tel',
        'storeList'
      ])
    },
    mounted() {
      this._initInfo()
      this._initComment()
      this._setStore()
    },
    methods: {
      _initInfo() {
        let shopId = this.$route.params.shopId
        axios.post(`/api/detail/info/${shopId}`).then(response => {
          if (response.status === ERR_OK) {
            this.infoData = response.data
          }
        })
      },
      _initComment() {
        let shopId = this.$route.params.shopId
        axios.post(`/api/detail/comment/${shopId}/${this.page}`).then(response => {
          if (response.status === ERR_OK) {
            this.commentList = response.data.data
          }
          this.page++
        })
      },
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
          let shopId = this.$route.params.shopId
          axios.post(`/api/detail/comment/${shopId}/${this.page}`).then(response => {
            if (response.status === ERR_OK) {
              this.commentList = this.commentList.concat(response.data.data)
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
        }, 500)
      },
      _setStore() {
        this.selected = false
        this.storeList.map(item => {
          let shopId = this.$route.params.shopId
          if (item.shopId === shopId && item.selected) {
            this.selected = item.selected
          }
        })
      },
      // 收藏
      storeHandle() {
        let shopId = this.$route.params.shopId
        if (this.tel) {
          this.selected = !this.selected
          this.setStoreList({
            shopId: shopId,
            selected: this.selected
          })
        } else {
          this.$router.isSelect = true
          this.$router.push(`${shopId}/login`)
        }
      },
      // 购买
      buyHandle() {
        let shopId = this.$route.params.shopId
        if (this.tel) {
          this.$router.push(`${shopId}/user`)
        } else {
          this.$router.push(`${shopId}/login`)
        }
      },
      ...mapActions([
        'setStoreList'
      ])
    },
    components: {
      Hd,
      Info,
      Buy,
      Border10,
      Comment,
      Scroll
    }
  }
</script>

<style scoped lang="sass">
.detailContent {
  position:fixed;
  top:50px;
  right:0;
  bottom:0;
  left:0;
}
</style>