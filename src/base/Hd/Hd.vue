<template>
<div class="common-header">
  <span class="back-icon" @click="clickHandle">
      <i class="icon-chevron-left"></i>
  </span>
  <span class="title">{{title}}</span>
</div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      clickHandle() {
        let path = this.$route.path
        let reg = /(detail\/\d+)(\/login\/user)/g
        if (path === '/login/user') {
          // 点击小人未登录
          this.$router.push('/')
        } else if (reg.test(path)) {
          // 点击购买未登录
          this.$router.push('/')
          var t = path.replace(reg, ($0, $1) => {
            return $1 + ''
          })
          this.$router.push(t)
        } else {
          // 其他情况
          this.$router.back()
        }
      }
    }
  }
</script>

<style scoped lang="sass">
.common-header {
  display:flex;
  align-items:center;
	text-align:center;
	color:#fff;
	background:#f63;
  height:50px;
	.back-icon {
		color:#fff;
    flex:0 0 30px;
	}
  .title {
    flex:1;
  }
}
</style>