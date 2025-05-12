const bcrypt = require('bcrypt')
const User = require('../models/User.js')


//Below is the registering function/controller
const registerUser = async (req,res)=>{

    try {

        const userInDatabase = await User.findOne({email: req.body.email})
        if(userInDatabase){return res.send('Username is already taken')}
        
        if(req.body.password !== req.body.confirmPassword){
            
            return res.send('Passwords do not match!')
            
        }

        const hashedPassword = bcrypt.hashSync(req.body.password,12)

        const user = await User.create({

            email: req.body.email,
            password: hashedPassword,
            first: req.body.first,
            last: req.body.last,
            picture: req.body.picture,
            recipes: []

        })
        res.send(`Thanks for registering ${user.first}`)
        
    } catch (error) {
        console.error('You messed up during the DB entry ma guy go back and fix it', error.message)
    }

}



//Below is the sign in controller

const signInUser = async (req,res) =>{

    try {
        const user = await User.findOne({email: req.body.email})
        
        if(!user){return res.send("This user does not exist")}

        const validPassword = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        
        if(!validPassword){res.send("Naah wrong")}

        req.session.user = {
            email: user.email,
            _id: user._id
        }

        return res.send(`Hi ${user.first}`)

    } catch (error) {
        console.error("Some sorta error.. figure it out",error.message)  
        res.send("nah you messed up")      
    }

}
//======= Sign out controller below

const signOutUser = async (req,res)=>{

    try {
        req.session.destroy()
        res.redirect('/')
    } catch (error) {
        console.error("You messed up a signout somehow wth")
        res.send("HAAHAA YOU CANT EVEN SIGN OUT")        
    }


}









//exporting the thingy

module.exports = {registerUser,
    signInUser,
    signOutUser
}