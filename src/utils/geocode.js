const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidmlzaGFsbXNpbWZvcm0iLCJhIjoiY2w0aWRsZ2w5MHZ4ZzNxc3Y0c3A2cm01ZiJ9.jwDoyKiXl55jrbrp2RMV9w&limit=1';

    request( { url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const featuresData = body.features[0];
            callback(undefined, {
                latitude: featuresData.center[1],
                longitude: featuresData.center[0],
                location: featuresData.place_name
            })
        } 
    })
}

module.exports = geocode;