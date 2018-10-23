var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a+b);
			}
			reject("We can add only numbers");
		}, 1500);
	})
}

asyncAdd(1,2).then((result) => {
	console.log("Sum is ", result);
	return asyncAdd(55, result);
},
(errorMessage) => {
	console.log(errorMessage);
}).then((result) => {
	console.log("Second sum ", result);
},
(errorMessage) => {
	console.log("Second error: ", errorMessage);
});

asyncAdd('1', '2').then((result) => {
	console.log("Sum is ", result);
}).catch((errorMessage) => {
	console.log("Something went wrong");
});

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Hey. It worked');
// 		reject('Oops.. something went wrong..')
// 	}, 2500);
// });

// somePromise.then((message) => {
// 	console.log('Success: ', message);
// }, (errorMessage) => {
// 	console.log("Error: ", errorMessage);
// })