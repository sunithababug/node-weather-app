const yargs = require('yargs');
const axios = require('axios');

var argv = yargs
		.options({
			a: {
				demand: true,
				alias: 'address',
				describe: 'Address to fetch weather for',
				string: true
			}
		})
		.help()
		.alias('help', 'h')
		.argv;

var encodedAddress = encodeURIComponent(argv.address);
var url = `http://www.mapquestapi.com/geocoding/v1/address?key=Rx1uN3Kao4N69VDXA6EtAG1Vz6bKIkeS&location=${encodedAddress}`; 

axios.get(url)
	.then((response) => {
		if(!response || !response.data){
			throw new Error("Could not find location");
		}
		var result = response.data.results[0];
		var location = result.locations[0].latLng;
		var weatherURL = `https://api.darksky.net/forecast/9aba37f13dc5219141d2aedf720f1a3e/${location.lat},${location.lng}`;
		return axios.get(weatherURL);
	})
	.then((response) => {
		var currWeather = response.data.currently;
		var result = {};
		result.temperature = currWeather.temperature;
		result.precipitation = currWeather.precipIntensity;
		result.summary = currWeather.summary;
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	})

 