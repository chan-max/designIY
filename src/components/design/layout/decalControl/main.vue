<template>
  <div class="container" v-if="currentOperatingDecalController">
    <div style="padding: 1rem">
      <s1-img
        :src="currentOperatingDecalController.state.src"
        style="width: 64px; height: 64px"
        class="png-background"
      ></s1-img>
    </div>

    <div style="padding: 1rem">
      <el-form label-position="left" label-width="64px">
        <el-form-item label="旋转角度">
          <el-slider
            :min="0"
            :max="360"
            :step="1"
            v-model="currentOperatingDecalController.state.modelValueRotate"
            size="small"
          />
        </el-form-item>

        <el-form-item label="贴纸尺寸">
          <el-slider
            :min="0"
            :max="100"
            :step="1"
            v-model="currentOperatingDecalController.state.modelValueSize"
            size="small"
          />
        </el-form-item>

        <el-form-item label="贴纸粗糙度">
          <el-slider
            :min="0"
            :max="1"
            :step="0.01"
            v-model="currentOperatingDecalController.state.roughness"
            size="small"
          />
        </el-form-item>

        <el-form-item label="金属质感">
          <el-slider
            :min="0"
            :max="1"
            :step="0.01"
            v-model="currentOperatingDecalController.state.metalness"
            size="small"
          />
        </el-form-item>

        <el-form-item label="调整位置">
          <div class="w-full flex justify-center">
            <el-button-group size="small">
              <el-button @click="moveLeft" :icon="Back"> </el-button>
              <el-button @click="moveTop" :icon="Top"> </el-button>
              <el-button @click="moveDown" :icon="Bottom"> </el-button>
              <el-button @click="moveRight" :icon="Right"> </el-button>
              <el-button @click="resetPosition" :icon="RefreshRight">
                重置位置
              </el-button>
            </el-button-group>
          </div>
          <a-alert
            message="适用于微调，如果出现贴纸部分丢失，建议重新拉取一个贴纸"
            banner
            closable
            style="margin-top: 12px"
          />
        </el-form-item>
        <el-form-item label="印花工艺">
          <el-select
            v-model="clothingPaintMethod"
            size="small"
            placeholder="选择印花工艺"
          >
            <template #label="{ label }">
              <div style="font-size: 1rem">{{ label }}</div>
            </template>
            <el-option
              v-for="item in clothingPaintMethods"
              :key="item.title"
              :label="item.title"
              :value="item.title"
            >
              <el-popover width="auto" :hide-after="0" placement="right">
                <template #reference>
                  <div class="flex">
                    {{ item.title }}
                  </div>
                </template>
                <s1-img
                  :src="item.thumbnail"
                  fit="cover"
                  style="width: 200px; height: 200px"
                ></s1-img>
                <div style="width: 200px; padding: 12px">
                  {{ item.description }}
                </div>
              </el-popover>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <div></div>

    <div style="flex: 1"></div>

    <el-button-group class="w-full" type="primary" plain style="display: flex" round>
      <el-button @click="useCurrentSticker()" round style="flex: 1" plain
        >使用该贴纸模版</el-button
      >
      <el-button
        v-if="currentOperatingDecalController.state.isLocalResource"
        @click="upload"
        plain
      >
        点击上传
      </el-button>
      <el-button @click="showDecalList = !showDecalList" round plain>
        贴纸列表
      </el-button>
      <el-button @click="showWorkspace = !showWorkspace" round plain> 工作台 </el-button>
    </el-button-group>
    <el-button @click="remove" type="danger" round>移除该贴纸</el-button>
  </div>

  <s1-empty v-else>
    <template #description> 未选择贴纸 </template>
  </s1-empty>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import {
  currentOperatingDecalController,
  showWorkspace,
  showDecalControl,
  showDecalList,
  showCanvasLayout,
} from "../../store";
import { Top, Bottom, Back, Right, RefreshRight } from "@element-plus/icons-vue";
import { canvasStickerOptions } from "../canvas";
import { clothingPaintMethods } from ".";

function remove() {
  currentOperatingDecalController.value.remove();
  showCanvasLayout.value = true;
}

function upload() {}

function moveTop() {
  currentOperatingDecalController.value.moveTop();
}

function moveDown() {
  currentOperatingDecalController.value.moveDown();
}

function moveLeft() {
  currentOperatingDecalController.value.moveLeft();
}

function moveRight() {
  currentOperatingDecalController.value.moveRight();
}

function resetPosition() {
  currentOperatingDecalController.value.resetPosition();
}

function useCurrentSticker() {
  let currentOperatingDecalControllerState = currentOperatingDecalController.value.state;

  canvasStickerOptions.value =
    currentOperatingDecalControllerState.info.data ||
    currentOperatingDecalControllerState.info.meta.data;
  showCanvasLayout.value = true;
}

const clothingPaintMethod = ref();
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  row-gap: 1rem;
  overflow: auto;
}
</style>
