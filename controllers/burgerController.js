
var express = require ("express");
var router = express.Router();
var burger = require("../models/burgers.js");

// get all the data from db and render them

router.get("/",function(req,res){
    burger.getall(function(data){
        let hbsObjects = {
            burgers: data
        };
        console.log(hbsObjects);
        res.render("index",hbsObjects)
    })
});

 // posting new burger
 router.post("/api/burgers",function(req,res){
    burger.getInput(req.body.burger_name, function(err,result){
        console.log(result);
        console.log("THIS IS THE INPUT:  " + req.body.burger_name);
        res.json(req.body.burger_name);
    })
});  
 
/*   router.post("/api/burgers", function(req, res) {
    burger.getInput([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });   */
 
//update boolean value when clicked
router.put("/api/bugers/devoured/:id",function(req,res){
    let condition = "id =" + req.params.id;
    let boolean = req.body.devoured;

    console.log("condition in controller: " + condition)
    console.log("boolean in controller: " + boolean)

    burger.update({
        devoured: req.body.devoured},
        condition, function(result){
        if (result.changedRows == 0 ) {
            return res.status(404).end()
        }else{
            res.status(202).end();
     
        }
    })
})

// delete buger after devoured
router.delete("/api/bugers/:id",function(req,res){
    let condition = `id = ${req.params.id}`;

    burger.delete(condition,function(result){
        res.status(202).end();
    })
})

module.exports = router;