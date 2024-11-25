<script setup lang="ts">
/* eslint-disable no-console */
import { useCounterStore } from '@/stores/counterStore'
import { CURRENT_PLATFORM } from '@/enums/platformEnum'
import { API_BASE_URL, iS_PROD_MODE } from '@/utils/env'

// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
// const { count, doubleCount } = storeToRefs(counterStore)
// // 作为 action 的 increment 可以直接解构
// const { increment } = counterStore

// 可以在组件中的任意位置访问 `store` 变量
const counterStore = useCounterStore()

console.table(import.meta.env)
console.log('CURRENT_PLATFORM', CURRENT_PLATFORM)
console.log('API_BASE_URL', API_BASE_URL, 'iS_PROD_MODE', iS_PROD_MODE)
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <view class="text-5xl text-red-500">
        {{ counterStore.count }}
      </view>
    </view>
  </view>
  <view class="text-area">
    <nut-button type="primary" @click="counterStore.increment">
      counterStore.increment 按钮
    </nut-button>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
