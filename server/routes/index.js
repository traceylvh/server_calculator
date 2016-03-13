var express = require("express");
var router = express.Router();
var path = require("path");
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.post("/inputs", function(req, res){
  // console.log("what is our request", req.body.operand, req.body.firstnumber, req.body.secondnumber);
  var firstnumber = parseFloat(req.body.firstnumber);
  var secondnumber = parseFloat(req.body.secondnumber);
  var operand = req.body.operand;
  var answer = 0;

  switch (operand){
    case "add":
    answer = firstnumber + secondnumber;
    break;

    case "subtract":
    answer = firstnumber - secondnumber;
    break;

    case "multiply":
    answer = firstnumber * secondnumber;
    break;

    case "divide":
    answer = firstnumber / secondnumber;
    break;


  };
  // console.log(answer);

  res.send({response: answer});

});


router.get("/*", function(req,res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
