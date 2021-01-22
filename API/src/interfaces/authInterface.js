module.exports = {
    authOptions : {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        form: {
          grant_type: 'authorization_code'
        },
        code: "AQDB_fuyPF3y5ElXEJzzkPVb4dD0HJ7ewzBj7Tp8uQrQ9hnJvmQetPkzS0RtiMSlWzJ2WLNOHNt-zFk6XB0VyXOn4Ukx81Wn_TNDIgfL7q7lCrbv42Wl8pbMYk36vKQgaRDBgMnBHvkhblOdXdmkkrHIrxt1KM6Ls3Y",
        redirect_uri: "http://localhost:3000/"
      }
}