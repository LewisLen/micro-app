<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h2 class="title">基座(主应用)</h2>
    <nav>
      <div @click="routerFn">react</div>
      <router-link to="/sub-react" style="color: blue; fontsize: 25px">App2 - Home</router-link> |
      <router-link to="/app3" style="color: blue; fontsize: 25px">App3 - Home</router-link> |
    </nav>
    <div id="container"></div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  methods: {
    routerFn() {
      window.location.href = '//localhost:3301';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  height: 100px;
  line-height: 100px;
  background-color: #ccc;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
