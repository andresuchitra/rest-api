const express = require('express')
const app = express()
const UserRoute = require('./routes/users')
const PORT = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/users', UserRoute)

app.get('/', (req,res) => {
    res.json("Main Page")
})

app.listen(PORT, (req, res) => {
    console.log(`STARTING PORT ${PORT}`);
})