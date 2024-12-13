<template>
  <div class="recycle-page">
    <van-nav-bar v-if="!isWechatEnv" title="报废回收网点查询" left-arrow @click-left="onClickLeft" />
    <div class="content">
      报废回收网点查询页面
    </div>
  </div>
</template>

<script setup>
import { isWechat } from '@/utils/env';

const isWechatEnv = isWechat();
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.recycle-page {
  min-height: 100%;
  background: #f7f8fa;

  .content {
    padding: 16px;
  }
}
</style>
