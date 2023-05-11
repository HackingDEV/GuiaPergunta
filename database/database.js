const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "0025", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
