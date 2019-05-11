// players
// =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Player = sequelize.define("player", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  park: Sequelize.STRING,
  password: Sequelize.STRING,
  age: Sequelize.INTEGER
  
}, {
  freezeTableName: true
});

Player.sync();


module.exports = Player;
