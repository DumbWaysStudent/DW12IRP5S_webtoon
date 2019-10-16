const express = require('express')
require('express-group-routes')

const app = express()
const port = 5000

const bodyParser = require('body-parser')

app.use(bodyParser.json())
const AuthController = require('./controllers/auth')
const ForyousController = require('./controllers/foryous')
const { authenticated } = require('./middleware')

// app.group("api/v1", (router) => {
//     // router.get('/', (req, res) => {
//     //     //res means, response, and it send string "Hello Express!" to the API
//     //     res.send('Hello Express!')
//     // })
//     router.post('/login', AuthController.login) // auth API
// })
app.group("/api/v1", (router) => {

    //auth API
    router.post('/login',  AuthController.login)
    router.post('/register', AuthController.register)
    router.get('/webtoons', authenticated, ForyousController.index)
    router.get('/webtoon/:id', ForyousController.showid)
    router.get('/webtoon/:id/episode', ForyousController.episode)
    router.get('/webtoon/:toons_id/episode/:eps_id', ForyousController.detailEpisode) 
    router.get('/user/:id/webtoons', authenticated, ForyousController.getMyWebtoon) 
    router.post('/user/:id/webtoon', authenticated, ForyousController.CreatedMyWebtoon)
    router.get('/user/:userid/webtoon/:toons_id/episodes', authenticated, ForyousController.ShowCreateUser)
    router.put('/user/:userid/webtoon/:toons_id', authenticated, ForyousController.UpdateToon)
    router.delete('/user/:userid/webtoon/:toons_id',authenticated, ForyousController.DeleteToon)
    router.post('/user/:userid/webtoon/:toons_id/episode', authenticated, ForyousController.CreateEpisode)
    router.get('/user/:userid/webtoon/:toons_id/episode/:eps_id/images', authenticated, ForyousController.ShowImage)
    router.put('/user/:userid/webtoon/:toons_id/episode/:eps_id', authenticated, ForyousController.UpdatesEps)
    router.delete('/user/:userid/webtoon/:toons_id/episode/:eps_id', ForyousController.DeletemyEps)
    
})  


app.listen(port, () => console.log(`Listening on port ${port}!`))