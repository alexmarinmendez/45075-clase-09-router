const express = require('express')

const app = express()

let users = []

app.listen(8080, () => console.log('Server Up'))

app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
})

app.get('/users', (req, res) => {
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    res.json({ users })
})

app.get('/users/:id', (req, res) => {
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
})

app.post('/users', (req, res) => {
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
})

app.put('/users/:id', (req, res) => {
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
})

app.delete('/users/:id', (req, res) => {
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
    //TODO
})
