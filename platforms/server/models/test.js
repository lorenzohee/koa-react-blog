import monk from 'monk';


const dbset = function(){
	const url = 'localhost:27107/myproject';
	const db = monk(url);
	db.then(()=>{
		console.log('Connect mongodb success!')
	})
}

export default dbset;