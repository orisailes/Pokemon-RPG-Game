const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')

router.post('/register', async (req, res) => {
        const result = await userController.register(req, res)
        console.log(result);
        result ? res.send(result) : res.send('couldnt get users')
    })
    .post('/login', async (req, res) => {
        let result = await userController.login(req, res)
        result && res.send(result)
    })
router.put('/:email', async (req, res) => {
    let result = await userController.updateUser(req, res)
    result && res.send(result)
})

module.exports = router