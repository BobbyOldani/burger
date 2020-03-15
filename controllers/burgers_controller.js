const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function(result) {
    res.json({ id: result.id })
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        console.log("test")
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
