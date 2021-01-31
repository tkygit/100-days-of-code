const router = require("express").Router();
const commitController = require("../controllers/commitController.js");

// Create a new Commit
router.post("/", commitController.create);

// Retrieve a Commits with matching user id
router.get("/:id", commitController.findAll);

module.exports = router;