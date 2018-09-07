const request = require('request');
const yargs   = require('yargs');
const axios   = require('axios');

const argv = yargs        //to take input from command line
    .option({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

encodedAddress = encodeURIComponent(argv.address); 
geocodeURL     = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeURL)
.then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address!');
    }
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/cc1f374631991b14d386216fb546f892/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response)=> {
    console.log(`It's currently ${response.data.currently.temperature}. It feels like ${response.data.currently.apparentTemperature}`);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers!!');
    }else{
        console.log(e.message);
    }
});

