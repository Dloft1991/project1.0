
// =============================================================
//   Character
var Player = require("../models/character.js"); 
module.exports = function(app) {
 
  app.get("/api/:players?", function(req, res) {

    if (req.params.players) {
      Player.findOne({
        where: {
      
          routeName: req.params.players
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {

      Player.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function(req, res) {
    var player = req.body;

    var routeName = player.name.replace(/\s+/g, "").toLowerCase();

    Player.create({
      routeName: routeName,
      name: player.name,
      city: player.city,
      age: player.age,
      password: player.password,
      park: player.park

    });

    res.status(204).end();
  });

};


