<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a @click="focusProduct(id=1)">商品</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import vuexstate from '~/components/vuexstate.vue'

export default {
  components: {
    AppLogo,
    vuexstate
  },
  methods: {
    focusProduct (item) {
      // 路由跳转到deal，附带查询参数id
      console.log(item,'id')
      this.$router.push({ path: '/shoping', query: { id: item._id } })
    }
  }  
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
