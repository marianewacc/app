const express = require('express');
const router = express.Router();
const SongController = require('../controllers/songController');


router.post('/add', SongController.addSong);


router.delete('/:id', SongController.deleteSong);


router.get('/album/:albumId', SongController.getSongsByAlbum);

module.exports = router;