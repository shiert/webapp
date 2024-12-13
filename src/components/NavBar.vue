<template>
  <div class="nav-bar">
    <div class="left" @click="handleBack">
      <img src="../assets/images/back.png" alt="返回" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const router = useRouter()

const handleBack = () => {
  router.back()
}
</script>

<style scoped lang="less">
.nav-bar {
  height: 46px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  
  .left {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    img {
      width: 20px;
      height: 20px;
    }
  }
  
  .title {
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #323233;
    font-weight: 500;
  }
  
  .right {
    width: 24px;
  }
}
</style>
