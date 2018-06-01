/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午2:45
 */
import monk from 'monk';

const db = monk('localhost/myproject');

export default class UserModel{
    async getUsersModel(){
        return new Promise((resolve, reject)=>{
            var users = db.get('users')
            users.find({}, function(err, docs) {
                resolve(docs);
            })
        })
    }

    async crateUser(user){
        return new Promise((resolve, reject)=>{
            var userCol = db.get('users');
            let user_save = JSON.parse(user);
            user_save.create_at = (new Date()).getTime();
            userCol.insert(user_save).then(res=>{
                resolve(res)
            })
        })
    }

    async getUserByEmail(email){
        return new Promise((resolve, reject)=>{
            const userCol = db.get('users');
            userCol.findOne({email: email}).then(res=>{
                resolve(res)
            })
        })
    }

}