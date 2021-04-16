// Express router
const express = require('express')
const router = express.Router()
const videos = require('../mockData')
// get list of videos
router.get('/', (req,res)=>{
    res.json(videos)
})
module.exports = router;