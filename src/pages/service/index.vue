<template>
  <div class="service-page">
    <van-nav-bar v-if="!isWechatEnv" title="各地咨询服务热线" left-arrow @click-left="onClickLeft" />
    <div class="content">
      各地咨询服务热线页面
    </div>
  </div>
</template>

<script setup>
import { isWechat } from '@/utils/env';

const isWechatEnv = isWechat();
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.service-page {
  min-height: 100%;
  background: #f7f8fa;
  
  .content {
    padding: 16px;
  }
}
</style>
