const express = require('express');
const hbs     = require('hbs');
const fs      = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');


hbs.registerHelper('getCurrentYear', ()=>{     //first looks into helper
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.set('view engine', 'hbs');
 

app.use((req,res,next)=>{
    var now = new Date().toString();
    var log=`${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log +'\n',(err)=>{
        if(err)
        throw(err);
    });
    next();
});


app.use((req,res,next)=>{
    
        res.render('maintainance.hbs');
    
});

app.use(express.static(__dirname+'/public'));  //can access any file in public folder by giving the file name in url 

app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'This is the home page',
        welcome: 'Welcome to home page'      
    })
})

app.get('/bad', (req,res)=>{
    res.send(
    {
        status: 404,
        errorMessage: 'Page not found!!'
    });
});

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        pageTitle: 'This is the about page'
   
    }); //render is used to render pages through view engine
})

app.listen(3000, ()=>{
    console.log('Server is up at port 3000');
});