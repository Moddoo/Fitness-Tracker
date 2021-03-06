const path = require('path');
const express = require('express');
const router = express.Router()


router.get('/stats', (req,res) => res.status(200).sendFile(path.join(__dirname, '../public/stats.html')));

router.get('/exercise', (req,res) => res.status(200).sendFile(path.join(__dirname, '../public/exercise.html')));

module.exports = router;