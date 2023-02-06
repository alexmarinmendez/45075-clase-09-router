const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    //TODO
    res.send('GET all /users')
})

router.get('/:id', (req, res) => {
    //TODO
    res.send('GET by ID /users')
})

router.post('/', (req, res) => {
    //TODO
    res.send('POST /users')
})

router.put('/:id', (req, res) => {
    //TODO
    res.send('PUT /users')
})

router.delete('/:id', (req, res) => {
    //TODO
    res.send('DELETE /users')
})

module.exports = router
