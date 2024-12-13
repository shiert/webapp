<template>
  <div class="guide-page">
    <van-nav-bar v-if="!isWechatEnv" title="操作指南" left-arrow @click-left="onClickLeft" />
    <div class="content">
      操作指南页面
    </div>
  </div>
</template>

<script setup>
import { isWechat } from '@/utils/env';

const isWechatEnv = isWechat();
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.guide-page {
  min-height: 100%;
  background: #f7f8fa;

  .content {
    padding: 16px;
  }
}
</style>
