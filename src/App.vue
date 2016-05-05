<template>
  <div>
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
  font-family: '微软雅黑';
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  height: 30px;
}
table {
  width: 90%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
}
td, th {
  border: 1px solid #888;
  text-align: center;
  padding: 15px 0;
  height: 50px;
}
td img {
  height: 40px;
}
#app {
  width: 100%;
}
.nav {
  width: 100%;
}
.nav ul {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
.nav li {
  width: 50%;
  border: 1px solid #ddd;
  text-align: center;
}
.nav li.v-link-active {
  border-color: orange;
}
.dialog {
  width: 40%;
  position: absolute;
  height: 30%;
  top: 15%;
  left: 50%;
  margin-left: -20%;
  z-index: 3;
  background: #fff;
}
.black-cover {
  position: absolute;
  background: #000;
  opacity: .8;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
}
</style>
