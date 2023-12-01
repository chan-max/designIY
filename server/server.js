
import Koa from "koa";
import Router from "koa-router";
import cors from "koa2-cors";
import jwt from "jsonwebtoken";
import path from "path";
import _static from "koa-static";
import { koaBody } from "koa-body";
import { fileURLToPath } from "url";
import { initRouter } from "./router.js"
import ip from "ip";
import { createRedisClient } from "./redis/index.js";
import { getRelativePath, getUploadPath } from "./fileManage.js"
import dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const redis = await createRedisClient()

const app = new Koa();
const router = new Router();

app.use(cors({ origin: "*", credentials: true }));

import db from './sequelize/models/index.js'

initRouter(router, db.sequelize, app, redis);

// 前端打包后的代码
app.use(_static(path.join(__dirname, "../dist")));
app.use(_static(path.join(__dirname, "../static")));

import { uploadsPath } from "./fileManage.js"
import { formatFilePath } from "./util.js";

app.use(_static(uploadsPath()));

app.use(koaBody({
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: getUploadPath(),
        // 保留文件扩展名
        keepExtensions: true,
    }
}));

// 定义中间件
app.use(async (ctx, next) => {
    // 将文件将对路径转换为全路径
    ctx.relativePathToPreviewPath = (path) => {
        return formatFilePath(`${ctx.protocol}://${ctx.host}${path}`);
    }

    // 获取上传文件的相对路径
    ctx.getUploadFileRelativePath = (key = 'file') => {
        return getRelativePath(ctx.request.files[key].filepath)
    }

    await next()
})


app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000

// 获取当前服务运行的主机名
export function getHost() {
    return ip.address() + ':' + port
}

await app.listen(port);
console.log("1s is running at http://localhost:3000");
