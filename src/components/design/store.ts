import { setFullscreen } from "@/common/browser";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref, shallowRef, watchEffect, watch, nextTick, reactive } from "vue"
import { defineStore } from "pinia";

// 当前实例
export const currentController = shallowRef(null);

// 是否为暗色模式
export const isDarkMode = ref(false)

// 加载
export const isLoading = shallowRef(false);

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

// 当前操作的模型信息 , 如果不提供默认值 ， 会出现 【object】的问题
export const currentOperatingBaseModelInfo = ref({})

// 是否展示场景控制弹窗
export const showSceneControl = ref(false)

// 是否展示图片贴图的弹窗
export const showImageSticker = ref(false)

watch(showImageSticker, (value) => {
    if (value) {
    }
})

// 是否展示艺术字弹窗
export const showTextSticker = ref(false)

// 是否展示工作台窗口
export const showWorkspace = ref(true)
watch(showWorkspace, (value) => {
    if (value) {
        showDecalControl.value = false
    }
})


// 是否展示贴画控制弹窗
export const showDecalControl = ref(false)
watch(showDecalControl, (value) => {
    if (value) {
        clearRightLayout()
        showDecalControl.value = true
    }
})


// 是否展示自定义文字贴纸
export const showCustomTextSticker = ref(false)
watch(showCustomTextSticker, (value) => {
    if (value) {
        clearLeftLayout()
        showCustomTextSticker.value = true
    }
})

// 是否展示二维码
export const showQrcode = ref(false)

// 当前正在操作的贴花实例
export const operatingDecal = shallowRef()

// 是否展示图片上传弹窗
export const showImageUplaod = ref(false)

// 是否展示字体上传弹窗
export const showFontUpload = ref(false)

/*
  二维码
*/


export const qrCodeOptions = ref({
    text: "1s.design",
    width: 0,
    height: 0,
    colorDark: "#000000",
    colorLight: "rgba(0,0,0,0)",
    correctLevel: 2, // L, M, Q, H
})

/*
 条形码
*/
export const barCodeOptions = ref({

})

// 是否展示字体列表
export const showFontList = ref(false)

// 是否展示贴纸
export const showSticker = ref(false)

// 是否展示已使用的贴纸列表
export const showDecalList = ref(false)
watch(showDecalList, async (value) => {
    if (value) {
        clearRightLayout()
        showDecalList.value = true
    }
})

// 展示徽章
export const showStamp = ref(false)

/* 是否展示上传 */
export const showUpload = ref(false)

// 是否展示模型信息
export const showModelInfo = ref(false)
watch(showModelInfo, async (value) => {
    if (value) {
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


// 清空所有布局元素
export function clearLayout() {
}

// 记录当前正在操作的贴纸信息
export const operatingTextStickerOptions = ref({
    // 贴纸内容
    content: `天下第一`,
    // text color
    fontColor: '#333',
    fontGradientColor: '#333',
    // font-weight
    fontWeight: "500",
    // font-size
    fontSize: 30,
    // line-height rem
    lineHeight: 1,
    // font-style italic
    italic: false,
    // letter-spacing
    letterSpacing: .1,

    // 记录当前引用的字体信息 
    fontFamilyInfo: '',
    fontFamilyId:'',
    
    // 背景颜色
    backgroundColor: 'rgba(0,0,0,0)',
    gradientBackgroundColor:'#0099ff',
    backgroundBorderRadius: '5px',
    backgroundPadding: '',

    // 边框 
    borderColor:'#000',
    borderWidth:0,
    borderStyle:'solid'

    // 阴影效果暂时不考虑
})

export const operatingTextStickerWritingMode = ref('initial')
export const enum TextStickerWritingMode {
    INITIAL = 'initial',
    VERTICAL_RL = 'vertical-rl',
    VERTICAL_LR = 'vertical-lr',
}

export const operatingTextStickerTextOrientation = ref('upright')


// 是否展示模型上传弹窗
export const showSaveModel = ref(false)

// 系统是否成功连接 websocket
export const online = ref(false);
watch(online,(value) => {
})



// 是否为编辑模式 ,  分为编辑模式和 新建模式 ， 编辑模式也会分为编辑自己的和其他人的
export const isEdit = ref(false)
// 当前正在编辑的模型信息, 只有为编辑模型时才会赋值
export const currentEditingModelInfo = ref()


// 模型装饰品
export const showDecoration  = ref(false)

// 保留用户的截图，用于后续自行下载或者上传至网络
export const screenshots = ref([])

/*
 是否展示基础画布
*/
export const showBasicCanvas = ref(false)

/*
 是否展示3d画布
*/
export const showThreeCanvas = ref(true)

/*
    所有状态统一使用store管理
*/



export const useDesignStore = defineStore('_1s_design',() => {


    
    // 同步到缓存

    return {
        operatingTextStickerOptions:useLocalStorage('_1s_operatingTextStickerOptions',operatingTextStickerOptions),
        showBaseModelSelect:useLocalStorage('_1s_showBaseModelSelect',showBaseModelSelect),
        showBasicCanvas:useLocalStorage('_1s_showBasicCanvas',showBasicCanvas),
        showThreeCanvas:useLocalStorage('_1s_showThreeCanvas',showThreeCanvas),
        showSticker:useLocalStorage('_1s_showSticker',showSticker),
        currentOperatingBaseModelInfo:useLocalStorage('_1s_currentOperatingBaseModelInfo',currentOperatingBaseModelInfo),
    }
})








