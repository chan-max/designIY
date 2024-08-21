import { SvgFilterCategory } from '@/types/filter'


/* 
    自定义的滤镜效果
*/

export type SvgFilterCustomEffectType = {
    category: SvgFilterCategory,
    filterLabel: string,
    filterId: string,
    disabled?: boolean,
    render: Function,
    displayRender?: Function,
}





import { createDefaultFilter } from './default'
import { createMosaicFilter } from './mosaic'
import { createPureColorMatrixFilterRender, BlackAndWhiteMatrix, vintage } from './pureColor'
import {
    twisted,
    line,
    maorongrong,
    huichenkeli,
    xRays,
    xRaysWarm,
    noise,
    yuzhouxingguang,
    heibaixiangsu,
    xiaobolang,
    qiangzhi,
    caiseguang,
    caiseguangwen,
    shenseguangwen,
    shuguangwen,
    huichen,
    yuanxingshitouwenli,
    shuibowen,
    yanwu
} from './special.tsx'
import { neonLightsText, xingguang, saibopengke, xiuxibanban, waiwainiuniu,xuankumoshui } from './text.tsx'
import {baisebowenqiangzhi,xingkong,muwen,nainiu,micai,fensejiandan} from './pureBackground.tsx'


export const SvgFilterCategoryOptions = [
    {
        label: '常用',
        value: SvgFilterCategory.Normal,
        children: [
            {
                category: SvgFilterCategory.Normal,
                filterLabel: '默认 (原始图)',
                filterId: 'default',
                render: createDefaultFilter
            },
            {
                category: SvgFilterCategory.Normal,
                filterLabel: '马赛克效果',
                filterId: 'mosaic',
                render: createMosaicFilter
            },
        ]
    },
    {
        label: '纯颜色',
        value: SvgFilterCategory.PureColor,
        children: [
            {
                category: SvgFilterCategory.PureColor,
                filterLabel: '黑白',
                filterId: 'blackWhite',
                render: createPureColorMatrixFilterRender('blackWhite', BlackAndWhiteMatrix)
            },
            {
                category: SvgFilterCategory.PureColor,
                filterLabel: '复古',
                filterId: 'vintage',
                render: vintage
            },
        ]
    },
    {
        label: '特殊效果',
        value: SvgFilterCategory.SpecialEffect,
        children: [
            twisted,
            maorongrong,
            huichenkeli,
            xRays,
            xRaysWarm,
            noise,
            line,
            yuzhouxingguang,
            heibaixiangsu,
            xiaobolang,
            qiangzhi,
            caiseguang,
            caiseguangwen,
            shenseguangwen,
            shuguangwen,
            huichen,
            yuanxingshitouwenli,
            shuibowen,
            yanwu
        ]
    },
    {
        label: '文字适用',
        value: SvgFilterCategory.Text,
        children: [
            xingguang,
            neonLightsText,
            saibopengke,
            xiuxibanban,
            waiwainiuniu,
            xuankumoshui,
            
        ]
    },
    {
        label: '纯背景',
        value: SvgFilterCategory.PureBackground,
        children: [
            baisebowenqiangzhi,
            xingkong,
            muwen,
            nainiu,
            micai,
            fensejiandan
        ]
    }
]


export const BuiltInSvgFilterRenderList = SvgFilterCategoryOptions.reduce((res, item) => {
    if (item.children) {
        return res.concat(item.children.filter((c) => !c.disabled))
    } else {
        return res
    }
}, [])





