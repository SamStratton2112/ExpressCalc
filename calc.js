const express = require('express');
const ExpressError = require('./error')
const { getMean, getMedian, getMode } = require('./funcs')

const app = express();

app.use(express.json());
app.get('/mean', (req,res,next)=>{
    if (!req.query.nums) {
        throw new ExpressError('Bad Request. Query Cannot Be Empty', 400)
    }
    let numbers = req.query.nums.split(",");
    let mean = getMean(numbers)
    let response = {
        opperation : "Mean",
        value : mean
        }
    return res.json(response)
})

app.get('/median', (req,res,next)=>{
    if (!req.query.nums) {
        throw new ExpressError('Bad Request. Query Cannot Be Empty', 400)
    }
    let numbers = req.query.nums.split(",");
    let median = getMedian(numbers)
    let response = {
        opperation : "Median",
        value : median,
        }
    return res.json({ response })
})

app.get('/mode', (req,res,next)=>{
    if (!req.query.nums) {
        throw new ExpressError('Bad Request. Query Cannot Be Empty', 400)
    }
    let numbers = req.query.nums.split(",");
    let mode = getMode(numbers)
    let response = {
        opperation : "Mode",
        value : mode,
        }
    return res.json({ response })
})

app.use(function (req,res,next){
    const e = new ExpressError("Page Not Found", 404);
    return next(e)
})   

app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let msg = err.msg;
    return res.status(status).json({
        error : {msg, status}
    })
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})
