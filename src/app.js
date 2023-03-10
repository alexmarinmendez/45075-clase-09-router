const express = require('express')
const usersRouter = require('./router/users.router')
const petsRouter = require('./router/pets.router')
const multer = require('multer')

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
// app.use(ejecutaAlgo)

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploader = multer({storage})

app.post('/', uploader.single('avatar'), (req, res) => {
    res.send('File uploaded!')
})

app.use('/users', usersRouter)
app.use('/pets', petsRouter)
