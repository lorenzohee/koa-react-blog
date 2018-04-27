/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午2:45
 */
import monk from 'monk';

const db = monk('localhost/myproject');

export async function getUsers(){
    return new Promise((resolve, reject)=>{
        var users = db.get('users')
        users.find({}, function(err, docs) {
            resolve(docs);
        })
    })
}