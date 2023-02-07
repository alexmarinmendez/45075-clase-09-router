const express = require('express')
const usersRouter = require('./router/users.router')
const petsRouter = require('./router/pets.router')

const app = express()

let users = []

app.listen(8080, () => console.log('Server Up'))

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo!!')
//     res.send('<h1 style="color: blue;">Hola Mundo!!</h1>')
// })

app.use(express.json())
app.use(express.urlencoded({extends: true}))

function ejecutaAlgo(req, res, next) {
    req.dato1 = "coder"
    console.log(req.dato1)
    if (true) res.send('error')
    else next()
}

// app.use(express.static('public'))
app.use('/contenido', express.static('public'))
app.use(ejecutaAlgo)
app.use('/users', usersRouter)
app.use('/pets', petsRouter)
