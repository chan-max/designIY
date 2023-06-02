import { signupHook } from "./api/base/signup.js";
import { loginHook } from './api/base/login.js'
import {getBannerModelHook} from './api/common/getBannerModel.js'
import {getBaseModelListHook} from './api/common/getBaseModelList.js'
import {getBaseSkyboxHook } from "./api/common/getSkybox.js";
import { getStickersHook } from "./api/design/getStickers.js";

export const initRouter = (router, sequelize, app) => {
    let hooks = [
        loginHook,
        signupHook,
        getBannerModelHook,
        getBaseModelListHook,
        getBaseSkyboxHook,
        getStickersHook
    ]
    hooks.forEach((hook) => hook(router, sequelize, app))
}