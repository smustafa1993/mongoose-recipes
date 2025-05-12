const { application } = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully")
    } catch (error) {
        console.error("Woops you messed up",error.message)
    }   
}

connect()
module.exports = mongoose.connection


