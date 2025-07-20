module.exports =  requestfilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('plese provide your age')
    } else if (req.query.age < 18) {
        res.send('you can not access this page')
    } else {
        next()
    }

}