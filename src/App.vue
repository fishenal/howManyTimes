<template>
  <div>
    <apphead></apphead>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    <div class="nav">
      <ul>
        <li v-link="{ path: '/index' }">index</li>
        <li v-link="{ path: '/chart' }">chart</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import pagepeople from './pages/People'
// import pagestatus from './pages/Status'
// import pagelog from './pages/Log'
// import apphead from './components/AppHead'

export default {
  components: {
    // apphead
  },
  methods: {
    clickBtn () {
      // window.localStorage.setItem('id_token', 101)
      // console.log(msg + '222')
    }
  }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
#app {
    width: 100%;
}
</style>
