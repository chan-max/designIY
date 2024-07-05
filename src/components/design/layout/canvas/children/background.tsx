import { canvasOptions } from '../index.tsx'
import { getPositionInfoFromOptions ,formatToNativeSizeString} from '../helper.tsx'
import { defineComponent, ref } from 'vue'

/*
*/

export const createDefaultCanvasChildBackgroundOptions = () => {
    const canvasUnit = canvasOptions.value.unit
    return {
        type: 'background',
        position: {
            center: true,
            verticalCenter: true,
            horizontalCenter: true,
            top: {
                value: 0,
                unit: canvasUnit
            },
            left: {
                value: 0,
                unit: canvasUnit
            },
            bottom: {
                value: 0,
                unit: canvasUnit
            },
            right: {
                value: 0,
                unit: canvasUnit
            }
        },
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        skewX: 0,
        skewY: 0,
        width: {
            value:100,
            unit:canvasUnit
        },
        height: {
            value:100,
            unit:canvasUnit
        },
        backgroundColor: {
            color:'#000',
            colorType:'pure'
        },
    }
}

export const Background = defineComponent({
    props: {
        options: null
    },
    setup(props, ctx) {

        const options = props.options


        return () => {

            // 处理布局
            const {
                containerStyle: _containerStyle,
                style: _style
            } = getPositionInfoFromOptions(props.options.position)

            const containerStyle = {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: props.options.zIndex,
                ..._containerStyle
            }



            const style = {
                width: formatToNativeSizeString(props.options.width),
                height: formatToNativeSizeString(props.options.height),
                background: props.options.backgroundColor.color,
                flexShrink:0,
                ..._style
            }

            if (props.options.backgroundImage) {
                style.backgroundImage = `url(${props.options.backgroundImage.url})`
            }


            return <div style={containerStyle}>
                <div style={style}></div>
            </div>
        }
    }
})

export function createCanvasChildBackground(options) {
    return <Background options={options}></Background>
}