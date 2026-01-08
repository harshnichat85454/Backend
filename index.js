require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req ,res) => {
    res.send('hello world!')
})

app.get('/twitter' , (req , res) => {
    res.send("kya re jade ???")
})

app.get('/login1' , (req ,res) => {
    res.send('<h1>you are successfully loged in to my account</h1>')
})

app.listen(process.env.PORT , () => {
    console.log(`example app listening on port ${process.env.PORT}`)
})