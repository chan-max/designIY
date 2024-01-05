/*
 * @Author: chan-max jackieontheway666@gmail.com
 * @Date: 2023-12-16 12:40:25
 * @LastEditors: chan-max jackieontheway666@gmail.com
 * @LastEditTime: 2023-12-26 21:20:17
 * @FilePath: /1s/server/router.js
 * @Description:
 *
 * Copyright (c) 2023 by 1s, All Rights Reserved.
 */
import { getBannerModelHook } from "./api/common/getBannerModel.js";
import {
  injectBaseModelRoute,
  getBaseModelById,
  uploadBaseModelHook,
} from "./api/baseModel.js";
import { getBaseSkyboxHook } from "./api/common/getSkybox.js";
import { uploadFontHook, getFontsHook, getFontById } from "./api/font.js";

import {
  signupHook,
  getUserListHook,
  updateUserInfoHook,
  loginHook,
  getAccountStatusHook,
} from "./api/user.js";

import { getImageHook, getImageById, imageUploadHook } from "./api/image.js";
import { uploadModelHook } from "./api/base/uploadModel.js";
import { getModelListHook, getModelById } from "./api/model.js";
import { sendEmailHook } from "./api/email.js";
import {
  uploadTextSticker,
  getTextSticker,
  getTextStickerById,
} from "./api/textSticker.js";

import { getList } from "./api/list.js";

import { addModelComment, getModelComment } from "./api/comment.js";

export const initRouter = (...params) => {
  let hooks = [
    loginHook,
    signupHook,
    getBannerModelHook,
    injectBaseModelRoute,
    getBaseSkyboxHook,
    uploadBaseModelHook,
    imageUploadHook,
    getImageHook,
    uploadFontHook,
    getFontsHook,
    uploadModelHook,
    getModelListHook,
    sendEmailHook,
    getUserListHook,
    updateUserInfoHook,
    uploadTextSticker,
    getTextSticker,
    getAccountStatusHook,
    getImageById,
    getBaseModelById,
    getTextStickerById,
    getFontById,
    getModelById,
    getList,
    addModelComment,
    getModelComment,
  ];
  hooks.forEach((hook) => hook(...params));
};
