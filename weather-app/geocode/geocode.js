const request = require('request');


const geocodeAddress = (address, callback) =>{


encodedAddress = encodeURIComponent(address);  //to encode string for ex: %20 for spaces
//console.log(encodedAddress);

//console.log(argv);

request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body)=>{

    if (error){
        callback('Unable to connect to Google servers!');
    }else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find the given address');
    }else if(body.status == 'OK'){
    // console.log(JSON.stringify(response, undefined, 2));
        callback(undefined,{
         address: body.results[0].formatted_address,
         latitude: body.results[0].geometry.location.lat,
         longitude: body.results[0].geometry.location.lng
         });
    }

});

}

module.exports = {
    geocodeAddress
}