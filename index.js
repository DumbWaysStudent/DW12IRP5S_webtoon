const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

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
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)
    router.get('/webtoons', ForyousController.index)
    router.get('/webtoon/:id', ForyousController.show)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))