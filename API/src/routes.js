const express = require("express");
const routes = express.Router();

const AuthController = require ("./controllers/getAuth");
const PlaylistsController = require ("./controllers/getPlaylists");
 
routes.get('/', (req, res) =>{
    res.json("HELLO TESTE!");
})

routes.get('/getAuth', AuthController.getAuth);
routes.post('/getPlaylists', PlaylistsController.getPlaylists);

module.exports = routes;