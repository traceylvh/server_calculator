var express = require("express");
var router = express.Router();
var path = require("path");

//      ->   "/pets/dogs/meow"

router.post("/inputs", function(req, res){
  console.log("what is our request", req.body.valueA);
  res.send({name: "totally works"});
});

//"/data/pets/dogs/bark"

router.get("/pets/:id/:name", function(req,res){
  console.log(req.params);

  if(req.params.id == "dogs" && req.params.name == "meow"){
    res.send({name: "dog show"});
  } else {
    res.send({name: "yep, this too"});
  }
});

module.exports = router;
