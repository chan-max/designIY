
import { createApp } from 'vue'
import App from '../mobile/App.vue'
import { ConfigProvider } from 'vant';
import 'animate.css';
import 'default-passive-events'
import 'vant/lib/index.css';

import VConsole from 'vconsole';
import ElementPlus from 'element-plus'

import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css'
import { router} from '../mobile/router'

import '@/style/cover-antdesign.less'
import 'animate.css';
import '@/style/base.less'
import 'default-passive-events'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '@/style/cover-elementplus.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'



export function createMobileApp(){
const app = createApp(App)
const vConsole = new VConsole({ theme: 'dark' });
app.use(ElementPlus)

app.use(ConfigProvider);
const pinia = createPinia()

app.use(pinia)

app.use(router)

app.mount('#app')
}















