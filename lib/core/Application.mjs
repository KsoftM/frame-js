import express from "express";
import baseRouter from "../../router/index.mjs";
import db from "../../lib/core/Database.mjs";
import bodyParser from "body-parser";
import env from "dotenv";

export class Application {
  constructor() {
    this.server = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    db.init();
    env.config("../../.env");
  }

  middlewares() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(baseRouter);
  }

  run(port = null) {
    port = port ?? process.env.PORT;
    this.server.listen(port, () => {
      console.log(`Server started on ${port}`);
    });
  }
}

export default new Application().server;
