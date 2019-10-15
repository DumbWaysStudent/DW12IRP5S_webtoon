const models = require('../models')
const Foryou = models.foryou
const User = models.user
const Episode = models.episodes
// const Page = model.pages

// exports.index = (req, res) => {
//     Foryou.findAll({
//         include: [{
//             model: User,
//             as: "createdBy"
//         }]
//     }).then(foryous=>res.send(foryous))
// }
exports.index = (req, res) => {
    let query

    if(req.query.title){
        query = Foryou.findAll({
            where:{
                title : req.query.title
            },
            include : [{
                model : User,
                as : "created_By"
            }]
        })
    }else if (req.params.id){
        query = Foryou.findAll({
            where:{
                title : req.query.id
            },
            include : [{
                model : User,
                as : "created_By"
            }]
        })
    }else
    {
       query = Foryou.findAll({
            include : [{
                model : User,
                as : "created_By"
            }]
        })
    }
    console.log(query)
    query.then(foryous =>res.send(foryous))
}

exports.episode = (req, res)=> {
    console.log(req.params.is)
    Foryou.findOne({id : req.params.id}).then(foryous => {
        if(Foryou){
            Episode.findAll({where : {titleId: req.params.id}}).then(episodes => res.send(episodes))
        }else{
            res.send('data tidak ')
        }
    })
}

exports.show = (req, res) => {
    Foryou.findOne({where:{id: req.params.id}}).then(foryou=> res.send(foryou))
}

// exports.store = (req,res) => {
//     Fouryou.create(req.body).then(fouryou=>{
//         res.send({
//             message: "succes",
//             fouryou
//         })
//     })
// }