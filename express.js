const express = require('express');
const filter = require('./middleware.js');
const app = express();
const route = express.Router()
// const requestfilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send('plese provide your age')
//     } else if (req.query.age < 18) {
//         res.send('you can not access this page')
//     } else {
//         next()
//     }

// }
// app.use(requestfilter);
route.use(filter);
app.get('/', (req, res) => {
    res.send('<h1>this is a home page</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>this is a about page</h1>' + req.query.name)
})
route.get('/contact', (req, res) => {
    res.send(`
        <input type="text" placholder="enter your name" value =${req.query.name}>
        <button>Add</button>
        `)
})
route.get('/inform', (req, res) => {
    res.send([
        { name: 'aasif', age: 30 },
        { name: 'imrana', age: 28 },
        { name: 'saeem', age: 10 }
    ])
})
app.use('/', route)
app.listen(1000, () => {
    console.log('Server running on http://localhost:1000');
});