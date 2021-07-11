require('dotenv').config()
const express = require("express")
const redis = require("redis")

const PORT = process.env.PORT || 9000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express()

app.get('/ping', (req, res) => {
    res.send('pong')
})


app.listen(9000, function () {
    console.log(`Server started on port ${PORT}`);
});