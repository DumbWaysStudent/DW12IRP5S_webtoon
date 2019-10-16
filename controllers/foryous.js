const models = require('../models')
const Foryou = models.foryou
const User = models.user
const Episode = models.episodes
const Page = models.pages

const Foryous = data => {
    const newData = data.map(item =>{
        let newItem = {
            title: item.title,
            genre: item.genre,
            isFavourite : item.isFavourite,
            image : item.image,
            createdAt : item.createdAt,
            updatedAt : item.updatedAt,
            createdBy : item.createdBy
        };
        return newItem;
    });
    return newData;
}

const getFavourite = data => {
    const input = data.filter(item => {
        return item.isFavourite
    })

    let newData = input.map(item =>{
        let newItem = {
            title: item.title,
            genre: item.genre,
            isFavourite : item.isFavourite,
            image : item.image,
            createdAt : item.createdAt,
            updatedAt : item.updatedAt,
            createdBy : item.createdBy
        };
        return newItem;
    });
     return newData;
 }

 const getTitle = (data, title) => {
     const input = data.filter(item =>{
         return item.title.toUpperCase().includes(title.toUpperCase())
     })
     
     let newData = input.map(item => {
        let newItem = {
            title: item.title,
            genre: item.genre,
            isFavourite : item.isFavourite,
            image : item.image,
            createdAt : item.createdAt,
            updatedAt : item.updatedAt,
            createdBy : item.createdBy
        };
        return newItem;
     });
     return newData;
 }

 exports.index = (req, res) => {
     Foryou.findAll({
         include : {
             model : User,
             as : "created_By"
         }
     }).then(data => {
         let newData;

         if(req.query.is_favourite == "true"){
             newData = getFavourite(data)
         }else if (req.query.title) {
            newData = getTitle(data, req.query.title)
         }
         else {
             newData = Foryous(data)
         }
         res.send(newData)
     })

     
 }

exports.showid = (req, res) => {
    Foryou.findOne({where:{id: req.params.id}}).then(foryou=> res.send(foryou))
}

exports.episode = (req, res)=> {
    console.log(req.params.id)
    Foryou.findOne({id : req.params.id}).then(foryou=> {
        if(Foryou){
            Episode.findAll({where : {titleId: req.params.id}}).then(episodes => res.send(episodes))
        }else{
            res.send('Not defined')
        }
    })
}

exports.detailEpisode = (req, res) => {
   const foryouId = req.params.toons_id
   const epsId = req.params.eps_id

   Page.findAll({
       include :[{
            model : Episode,
            as : 'detailId',
            where : {titleId:foryouId, id:epsId},
            attributes : []
       }],
       attributes : {
           exclude : ['id', 'episodeId']
       }

    //where : {id:epsId},
    //attributes : { exclude : ["id", "episodeId"]}
   }).then(data =>{
       res.send(data)
   })
}

// exports.store = (req,res) => {
//     Fouryou.create(req.body).then(fouryou=>{
//         res.send({
//             message: "succes",
//             fouryou
//         })
//     })
// }