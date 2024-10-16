import pgSql from "../config/db.js";

const User = {
  createNewUser: async ({ email, username, password }) => {
    try {
      // await pgSql,
      const createNewUser =
        await pgSql`INSERT INTO users (email, username, password) VALUES (${email}, ${username}, ${password}) RETURNING email`;

      console.log(createNewUser[0]);

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
    try {
      const findUsername =
        await pgSql`SELECT id, username, email, createdAt from users WHERE username=${username}`;

      if (findUsername.length > 0) {
        return findUsername[0];
      } else
        return {
          code: 404,
          message: "User not found",
        };
    } catch (error) {
      console.log(error);
    }
  },
};

export default User;
