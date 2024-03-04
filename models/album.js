const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: String,
  artist: String,

}, { timestamps: true });

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;