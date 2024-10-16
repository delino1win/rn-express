import neonSql from "../models/Test.js";

const testController = {
  getNeonSqlVer: async (req, res) => {
    try {
      const version = await neonSql.checkVersion();

      if (version) {
        res.json(version);
      } else {
        res.status(404).send("something is wrong");
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default testController;
