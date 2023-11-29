import { setFullscreen } from "@/common/browser";
import { computed, ref, shallowRef, watchEffect, watch, reactive, nextTick } from "vue"

// 当前实例
export const currentController = shallowRef(null);

// 是否为暗色模式
export const isDarkMode = ref(false)

// 加载
export const isLoading = shallowRef(false);

// 模型的加载元素
export const container = shallowRef();

// 当前组件是否全屏
export const isFullScreen = ref(false)

watchEffect(() => setFullscreen(isFullScreen.value))



// 画布背景颜色 
export const canvasBgColor = ref('')

// 画布背景透明度
export const canvasBgOpacity = ref('1')

// 画布颜色随着暗色模式的变化而变化
watchEffect(() => {
    canvasBgColor.value = isDarkMode.value ? '#1d1d1d' : '#f2f2f2'
})

// 是否展示基础模型选择菜单
export const showBaseModelSelect = ref(false);

// 当前操作的模型信息
export const currentOperatingModelInfo = ref()

// 是否展示场景控制弹窗
export const showSceneControl = ref(false)

// 是否展示图片贴图的弹窗
export const showImageSticker = ref(false)

watch(showImageSticker, (value) => {
    if(value){

    }
})

// 是否展示艺术字弹窗
export const showTextSticker = ref(false)


// 是否展示工作台窗口
export const showWorkspace = ref(false)
watch(showWorkspace, (value) => {
    if (value) {
        showDecalControl.value = false
    }
})


// 是否展示贴画控制弹窗
export const showDecalControl = ref(false)
watch(showDecalControl,(value) => {
    if(value){
        clearRightLayout()
        showDecalControl.value = true
    }
})


// 是否展示自定义文字贴纸
export const showCustomTextSticker = ref(false)


// 当前操作的文字内容
export const operatingTextStyle = reactive({

})


// 文字贴纸文字
export const operatingTextStickerText = ref(`breaking
          bad`)

// 文字贴纸颜色
export const operatingTextStickerColor = ref('#000')

// 文字厚度
export const operatingTextStickerWeight = ref(500)

// 字号大小， 字号大小只用于显示
export const operatingTextStickerFontSize = ref(32)

// 行高
export const operatingTextStickerLineHeight = ref(1)

// 是否斜体
export const operatingTextStickerIsItalic = ref(false)

// 文字间距
export const operatingTextStickerLetterSpacing = ref(5);

// 文字书写方式
export const operatingTextStickerWritingMode = ref('initial')
export const enum TextStickerWritingMode {
    INITIAL = 'initial',
    VERTICAL_RL = 'vertical-rl',
    VERTICAL_LR = 'vertical-lr',
}

export const operatingTextStickerTextOrientation = ref('upright')

// 当前正在操作的贴花
export const operatingDecal = shallowRef()

// 是否展示图片上传弹窗
export const showImageUplaod = ref(false)


// 是否展示字体上传弹窗
export const showFontUpload = ref(false)


// 是否展示字体列表
export const showFontList = ref(false)

watch(showFontList, (value) => {
    if (value) {
    }
})


// 是否展示已使用的贴纸列表
export const showDecalList = ref(false)
watch(showDecalList, async (value) => {
    if(value){
        clearRightLayout()
        showDecalList.value = true
    }
})

// 是否展示模型信息
export const showModelInfo = ref(false)
watch(showModelInfo,async (value) => {
    if(value){
        clearRightLayout()
        showModelInfo.value = true
    }
})

// 是否展示顶部菜单
export const showHeader = ref(true)

// 是否展示顶部副菜单
export const showSubHeader = ref(true)

export const showLeftMenu = ref(true)

export const showBottomMenu = ref(true)

// 自定义贴纸的信息
export const operatingTextStickerStyle = reactive({
    fontFamily: '',
})

// 清空左侧布局
export function clearLeftLayout() {
    showImageSticker.value = false
    showCustomTextSticker.value = false
    showTextSticker.value = false
}

// 清空右侧布局
export function clearRightLayout() {
    showDecalList.value = false
    showModelInfo.value = false
    showWorkspace.value = false
    showDecalControl.value = false
}



export function clearLayout(){    
}   