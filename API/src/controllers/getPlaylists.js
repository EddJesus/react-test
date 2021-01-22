module.exports = {
    async getPlaylists(req, res, body) {
        const playlists = req.redirect('https://api.spotify.com/v1/browse/featured-playlists')

    }



}