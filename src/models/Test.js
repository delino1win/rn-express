
import pgSql from "../config/db.js";

const neonSql = {
  checkVersion: async () => {
      const result = await pgSql`SELECT version()`
      const { version } = result[0];
      return version
  }
}

export default neonSql