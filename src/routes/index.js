const express = require('express')
const router = express.Router()
const { asyncErrorHandler } = require('../middleware/index')

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controllers')

router.get('/users', asyncErrorHandler(getUsers))

router.get('/users/:id', asyncErrorHandler(getUserById))

router.post('/users', asyncErrorHandler(createUser))

router.delete('/users/:id', asyncErrorHandler(deleteUser))

router.put('/users/:id', asyncErrorHandler(updateUser))

module.exports = router