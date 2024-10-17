import pgSql from "../config/db.js";

const User = {
  createNewUser: async ({ email, username, password }) => {
    try {
      // await pgSql,
      const createNewUser =
        await pgSql`INSERT INTO users (email, username, password) VALUES (${email}, ${username}, ${password}) RETURNING email`;

      console.log("createNewUser[0]:", createNewUser[0]);

      if (createNewUser.length > 0) {
        return createNewUser;
      } else
        return {
          code: 400,
          message: "User Failed to created",
        };
    } catch (error) {
      console.log(error);
    }
  },
  listUser: async () => {
    const result = await pgSql`SELECT id, email, username FROM users`;

    // console.log("result model: ", result);

    return result;
  },
  findUsername: async ({ username }) => {
    if (!id) {
      console.error("Username is missing");
    }

    try {
      const findUsername =
        await pgSql`SELECT id, username, email, created_at from users WHERE username ILIKE ${username}`;

      if (findUsername.length > 0) {
        return findUsername[0];
      }else return {
        code: 404,
        message: "User not found"
      }

    } catch (error) {
      console.log(error);
    }
  },
  findUserId: async ({ id }) => {
    if (!id) {
      console.error("Id is missing");
    }

    try {
      const findId =
        await pgSql`SELECT id, username, email, created_at from users WHERE id = ${id}`;

      if (findId.length > 0) {
        return findId[0];
      } 

      return null
    } catch (error) {
      console.error(error);
    }
  }, 
  findUserEmail: async ({ email }) => {
    if (!email) {
      console.error("email is missing");
    }

    try {
      const findEmail =
        await pgSql`SELECT id, username, email, password, created_at from users WHERE email = ${email}`;

      if (findEmail.length > 0) {
        return findEmail[0];
      }
      return null
    } catch (error) {
      console.error(error);
    }
  },
};

export default User;
