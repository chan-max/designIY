<template>
    <operate-form-item>
        <template #icon>
            褐
        </template>
        <template #name> 深褐色 </template>
        <template #content>
            <el-tooltip content="值为100%则完全是深褐色的，值为0%图像无变化" :hide-after="0">
                <el-input style="width:80px"  v-model="model" size="small" max="100" min="0" step="1" type="number">
                    <template #suffix>
                        <div style="font-size:1rem;"> % </div>
                    </template>
                </el-input>
            </el-tooltip>
        </template>
    </operate-form-item>
</template>

<script setup lang="ts">
import icon from "@/components/design/assets/icon/blur.svg?component";
import { canvasStickerOptions } from '@/components/design/layout/canvas/index.tsx'

const props = defineProps({
    tooltip: {
        default: ''
    }
})

const model = defineModel({})

</script>
  
<style></style>
  