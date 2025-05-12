const User = require('../models/User')

const getUserById = async (req,res)=>{

    try {
        
        const user = await User.findById(req.params.id)
        
        const data = {
            first: user.first,
            last: user.last,
            picture: user.picture,
            recipe: user.recipe
        }

        res.send(data)
    } catch (error) {
        console.error("You messed up getting ID ma guy - Error message: ",error.message)
    }
}

module.exports = {getUserById}