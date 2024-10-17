import express from 'express'

const authRouter = express.Router()

authRouter.post('/login', authRoute)

export default authRouter