<template>
  <operate-form-item>
    <template #icon> <icon-bold></icon-bold> </template>
    <template #name> 厚度 </template>
    <template #content>
      <el-select v-model="model" size="small" style="width: 80px">
        <template #label="{ label, value }">
          <span :style="{ fontWeight: value }"> {{ label }} </span>
        </template>
        <el-option
          v-for="item in fontWeightOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span :style="{ fontWeight: item.value }"> {{ item.label }} </span>
        </el-option>
      </el-select>
    </template>
  </operate-form-item>
</template>

<script setup lang="ts">
import iconFontSize from "@/components/design/assets/icon/font-size.svg?component";
import { ref, reactive } from "vue";
import iconBold from "@/components/design/assets/icon/bold.svg?component";
const model = defineModel({});

const fontWeightOptions = reactive([
  {
    value: "100",
    label: "超细体",
  },
  {
    value: "200",
    label: "特细体",
  },
  {
    value: "300",
    label: "细体",
  },
  {
    value: "400",
    label: "正常体",
  },
  {
    value: "500",
    label: "中等体",
  },
  {
    value: "600",
    label: "半粗体",
  },
  {
    value: "700",
    label: "粗体",
  },
  {
    value: "800",
    label: "特粗体",
  },
  {
    value: "900",
    label: "超粗体",
  },
]);
</script>

<style></style>
