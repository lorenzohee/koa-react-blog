/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 下午2:21
 */
import {getUsers} from '../models/usersModel';

export default async(ctx, next)=>{
    const users = await getUsers();
    ctx.body={
        state: 'success',
        data: users
    }
}