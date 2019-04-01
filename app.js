require('dotenv').config()
const express = require('express')
const app = express()
const ApiRoute = require('./routes/api')
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//top level api route (/users, /signin, /signup will defined there)
app.use('/api', ApiRoute)

app.get('/', (req,res) => {
    res.json("Main Page")
})

app.listen(PORT, (req, res) => {
    console.log(`STARTING PORT ${PORT}`);
})