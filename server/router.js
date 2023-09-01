import { loginHook } from './api/base/login.js'
import {getBannerModelHook} from './api/common/getBannerModel.js'
import {getBaseModelListHook} from './api/common/getBaseModelList.js'
import {getBaseSkyboxHook } from "./api/common/getSkybox.js";
import { getWebStickersHook } from "./api/design/getStickers.js";
import { getWordArtStickerHook,createWordArtHook } from "./api/wordArt/wordArt.js";
import { baseModelUploadHook } from "./api/base/baseModelUpload.js";
import { signupHook } from "./api/base/signUp.js";
import {imageUploadHook} from './api/base/imageUpload.js'
import { getImageListHook } from './api/common/getImageList.js';


export const initRouter = (router, sequelize, app) => {
    let hooks = [
        loginHook,
        signupHook,
        getBannerModelHook,
        getBaseModelListHook,
        getBaseSkyboxHook,
        getWebStickersHook,
        getWordArtStickerHook,
        createWordArtHook,
        baseModelUploadHook,
        imageUploadHook,
        getImageListHook
    ]
    hooks.forEach((hook) => hook(router, sequelize, app))
}