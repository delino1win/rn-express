import User from "../models/User.js"

const userController = {
  listUser: async (req, res) => {
    const listUser = await User.listUser()
    if(listUser) {
      res.json(listUser)
    } else {
      res.status(404).send("User is empty")
    }
  } 
} 

export default userController