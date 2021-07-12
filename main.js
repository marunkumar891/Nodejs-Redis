require('dotenv').config()
const redis = require("./redisConfig/redis")
//global.redisClient = redis()

const express = require("express")
const PORT = process.env.PORT || 9000;

const parser = require("body-parser")

const app = express()
app.use(parser.json())

const userController = require("./controllers/repoController")

app.get('/ping', (req, res) => {
    res.send('pong')
})


app.get('/finduser/:username', userController.FindUser);

app.listen(9000, function () {
    console.log(`Server started on port ${PORT}`);
});

