const request = require('request');

const getWeather= (lat, long,callback) =>{
request({
    url: `https://api.darksky.net/forecast/cc1f374631991b14d386216fb546f892/${lat},${long}`,
    json: true
}, (error, response,body)=>{
  
    if(!error && response.statusCode === 200){
        callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature});
    }else{
        callback('Unable to fetch the weather forecast!!!');
    };
   
})
};

module.exports = {
    getWeather
}

