const router = require("express").Router();
const userController = require("../controllers/userController.js");

// Create a new Tutorial
router.post("/", userController.create);

// Retrieve a single Tutorial with id
router.get("/:id", userController.findOne);

// Update a Tutorial with id
router.put("/:id", userController.update);

// Delete a Tutorial with id
router.delete("/:id", userController.delete);

// app.use('/api/users', router);

module.exports = router;