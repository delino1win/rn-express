import User from "../models/User"
import jwt from 'jsonwebtoken'

const authController = {
  authentication: async(req, res) => {

    const {email, password, username} = await req.body

    try {
      const user = await User.findUserEmail({email})

      if(!user) {
        return res.status(400).json({
          success: false,
          message: 'user not found'
        })
      }

      if(user.password !== password) {
        return res.status(401).json({
          success: false,
          message: 'invalid password'
        })
      }

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email
      }

      const token = jwt.sign(payload, "secret", {expiresIn: '1d'})

      return res.status(200).json({
        message: 'login success',
        token: `Bearer ${token}`
      })

    } catch (error) {
      console.error(error)
    }
  }
}

export default authController