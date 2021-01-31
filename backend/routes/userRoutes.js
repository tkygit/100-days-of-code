const router = require("express").Router();
const userController = require("../controllers/userController.js");

// Create a new User
router.post("/", userController.create);

// Retrieve a single User with id
router.get("/:id", userController.findOne);

// Update a User with id
router.put("/:id", userController.update);

module.exports = router;