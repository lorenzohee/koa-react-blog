/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 下午2:21
 */
import UserModel from '../models/usersModel';

const userModel = new UserModel();

export async function getUsersCtr(ctx){
    const users = await userModel.getUsersModel();
    ctx.body={
        state: 'success',
        data: users
    }
}

export async function register(ctx){
    const user = await userModel.crateUser(ctx.request.body);
    ctx.body={
        state: 'success',
        data: user
    }
}

export async function login(ctx){
    ctx.body={
        state: 'success',
        data: user
    }
}