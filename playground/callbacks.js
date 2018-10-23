var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'Sunitha'
	};
	setTimeout(() => {
		callback(user);
	}, 3000);
	// callback(user);
};

getUser(1, (user) => {
	console.log(user);
})