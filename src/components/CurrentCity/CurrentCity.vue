<template>
  <div class="current-city">
    <h2>{{cityName}}</h2>
  </div>
</template>
<script>
export default {
  props: {
    cityName: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="sass">
.current-city {
	position:relative;
    padding:1.5rem 0;
    text-align:center;
    &:after {
    	content:'';
    	position:absolute;
    	left:0;
    	right:0;
    	bottom:0;
    	border-bottom:1px solid #e1e1e1;
    	transform:scaleY(.5);
    }
    h2 {
    	font-size:1.2rem;
    	color:#323232;
    }
}
</style>