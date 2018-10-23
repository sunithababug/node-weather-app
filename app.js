const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

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

geocode.geoCodeAddress(argv.address, (error, result) => {
	if(error){
		return console.log(error);
	}
	console.log(JSON.stringify(result));
	forecast.currentWeather(result, (error, weather) => {
		if(error){
			return console.log(error);
		}
		console.log(JSON.stringify(weather, undefined, 2));
	});
});