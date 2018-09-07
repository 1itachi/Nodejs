//chained promise
var asyncadd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Arguments must be numbers!');
            }     
        },2500)
    });
};


asyncadd(4,'8').then((sum)=>{
    console.log('Success!! Numbers added, ', sum);
    return asyncadd(sum,45);
}).then((res)=>{
    console.log('Sum of result and a number ', res);
}).catch((errMsg)=>{
    console.log(errMsg);
});




//simple promise
// var somePromise = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         //resolve('Hey!, It worked!');
//         reject('sorry, didnt work!');
//     }, 2500);
// });

// somePromise.then((message)=>{
//     console.log('Success: ', message);
// }, (errMsg)=>{
//     console.log("oops! ",errMsg );
// });