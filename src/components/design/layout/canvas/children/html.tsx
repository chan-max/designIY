

/**
 * @description 支持 html 画布元素
*/


import { canvasStickerOptions, currentCanvasControllerInstance, updateRenderingCanvas } from "../index.tsx"
import { getPositionInfoFromOptions, formatToNativeSizeString, createFilterFromOptions, createTransformString } from '../helper.tsx'
import { computed, defineComponent, onMounted, onUpdated, ref } from "vue"
import { createFilterDefaultOptions, createPositionDefaultOptions, createTransformDefaultOptions } from "./defaultOptions.tsx"
import Utils from '@/common/utils'
import { onCanvasChildSetup, onBeforeReturnRender } from "./commonHooks.ts"
import { asyncComputed } from '@vueuse/core'


export const createDefaultCanvasChildHtmlOptions = () => {

    const canvasUnit = canvasStickerOptions.value.unit

    return {
        type: 'html',
        htmlContent: '',
        transform: createTransformDefaultOptions(canvasUnit),
        filter: createFilterDefaultOptions(canvasUnit),
        zIndex: 0,
    }
}



export function createCanvasChildHtml(options) {
    return <Html options={options} onVnodeUpdated={updateRenderingCanvas} onVnodeMounted={updateRenderingCanvas}></Html>
}



export const Html = defineComponent({
    props: {
        options: null
    },
    setup(props, ctx) {


        const targetElRef = ref()

        onCanvasChildSetup({
            targetEl: targetElRef,
            options: props.options,
            props: props
        })



        // onMounted(init)
        // onUpdated(init)

        // async function init() {
        //     if (targetElRef.value) {
        //         targetElRef.value.innerHtml = props.options.htmlContent
        //     }
        // }

        return () => {


            // 依赖收集
            props.options.htmlContent

            var containerStyle: any = {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
            }


            var style: any = {
                flexShrink: 0,
                transform: createTransformString(props.options.transform),
                filter: createFilterFromOptions(props.options.filter),
                zIndex: props.options.zIndex,
                width: '100%',
                Height: '100%',
            }



            onBeforeReturnRender({
                style,
                options: props.options
            })




            return <div style={containerStyle}>
                <div style={style} ref={targetElRef} v-html={props.options.htmlContent}>

                </div>
            </div>
        }
    }
})




