const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/ngx-audio-player-demo'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/ngx-audio-player-demo/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
