console.log("Starting up!!!");

setTimeout(()=>{
    console.log('logs after 2 seconds');
}, 2000);


setTimeout(()=>{
    console.log('logs after 0 seconds');
}, 0);

console.log('Finishing up!!!');