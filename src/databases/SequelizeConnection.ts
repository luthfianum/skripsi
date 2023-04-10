import { Dialect, Options, Sequelize } from "sequelize";
import vars from "../configs/vars";
class SequelizeConnection {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!SequelizeConnection.instance) {
      const dbConfig = {} as Options;
      dbConfig.port = vars.db.port;
      dbConfig.host = vars.db.host;
      dbConfig.database = vars.db.database;
      dbConfig.username = vars.db.username;
      dbConfig.password = vars.db.password;
      dbConfig.dialect = vars.db.dialect as Dialect;
      dbConfig.logging = false;
      dbConfig.logging = vars.db.logging;
      dbConfig.define = {
        schema: vars.db.schema
      }
      
      SequelizeConnection.instance = new Sequelize(
        dbConfig
      );
    }

    return SequelizeConnection.instance;
  }

  static async connect(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.authenticate();
      console.log("Database connection authenticated successfully");
      return sequelize;
    } catch (error : any) {
      console.log("Error while creation connection to database :: " + error.message);
      return sequelize;
    }
  }

  static async close(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.close();
      console.log("Database connection closed successfully");
      return sequelize;
    } catch (error : any) {
      console.log("Error while closing database connection :: " + error.message);
      return sequelize;
    }
  }

}

export default SequelizeConnection;