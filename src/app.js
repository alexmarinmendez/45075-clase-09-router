const express = require('express')
const usersRouter = require('./router/users.router')
// const productsRouter = require('./router/products.router')

const app = express()

let users = []

app.listen(8080, () => console.log('Server Up'))

app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
})

app.use('/users', usersRouter)
// app.use('/products', productsRouter)
