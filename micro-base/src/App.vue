<template>
  <div id="app" class="app">
    <div class="micro-base-header"></div>
    <div class="micro-base-aside">
      <router-link to="/sub-react" style="color: blue; fontsize: 25px">App2 - Home</router-link> |
      <router-link to="/sub-vue" style="color: blue; fontsize: 25px">App3 - Home</router-link> |
      <router-link to="/micro-jquery" style="color: blue; fontsize: 25px">App4 - Home</router-link>
    </div>
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
