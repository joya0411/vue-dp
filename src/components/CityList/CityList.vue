<template>
  <div class="city-list-container">
      <h3>热门城市</h3>
      <ul class="city-list">
        <li class="city-item" v-for="(item,index) in cityList" key="index">
            <span @click="selectCity(item)">{{item}}</span>
        </li>
      </ul>
  </div>
</template>
<script>
  export default {
    props: {
      cityList: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectCity(item) {
        this.$emit('selectCity', item)
        this.$router.back()
      }
    }
  }
</script>
<style scoped lang="scss">
.city-list-container {
	padding:0.5rem;
	h3 {
		font-size:0.8rem;
	}
	.city-list {
		display:flex;
		flex-wrap:wrap;
		li {
			margin:0.5rem 0;
			width:33.33%;
			span {
				display:block;
				width:3.5rem;
				height:1.8rem;
				line-height:1.8rem;
				text-align:center;
				font-size:0.8rem;
				border:1px solid #ccc;
				margin:0 auto;
			}
		}
	}
}
</style>