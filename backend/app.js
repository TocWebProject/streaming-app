//  Necessary packages for the app.
//  - fs module is used to read & write into files easily on server
//  - path module provides a way of working with directories and file paths
//  - cors allow to make cross-origin requests cause client and server will be running on differents ports
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

// Route import
const video = require('./routes/Video.js')

const app = express();

// Video route. Sending video file back to the client
app.get('/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});

// Routes 
app.use('/', video)

app.use(cors())

// listen to our server
app.listen(5000, () => {
    console.log('Listening on port 5000!')
});