import pgSql from "../config/db.js";

const User = {
  createNewUser: async ({email, username, password}) => {
    // await pgSql,
    const createNewUser = await pgSql`INSERT INTO users (email, username, password) VALUES (${email}, ${username}, ${password}) RETURNING email`

    console.log(createNewUser[0]);

    return createNewUser
  },
  listUser: async () => {
    const result = await pgSql`SELECT id, email, username FROM users`;

    // console.log("result model: ", result);
    
    return result;
  },
};

export default User;
