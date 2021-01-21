module.exports = {
    authOptions : {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Bearer ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      }
}