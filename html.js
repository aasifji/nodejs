const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'public');
app.set('view engine' ,'ejs');
// console.log(publicpath)
// app.use(express.static(publicpath))
// how to remove .html extenstion
app.get('/',(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})
app.get('/home',(_,res)=>{
    res.sendFile(`${publicpath}/Home.html`)
})
app.get('/profile',(_,res)=>{
    const user = {
        name:'aasif',
        age:30,
        city:'noida'
    }
    res.render('profile',{user});
})
app.get('/login',(_,res)=>{
    res.render('login')
})
// app.get('/*',(_,res)=>{
//     res.sendFile(`${publicpath}/nopage.html`)
// })
app.listen(1000)