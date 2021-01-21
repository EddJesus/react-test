const querystring = require("querystring");

module.exports = {
    async getAuth(req, res) {

        const data = res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                client_id: process.env.CLIENT_ID,
                client
            }))

        const code = req.params

    }
}