import express from 'express'
import { userLogin, userSingUp } from './controller.js'

const router = express.Router()

router.get('/login', userLogin)
router.get('/singUp', userSingUp)

export default router