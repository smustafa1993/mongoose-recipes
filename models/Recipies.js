const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    author: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
},{timestamps:true})

const Recipe = mongoose.model('Recipe',recipeSchema)

module.exports = Recipe