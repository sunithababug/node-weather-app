console.log("Starting app");

setTimeout(() => {
	console.log("Inside callback");
}, 2000)

setTimeout(() => {
	console.log("Inside callback 2");
}, 0)

console.log("Finishing up");