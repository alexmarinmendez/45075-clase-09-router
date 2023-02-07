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
// app.use(express.static('public'))
app.use('/contenido', express.static('public'))
app.use('/users', usersRouter)
app.use('/pets', petsRouter)
