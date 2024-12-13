<template>
  <div class="home">
    <div class="title">
      贵州习水人事招生系统
    </div>
    <div class="container">
      <div class="list-item" v-for="(item, index) in menuList" :key="index">
        <div class="left">
          <div class="icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="text-container">
            <div class="text">{{ item.text }}</div>
            <div class="subtitle" v-if="item.subtitle">{{ item.subtitle }}</div>
          </div>
        </div>
        <div class="enter-btn" @click="handleClick(item)">点击进入</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon from '@/assets/images/icons/icon.png'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = ref([
  {
    text: '申请补贴',
    subtitle: '*仅限全国报废更新补贴',
    icon: icon,
    path: '/subsidy'
  },
  {
    text: '申请进度查询',
    icon: icon,
    path: '/progress'
  },
  {
    text: '操作指南',
    icon: icon,
    path: '/guide'
  },
  {
    text: '各地咨询服务热线',
    icon: icon,
    path: '/service'
  },
  {
    text: '报废回收网点查询',
    icon: icon,
    path: '/recycle'
  }
])

const handleClick = (item) => {
  router.push(item.path)
}
</script>

<style scoped lang="less">
.home {
  min-height: 100%;
  background-image: url(../assets/images/homeBackgroundImage.png);
  background-size: 100% auto;
  background-color: #f3f8fe;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  .title {
    padding: 15%;
    box-sizing: border-box;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "zihunxingmouhei";
    font-size: 54px;
    text-align: center;
    color: #fefeff;
    text-shadow: 10px 10px 15px rgba(55, 111, 236, 0.98);
  }

  .container {
    flex: 1;
    padding: 16px;
    overflow-y: auto;

    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      .left {
        display: flex;
        align-items: center;

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 48px;
            height: 48px;
            object-fit: contain;
          }
        }

        .text-container {
          .text {
            font-size: 16px;
            color: #323233;
            font-weight: 500;
          }

          .subtitle {
            font-size: 12px;
            color: #999;
            margin-top: 6px;
          }
        }
      }

      .enter-btn {
        padding: 9px 12px;
        background: #E7F3FF;
        color: #4A90E2;
        border-radius: 16px;
        font-size: 14px;
        border: 1px solid #4A90E2;
        cursor: pointer;
      }
    }
  }
}
</style>