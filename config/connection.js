const Sequelize = require("sequelize");
require("dotenv").config();
console.log(process.env.DB_NAME, process.env.DB_PASSWORD, process.env.DB_USER);
// let sequelize;

const seq = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
      }
    );

module.exports = seq;
