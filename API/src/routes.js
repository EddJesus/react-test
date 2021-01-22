const express = require("express");
const routes = express.Router();

const AuthorizationCodeController = require ("./controllers/getAuthorizationCode");
const PlaylistsController = require ("./controllers/getPlaylists");
 
routes.get('/', (req, res) =>{
    res.json("HELLO TESTE!!");
})

routes.get('/getAuth', AuthorizationCodeController.getAuthorizationCode);
routes.post('/getPlaylists', PlaylistsController.getPlaylists);

module.exports = routes;