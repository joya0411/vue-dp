<template>
  <transition name="slide">
    <div class="page searchPage">
      <searchHeader class="searchHd" @keyupHandle="keyupHandle"></searchHeader>
      <div class="searchList">
        <scroll ref="scroll"
                :pullup="pullup"
                @scrollToEnd="loadMore"
                :data="searchList"
        >
          <div>
            <searchList ref="searchList" 
                        :data="searchList"
                        :page="page"
                        :isLoadingMore="isLoadingMore"
                        :hasMore="hasMore"
                        @loadMoreAjax="loadMoreAjax"
            ></searchList>
          </div>
        </scroll>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script>
  import Scroll from 'base/Scroll/Scroll'
  import SearchHeader from 'components/SearchHeader/SearchHeader'
  import SearchList from 'components/SearchList/SearchList'
  import axios from 'axios'
  import {ERR_OK} from 'common/config'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        searchList: [],
        pullup: true,
        page: 0,
        hasMore: false, // 是否还有下一页数据，hasMore为true没有数据
        isLoadingMore: true, // 加载中true || 加载更多false(默认)
        searchValue: ''
      }
    },
    mounted() {
      this._initSearchList()
    },
    computed: {
      ...mapGetters([
        'cityName'
      ])
    },
    methods: {
      _initSearchList() {
        let category = this.$route.params.cate || 'all'
        let keyword = this.searchValue
        if (this.$router.searchValue) {
          keyword = this.$router.searchValue
        }
        axios.post(`/api/search/list/${this.page}/${encodeURI(this.cityName)}/${category}/${keyword}`).then(response => {
          if (response.status === ERR_OK) {
            this.searchList = response.data.data
          }
          this.page++
        })
      },
      // 加载更多
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
        let category = this.$route.params.cate
        let keyword = this.searchValue
        if (this.$router.searchValue) {
          keyword = this.$router.searchValue
        }
        setTimeout(() => {
          axios.post(`/api/search/list/${this.page}/${encodeURI(this.cityName)}/${category}/${keyword}`).then(response => {
            if (response.status === ERR_OK) {
              this.searchList = this.searchList.concat(response.data.data)
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
      keyupHandle(searchValue) {
        this.searchList = []
        this.page = 0
        this.searchValue = searchValue
        this.$router.searchValue = this.searchValue
        this._initSearchList()
      }
    },
    components: {
      SearchHeader,
      SearchList,
      Scroll
    }
  }
</script>
<style scoped lang="scss">
.searchHd {
  position:fixed;
  top:0;
  left:0;
  width:100%;
}
.searchList {
  position:fixed;
  top:50px;
  right:0;
  bottom:0;
  left:0;
}
</style>