const express = require("express");
const routes = express.Router();
 
routes.get('/', (req, res) =>{
    res.json("HELLO TESTE!");
})

module.exports = routes;