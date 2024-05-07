<template>
  <div id="app" class="app">
    <el-container>
      <el-header class="micro-base-header">
        <div class="header-logo">Logo</div>
        <div class="header-menu">
          <ul class="header-menu-ul">
            <li class="header-menu-li">首页</li>
            <li class="header-menu-li">查询中心</li>
            <li class="header-menu-li">付款业务</li>
            <li class="header-menu-li">现金管理</li>
            <li class="header-menu-li">数字财资</li>
            <li class="header-menu-li">票据业务</li>
            <li class="header-menu-li">投资理财</li>
            <li class="header-menu-li">国际业务</li>
            <li class="header-menu-li">融资业务</li>
            <li class="header-menu-li">交易授权</li>
            <li class="header-menu-li">客户服务</li>
            <li class="header-menu-li">企业服务</li>
          </ul>
        </div>
        <div class="header-user">UserInfo</div>
      </el-header>
    </el-container>
    <el-container style="height: 500px" class="micro-base-container">
      <el-aside width="200px" class="micro-base-aside">
        <el-menu>
          <!-- <router-link to="/sub-react">React子应用</router-link> -->
          <el-menu-item @click="linkTo('/sub-react')">
            <i class="el-icon-menu"></i>
            <span slot="title">React子应用</span>
          </el-menu-item>
          <el-menu-item @click="linkTo('/sub-vue')">
            <i class="el-icon-menu"></i>
            <span slot="title">Vue3子应用</span>
          </el-menu-item>
          <el-menu-item @click="linkTo('/micro-jquery')">
            <i class="el-icon-menu"></i>
            <span slot="title">jQuery子应用</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main class="micro-base-main">
        <div id="container"></div>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MicroBaseApp',
  methods: {
    linkTo(microPath) {
      this.$router.replace({
        path: microPath,
        query: {
          // goBack: 'Y',
          time: Date.now(),
        },
      });
    },
  },
};
</script>

<style scoped>
.micro-base-header,
.micro-base-aside,
.micro-base-main {
  /* border-bottom: 1px solid #eee; */
  background-color: #fff;
  /* background-color: rgb(238, 241, 246); */
}

.micro-base-header {
  display: flex;
  line-height: 60px;
}
.header-logo {
  width: 114px;
}
.micro-base-aside {
  border-radius: 8px;
}
.micro-base-container {
  margin-top: 4px;
  border: none;
}
.micro-base-main {
  border-radius: 8px;
  margin-left: 8px;
}
.header-menu-ul {
  display: flex;
}
.header-menu-li {
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}
.header-user {
  text-align: right;
}
</style>
