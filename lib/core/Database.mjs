import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import knex from "knex";
import { cwd } from "process";

// import database configuration
// import configDatabase from "../config/database";
import config from "config";

// import all models sequelize
// const User = import(/*cwd() + */ "../../app/models/UserModel");
import UserModel from "../../app/models/UserModel.mjs";
import MessageModel from "../../app/models/MessageModel.mjs";
// import APITokenModel from "../../app/models/";

// Add models to array
const models = [UserModel, MessageModel];

class Database {
  config = {
    host: config.get("databaseConfig.mysql.host"),
    username: config.get("databaseConfig.mysql.username"),
    password: config.get("databaseConfig.mysql.password"),
    port: config.get("databaseConfig.mysql.port"),
    database: config.get("databaseConfig.mysql.database"),
    client: config.get("databaseConfig.client"),
  };

  constructor() {
    this.init();
    this.sql();
  }

  async init() {
    if (this.connection == null) {
      this.connection = new Sequelize(
        this.config.database,
        this.config.username,
        this.config.password,
        {
          host: this.config.host,
          port: this.config.port,
          dialect: "mysql",
        }
      );
    }

    await this.connection.authenticate();

    models.map((model) => model.init(this.connection));
  }

  sql() {
    if (this.sqlConnection == null) {
      this.sqlConnection = mysql2.createConnection({
        host: this.config.host,
        user: this.config.username,
        password: this.config.password,
        port: this.config.port,
        database: this.config.database,
      });
    }
    return this.sqlConnection;
  }

  // knex() {
  //   if (this.knexConnection == null) {
  //     this.knexConnection = knex({
  //       client: this.config.client,
  //       connection: {
  //         host: this.config.host,
  //         userName: this.config.username,
  //         password: this.config.password,
  //         port: this.config.port,
  //         database: this.config.database,
  //       },
  //       migrations: {
  //         tableName: "knex_migrations",
  //       },
  //       config: {
  //         migrations: {
  //           directory: __dirname + "./database/migrate",
  //         },
  //         seeds: {
  //           directory: __dirname + "./database/seeds",
  //         },
  //       },
  //     });
  //   }
  //   return this.knexConnection;
  // }
}

export default new Database();
