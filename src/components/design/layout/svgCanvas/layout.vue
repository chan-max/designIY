<template>
    <el-row  :gutter="16">
        <el-col :span="10">
            <div class="label">宽度</div>
        </el-col>
        <el-col :span="14">
            <el-input size="small" v-model="svgCanvasWidth"   min="100" step="10"></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="16">
        <el-col :span="10">
            <div class="label">
                高度
            </div>
        </el-col>
        <el-col :span="14">
            <el-input v-model="svgCanvasHeight" size="small"  min="100" step="10"></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="16">
        <el-col :span="10">
            <div class="label">
                宽高比 
            </div>
        </el-col>
        <el-col :span="14">
            <div>{{ svgCanvasWidth / svgCanvasHeight }}</div>
        </el-col>
    </el-row>
    <el-row :gutter="16" justify="end">
        <el-col :span="10">
            <div class="label">
                主画布
            </div>
        </el-col>
        <el-col :span="14">
            <el-switch v-model="svgCanvasSyncMainCanvas" size="small" inline-prompt  />
        </el-col>
    </el-row>
</template>
    
<script setup lang='ts'>
import { svgCanvasChildren, svgCanvasWidth,svgCanvasHeight,svgCanvasSyncMainCanvas} from '@/components/design/store'
</script>
    
<style lang="less" scoped>
.el-row{
    margin: 6px;
}

.label{
    height: 100%;
    align-content: center;
    text-align: end;
}
</style>
<style>

</style>