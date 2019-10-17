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

exports.getMyWebtoon = (req, res)=> {
    const id = req.params.id
     Foryou.findAll({
         where : {createdBy : id},
         attributes : {
             exclude : ['createdAt','cretaedBy']
         }

     }).then(data => res.send(data))
     
}
exports.CreatedMyWebtoon = (req, res)=>{
    const id = req.params.id;
    Foryou.create({
        title : req.body.title,
        genre : req.body.genre,
        isFavourite : false,
        image : req.body.image,
        createdBy : id,
    }).then(data => res.send(data))
}

exports.ShowCreateUser = (req, res) => {
    let Episodequery
    // const userid = req.params.id
    // const toons_id = req.params.tonns_id
    
    if((req.params.userid)&&(req.params.tonns_id)){
        Episodequery = Episode.findAll({
            where : {
               titleId : req.params.toons_id
            },
            include : [{
                model : Foryou,
                as : "detailId",
                where : {
                    createdBy : req.params.userid
                },
                include : [{
                    model : User,
                    as : "created_By"
                }]
            }]
        }) 
    }else {
        Episodequery = Episode.findAll({
            where : { titleId :  req.params.userid
            },
            include : [{
                model : Foryou,
                as : "detailId"   
            }]
        })
    }
    Episodequery.then(data=>res.send(data))
}

exports.UpdateToon = (req, res)=>{
    const userId = req.params.userid
    const toonId = req.params.toons_id

    Foryou.update({
        title : req.body.title,
        genre: req.body.genre,
        isFavourite : false,
        image: req.body.image
    },
    {
        where : {createdBy:userId, id:toonId}
    }
    ).then(data=>res.send(data))
}

exports.DeleteToon = (req, res) => {
    const userId = req.params.userid
    const toonId = req.params.toons_id

    Foryou.destroy({
        where : {createdBy:userId, id:toonId}
    }).then (data => {
        res.send({
            delete : "succes"
        })
    })
}
exports.CreateEpisode = (req, res) => {
    const userId = req.params.userid
    const toonId = req.params.toons_id

    Episode.findAll({
        include:[
            {
                model : Foryou,
                as : "detailId",
                where :  {createdBy:userId, id:toonId},
                attributes : []
            }
        ]
    }).then(items => {
        Episode.create({
            titleId : toonId,
            episode: req.body.episode,
            image : req.body.image
        }).then(data => {
            res.send(data)
        })
    })
}
exports.ShowImage = (req, res) => {
    const userId = req.params.userid
    const toonId = req.params.toons_id
    const epsId = req.params.eps_id

    Page.findAll({
        include : [
            {
                model : Episode,
                as : "detail_Id",
                where :  {titleId:toonId, id:epsId},
                attributes : [],
                include : [
                    {
                        model : Foryou,
                        as :"detailId",
                        where : {createdBy:userId, id:toonId}
                    }
                ]
            }
        ],
        attributes: ["image"]
    }).then(data => {
        res.send(data)
    })
}
exports.UpdatesEps = (req, res) => {
    const userId = req.params.userid
    const toonId = req.params.toons_id
    const epsId = req.params.eps_id

    Foryou.findAll({
        where :  {createdBy:userId, id:toonId},
    })
        .then(data => {
            Episode.update({
                episode: req.body.episode,
                image: req.body.image
            },
            {
                where : {titleId:toonId, id:epsId}
            }
            ).then(data =>{
                res.send({
                    message : "succes"
                })
            })
        })
 }
 exports.DeletemyEps = (req, res)=> {
    const userId = req.params.userid
    const toonId = req.params.toons_id
    const epsId = req.params.eps_id

    Foryou.findAll({
        where :  {createdBy:userId, id:toonId}
    }).then(data => {
        Episode.destroy({
            where : {titleId:toonId, id:epsId}
        }).then(data => {
            res.send({
                Message : "Delete succes"
            })
        })
    })
 }
exports.CreateImageEps = (req, res)=>{
    const userId = req.params.userid
    const toonId = req.params.toons_id
    const epsId = req.params.eps_id

    Page.findAll({
        include : [
            {
                model : Episode,
                as : "detail_Id",
                where :  {titleId:toonId, id:epsId},
                attributes : [],
                include : [
                    {
                        model : Foryou,
                        as :"detailId",
                        where : {createdBy:userId, id:toonId}
                    }
                ]
            }
        ],
    }).then(items => {
        // if(item.length > 0 && req.body.episode)
        Page.create({
            episodeId : epsId,
            page: req.body.page,
            image : req.body.image
        }).then(data => {
            res.send(data)
        });
    })
}
exports.DeleteImgDtlEps = (req,res) =>{
    const userId = req.params.userid
    const toonId = req.params.toons_id
    const epsId = req.params.eps_id
    const ImgId = req.params.img_id

    Page.findAll({
        include : [
            {
                model : Episode,
                as : "detail_Id",
                where :  {titleId:toonId, id:epsId},
                attributes : [],
                include : [
                    {
                        model : Foryou,
                        as :"detailId",
                        where : {createdBy:userId, id:toonId}
                    }
                ]
            }
        ],
       
    }).then(item => {
        Page.destroy({
            where : {episodeId : epsId, id: ImgId },
            attributes: ["id"]
        }).then(item => {
            res.send({
                Message : "Delete succes",
               
            })
        })
    })
}
    