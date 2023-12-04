import { resolveFilePath } from "./url";
import{ apiInstance,source} from "./apiInstance";
import { Url } from "./url";
import { buildURL } from "@/common/url";
import { format1stf } from "./format";

// 注册 ，账号密码手机号
export const signup = (data: any) =>
  new Promise(async (resolve, reject) => {
    let res = await apiInstance.post(Url.SINGUP, data);
    resolve(res.data);
  });

// 登录
export const login = (data) =>
  new Promise(async (resolve, reject) => {
    let res = await apiInstance.post(Url.LOGIN, data);
    resolve(res.data);
  });

// 获取首页展示栏模型
export const getBannerModel = () =>
  new Promise(async (resolve, reject) => {
    const res = await apiInstance.get(Url.GET_BANNER_MODEL);
    resolve(res?.data?.data?.modelInfo);
  });

// 获取可以进行编辑的内置模型
export const getBaseModel = (params?: any) =>
  new Promise(async (resolve, reject) => {
    const res = await apiInstance.post(Url.GET_BASE_MODEL, params);
    resolve(
      res.data.data
    );
  });

// 获取基本盒子天空模型
export const getBaseSkybox = () => apiInstance.get("getBaseSkybox");

// 获取网络热门贴图
export const getWebStickers = () => apiInstance.post("getWebStickers");

// 获取我的贴图
export const getMyStickers = () => apiInstance.post("getMyStickers");

// 上传基础模型
export const uploadBaseModel = (data: any) =>
  apiInstance.post(Url.UPLOAD_BASE_MODEL, data);

// 上传图片
export const uploadImage = (data: any) =>
  apiInstance.post(Url.UPLOAD_IMAGE, data);

// 获取图片列表
export const getImage = () =>
  new Promise(async (resolve: any, reject: any) => {
    let res = await apiInstance.post(Url.GET_IMAGE_LIST);
    resolve(res.data.data);
  });

// 上传文字字体文件
export const uploadFont = (data) => apiInstance.post(Url.UPLOAD_FONT, data);

// 获取所有字体

export const getFonts = () =>
  new Promise(async (resolve, reject) => {
    const res = await apiInstance.get(Url.GET_FONTS);
    resolve(res.data.data);
  });

export const uploadModel = (data) => apiInstance.post(Url.UPLOAD_MODEL, data);

// 获取模型列表
export const getModelList = (data) =>
  new Promise(async (resolve, reject) => {
    const res = await apiInstance.post(Url.GET_MODEL_LIST, data);
    const _data = res.data.data.map((item) => {
      return {
        img: resolveFilePath(item.img),
        modelInfo: item.modelInfo,
      };
    });
    resolve(_data);
  });

// 发送邮件
export const sendEmail = (data) => apiInstance.post(Url.SEND_MAIL, data);

// 获取用户列表
export interface UserListInfo {
  total: number;
  list: any[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
}
export const getUserList = (params?: any) =>
  new Promise(async (resolve, reject) => {
    const res = await apiInstance.post(Url.GET_USER_LIST, params);
    resolve(res.data.data);
  });


// 更新用户信息
export const updateUserInfo = (params) => apiInstance.post(Url.UPDATE_USER_INFO, params)


// 上传文字贴纸
export const uploadTextSticker = (params) => apiInstance.post(Url.UPLOAD_TEXT_STICKER, params)


// 获取文字贴纸
export const getTextSticker = (params?: any) => new Promise(async (resolve, reject) => {
  const data = await apiInstance.post(Url.GET_TEXT_STICKER, params)
  resolve(data.data.data)
}) 


// 获取账号的状态，，是否注册，是否已注册，是否是管理员，是否被禁用等
export const getAccountStatus = (params) => new Promise(async (resolve, reject) => {
  const data = await apiInstance.post(Url.GET_ACCOUNT_STATUS, params)
  resolve(data.data)
}) 

// 根据图片id来查询图片
export const getImageById = (id:string) => new Promise(async (resolve, reject) => {
  const data = await apiInstance.post(Url.GET_IMAGE_BY_ID, {id})
  resolve(data.data.data)
}) 


// 根据图片id来查询图片
export const getBaseModelById = (id:string) => new Promise(async (resolve, reject) => {
  const data = await apiInstance.post(Url.GET_BASE_MODEL_BY_ID , {id})
  resolve(data.data.data)
})


export const getTextStickerById = (id:string) => new Promise(async (resolve, reject) => {
  const data = await apiInstance.post(Url.GET_TEXT_STICKER_BY_ID , {id})
  resolve(data.data.data)
})