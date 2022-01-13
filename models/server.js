const express = require("express");
const app = express();
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = 9006;
    this.usuariosPath = "/api/usuarios";
    //Midlewares
    this.midlewares();

    //Routes de la aplicaión

    this.routes();
  }
  midlewares() {
    this.app.use(cors());
    // parseo de body
    this.app.use(express.json());

    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("conect");
    });
  }
}
module.exports = Server;
