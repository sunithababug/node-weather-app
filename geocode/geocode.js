const request = require('request');

var geoCodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);
	var url = `http://www.mapquestapi.com/geocoding/v1/address?key=Rx1uN3Kao4N69VDXA6EtAG1Vz6bKIkeS&location=${encodedAddress}`; 

	request({
		url: url,
		json: true
		}, (error, response, body) => {
			if(error){
				return callback("Error getting geocode");
			}

			if(!response || response.statusCode != 200 || !body){
				return callback("Something went wrong!! Please try a different address");
			}

			var result = body.results[0];
			var location = result.locations[0].latLng;
			console.log(`Address: ${result.providedLocation.location}`);
			console.log(`Latitude: ${location.lat}, Longitude: ${location.lng}`)

			var latLng = {};
			latLng.latitude = location.lat;
			latLng.longitude = location.lng;

			return callback(null, latLng);
	})
}

module.exports = {
	geoCodeAddress
}