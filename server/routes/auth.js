const express = require('express');
const {register, login} = require('../controllers/auth.js')

 const router = express.router();

 router.post("/register", register)
 router.post("/login", login)



 module.exports = router