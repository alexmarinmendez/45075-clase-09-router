const express = require('express')
const usersRouter = require('./router/users.router')
// const productsRouter = require('./router/products.router')

const app = express()

let users = []

app.listen(8080, () => console.log('Server Up'))

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo!!')
//     res.send('<h1 style="color: blue;">Hola Mundo!!</h1>')
// })

// app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use('/users', usersRouter)
// app.use('/products', productsRouter)
