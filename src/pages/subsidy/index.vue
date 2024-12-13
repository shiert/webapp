<template>
  <div class="subsidy-page">
    <van-nav-bar v-if="!isWechatEnv" title="申请补贴" left-arrow @click-left="onClickLeft" />
    <div class="content">
      申请补贴页面
    </div>
  </div>
</template>

<script setup>
import { isWechat } from '@/utils/env';

const isWechatEnv = isWechat();
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.subsidy-page {
  min-height: 100%;
  background: #f7f8fa;

  .content {
    padding: 16px;
  }
}
</style>
