var request = require('request');

var geocodeAddress = (address)=> {

    return new Promise((resolve, reject)=>{

        encodedAddress = encodeURIComponent(address);  //to encode string for ex: %20 for spaces     
        request({
            url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body)=>{
        
            if (error){
                reject('Unable to connect to Google servers!');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find the given address');
            }else if(body.status == 'OK'){
                
                result ={
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
                resolve(result);
            }       
        });
    })

};


geocodeAddress('19146').then((location)=>{
    console.log(JSON.stringify(location, undefined,2));
},(errMsg)=>{
    console.log(errMsg);
});