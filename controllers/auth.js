const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user
const bcrypt = require('bcrypt');

exports.login = (req, res)=>{    
    //check if email and pass match in db tbl user
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!

    User.findOne({where: {email}}).then (user=>
        {
        const authorization = bcrypt.compareSync(password, user.password) // autenttikasi email dan password
        if(authorization){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                login : "succes",
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })

    
}
exports.register = (req, res) =>{
    const hashedPassword = bcrypt.hashSync(req.body.password,8) // mengenskripsi password
    User.create({
        email : req.body.email,
        password : hashedPassword
    }).then( user => {
        const token = jwt.sign({ userId: user.id }, 'my-secret-key')
        res.send({
            login : "succses",
            token
        }) 
    })
}