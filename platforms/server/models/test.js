/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:17
 * @Version 1.0.0
 **/
import monk from 'monk';


const test = function(){
	console.log('@@@##############################')
	const url = 'localhost:27107/myproject';
	const db = monk(url);
	db.then(()=>{
		console.log('Connect mongodb success!')
	}).catch((e)=>{
		console.log('!!!!!!!!!!!!! there is a problem+'+e)
	})
}

export default test;