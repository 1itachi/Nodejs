const utils = require('./utils');
const expect = require('expect'); 

it('should add two numbers', ()=>{
    let res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');


    // if (res!== 44){
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});


it('should add 2 numbers asynchronously', (done)=>{
  utils.addaSync(3,4,(sum)=>{
    expect(sum).toBe(7).toBeA('number');
    done();
  });
    
});

it('square two numbers', ()=> {
    let res = utils.square(4);


    expect(res).toBe(16).toBeA('number');
    // if(res!==16){
    //     throw new Error(`Expected 16, but got ${res}`);
    // }
});

it('should square a number asynchronously', (done)=>{
    utils.squareAsync(4, (res)=>{
        expect(res).toBe(16).toBeA('number');
        done();
    });
});

it('should capture name', ()=>{
    let person ={
        age:10,
        location:'city',
        name: 'andrew mead'
    };

    let res = utils.setName(person,person.name);
    expect(res.firstName).toBeA('string').toBe('andrew');
    expect(res.lastName).toBeA('string').toBe('mead');
});


