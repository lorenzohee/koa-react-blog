/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 下午2:21
 */
import jwt from 'koa-jwt'
import UserModel from '../models/usersModel';

const userModel = new UserModel();

export async function getUsersCtr(ctx){
    const users = await userModel.getUsersModel();
    ctx.body=users
}

export async function register(ctx){
    const user = await userModel.crateUser(ctx.request.body);
    ctx.body=user
}

export async function login(ctx){
    const postData = ctx.request.body;
    const user = userModel.getUserByEmail(postData.email)
    if(user){
        if(postData.password == user.password){
            const token = jwt.sign(user._id, 'jwt_secret_lorenzo', {expiresIn: 30 * 60 /* 30 mins */})
            user.token = token;
            user.isAuthen = true;
        }else{
            user.isAuthen = false;
            user.authMsg = '用户名或密码不正确'
        }
    }else{
        user.isAuthen=false;
        user.authMsg = '用户邮箱不存在'
    }
    ctx.body=user
}