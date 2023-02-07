const { Router } = require('express')

const router = Router()

let pets = []

// /pets
router.get('/', (req, res) => {
    //TODO
    res.json({pets})
})

// /pets/:id
router.get('/:id', (req, res) => {
    //TODO
    res.send('GET by ID /pets')
})

router.post('/', (req, res) => {
    pets.push(req.body)
    res.json({ pets })
})

router.put('/:id', (req, res) => {
    //TODO
    res.send('PUT /pets')
})

router.delete('/:id', (req, res) => {
    //TODO
    res.send('DELETE /pets')
})

module.exports = router
