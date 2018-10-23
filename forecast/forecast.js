var request = require('request');

var currentWeather = (params, callback) => {
	if(!params || !params.latitude || !params.longitude){
		return callback("Invalid request");
	}

	var url = `https://api.darksky.net/forecast/9aba37f13dc5219141d2aedf720f1a3e/${params.latitude},${params.longitude}`;

	request({
		url: url,
		json: true
	}, (error, response, body) => {
		if(error || !response || !body){
			return callback("Could not fetch weather info");
		}
		var currWeather = body.currently;
		var result = {};
		result.temperature = currWeather.temperature;
		result.precipitation = currWeather.precipIntensity;
		result.summary = currWeather.summary;

		return callback(null, result);
	})
}

module.exports = {
	currentWeather
}