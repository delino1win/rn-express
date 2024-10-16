import User from "../models/User.js";

const userController = {
  createNewUser: async (req, res) => {
    // console.log(req.body);
    
    const { email, username, password } = await req.body;

    try {
      const checkUser = await User.findUsername({username})

      if()

      const newUser = await User.createNewUser({ email, username, password });

      if (newUser) {
        return res.status(201).json({
          message: "User created Successfully",
        });
      } else {
        return res.status(400).json({
          mesasge: "Add new User Failed",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  listUser: async (req, res) => {
    const listUser = await User.listUser();
    if (listUser) {
      res.json(listUser);
    } else {
      res.status(404).send("User is empty");
    }
  },
};

export default userController;
