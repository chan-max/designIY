<!--
 * @Author: chan-max jackieontheway666@gmail.com
 * @Date: 2024-01-08 21:32:35
 * @LastEditors: chan-max jackieontheway666@gmail.com
 * @LastEditTime: 2024-01-12 22:29:22
 * @FilePath: /1s/src/modules/app/views/market/image/index.vue
 * @Description: 

 * 
 * Copyright (c) 2024 by 1s, All Rights Reserved. 
-->
<template>
  <div class="content">
    <waterfall :columns="columns" :list="list" v-slot="{ item }">
      <el-image  :src="item.preview_img" fit="contain">
        <template #placeholder>
          <ion-skeleton-text :animated="true"></ion-skeleton-text>
        </template>
        <template #error> error </template>
      </el-image>
    </waterfall>
  </div>
  <ion-infinite-scroll @ionInfinite="ionInfinite">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script setup>
import { getImage } from "@/api";
import { ref } from "vue";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonImg,
  IonSkeletonText,
} from "@ionic/vue";
import waterfall from "@/components/layout/waterfall/index.vue";

const columns = ref(3);

const list = ref([]);

const ionInfinite = async (ev) => {
  await getList();
  ev.target.complete();
};

// 已经请求的页数
var page = 1;
// 总页数
var pages = Infinity;

async function getList() {
  if (page > pages) {
    return;
  }

  var res = await getImage({
    page: page++,
    pageSize: 30,
  });
  pages = res.pages;
  list.value = list.value.concat(res.list);
}

getList();
</script>

<style>
.content {
  padding: 10px;
}

.el-image{
  display: block;
}
</style>
