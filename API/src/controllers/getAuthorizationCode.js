const querystring = require("querystring");

module.exports = {
    async getAuthorizationCode(req, res) {

        const data = res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                client_id: process.env.CLIENT_ID,
                response_type: 'code',
                redirect_uri: process.env.REDIRECT_URI,
            }))

        const code = req.params

    }
}