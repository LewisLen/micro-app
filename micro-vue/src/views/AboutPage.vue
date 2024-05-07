<template>
  <div>
    <h3>Vue子应用关于我们页面</h3>
    <button @click="switchDialog">打开弹窗</button>
    <div class="micro-about-dialog-wrap" v-if="dialogFlag">
      <div class="micro-about-dialog" @click="switchDialog">关闭弹窗</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const dialogFlag = ref(false);

const switchDialog = () => {
  dialogFlag.value = !dialogFlag.value;
};
</script>

<style scoped>
.micro-about-dialog-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.micro-about-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin-top: 15vh;
  width: 30%;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
</style>
