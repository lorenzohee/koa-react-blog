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