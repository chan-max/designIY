<!--
 * @Author: chan-max jackieontheway666@gmail.com
 * @Date: 2024-01-02 19:17:55
 * @LastEditors: chan-max jackieontheway666@gmail.com
 * @LastEditTime: 2024-01-13 10:15:51
 * @FilePath: /1s/src/modules/app/views/index/indexSideMenu.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 1s, All Rights Reserved. 
-->
<template>
  <div style="display: flex; flex-direction: column; width: 100%; height: 100%">
    <div style="flex: 1"></div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { IonToggle, IonItem, IonLabel, IonAvatar } from "@ionic/vue";
import { useLoginStatusStore } from "@/store/stores/login.ts";

const loginStatusStore = useLoginStatusStore();

const avatar = computed(() => {
  return loginStatusStore.userInfo?.avatar || "";
});
</script>
<style lang=""></style>
