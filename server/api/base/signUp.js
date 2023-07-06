import { ResponseStatusCodeEnum } from "../../../common/enum/statusCode.js"


export const signupHook = (router, sequelize, app) => router.post('/signup', async (ctx, next) => {
    const data = ctx.request.body
    const { phonenumber, account, password } = data

    const table = sequelize.models.users

    
    let _user = await table.findOne({ where: { account } })

    if (_user) {
        ctx.body = {
            status: ResponseStatusCodeEnum.ACCOUNT_ALREADY_EXIST
        }
        return
    }

    try {
        await table.create(data)
        return ctx.body = {
            status: ResponseStatusCodeEnum.SIGNUP_SUCCESS
        }
    } catch (error) {
        return ctx.body = {
            status: ResponseStatusCodeEnum.UNKNOW_ERROR,
            error
        }
    }
})




