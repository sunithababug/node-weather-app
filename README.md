# node-weather-app
Sample node app highlighting difference between callbacks and promises. The core feature of the app is to get an address string from the user, find the geographical location of the address (latitude and longitute) using MapQuest API and then use that to get the weather information from DarkSky API.

## Usage :

```bash
node app.js -a "Chennai India"
```

```bash
node app-promise.js -a "Chennai India"
```

## Key Files:
[app.js](https://github.com/sunithababug/node-weather-app/blob/master/app.js) - This one demonstrates the implementation using callbacks. This implementation needs more lines of code and is comparatively the more complex one. The scripts in forecast/forecast.js and geocode/geocode.js is added to support this implementation.

[app-promise.js](https://github.com/sunithababug/node-weather-app/blob/master/app-promise.js) - This uses promise-ready npm package axios to implement the feature. This is a standalone file now and is far less complicated than before.

[promise-2.js](https://github.com/sunithababug/node-weather-app/blob/master/playground/promise-2.js) - This shows how to wrap non promise-ready features to make them compatible with promise implementation. This has some more complexity when compared to using a promise-ready feature. However, it still helps us avoid issues like multiple callback invokations which can happen if we do not use Promise. Also promise allows us to have once function each for success handling and error handling. This is better than the single callback implementation which needs us to write complex if - else statements for success and error handling. 
