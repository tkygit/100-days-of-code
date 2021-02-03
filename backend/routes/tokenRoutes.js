const router = require("express").Router();
const tokenController = require("../controllers/tokenController.js");

// Create a new User
router.post("/", tokenController.create);

// Retrieve a single User with id
router.get("/:id", tokenController.findOne);

// Update a User with id
router.put("/:id", tokenController.update);

module.exports = router;