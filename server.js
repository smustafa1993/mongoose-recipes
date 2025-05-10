const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')

const PORT = process.env.PORT?process.env.PORT : 3200


require('dotenv').config()

const app = express()

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))
app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
}))

app.get('/',(req,res)=> {

    res.send("Module 2 review. App is working fine so far!")
})

app.listen(PORT,()=>{
    console.log(`Running server on ${PORT}`)
})

