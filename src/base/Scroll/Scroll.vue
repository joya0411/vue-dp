<template>
  <div class="scrollWrapper" ref="scrollWrapper">
    <slot></slot>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      pullup: { // 上拉加载
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, this.refreshDelay)
    },
    methods: {
      _initScroll() {
        this.scroll = new BScroll(this.$refs.scrollWrapper, {
          probeType: 3
        })
        // 上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd')
            }
          })
        }
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    },
    watch: {
      data() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.scroll && this.scroll.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>
<style lang="sass">
.scrollWrapper {
  height:100%;
  overflow:hidden;
}
</style>