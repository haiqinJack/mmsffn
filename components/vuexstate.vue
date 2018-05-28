<template>
  <div>
  <button @click="addincrement()">{{ counter }}??????</button>
  <h1>{{ wechat }}</h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    counter: 'counter',
    wechat: 'wechat'
  }),
  methods: mapActions([
    'addincrement',
    'getwechat'
  ]),
  beforeCreate() {
    console.log('beforeCreate')
  }
  ,
  created() {
    this.$store.dispatch('getwechat')
  	console.log('created')
  }
  ,
  beforeMount() {
  	const url = window.location.href
  	console.log(url,'beforeMount')
  }
  ,
  Mounted() {
  	console.log('Mounted')
  }
  ,
  beforeUpdate() {
  	console.log('beforeUpdate')
  }
  ,
  update() {
  	console.log('update')
  }
  ,
  activated() {
  	console.log('activated')
  }
  ,
  deactivated() {
  	console.log('deactivated')
  }
  ,
  beforeDestroy() {
  	console.log('beforeDestroy')
  }
  ,
  destroyed() {
  	console.log('destroyed')
  }
  ,
  errCaptured() {
  	console.log('errCaptured')
  }
}
</script>
