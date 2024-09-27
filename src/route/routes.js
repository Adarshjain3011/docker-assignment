const express = require('express');

const {createUser,getAllUsers} = require("../controllers/userControllers");

const router = express.Router();

// Define routes for users
router.post('/', createUser);
router.get('/',getAllUsers);

module.exports = router;

