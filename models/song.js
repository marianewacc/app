const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
