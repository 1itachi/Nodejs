const request = require('request');
const yargs   = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.a, (error, result)=>{
    if(error){
        console.log(error);
    }else {
        console.log(result.address);
        weather.getWeather(result.latitude,result.longitude,(error,Weatherresult)=>{
            if(error){
                console.log(error);
            }else{
                console.log(`It's currently ${Weatherresult.temperature}. It feels like ${Weatherresult.apparentTemperature}.`);
            }
        });
        
    }

});

