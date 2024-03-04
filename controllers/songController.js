const Song = require('../models/song');
const Album = require('../models/album');

const SongController = {
  addSong: async (req, res) => {
    try {
      const { albumId, title, artist, duration } = req.body;

      // Check if album exists
      const album = await Album.findById(albumId);
      if (!album) {
        return res.status(404).json({ message: 'Album not found' });
      }

      const newSong = new Song({ album: albumId, title, artist, duration });
      await newSong.save();

      res.status(201).json({ message: 'Song added successfully' });
    } catch (error) {
      console.error('Error in addSong:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteSong: async (req, res) => {
    try {
      const { id } = req.params;

      const song = await Song.findById(id);
      if (!song) {
        return res.status(404).json({ message: 'Song not found' });
      }

      await song.remove();

      res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
      console.error('Error in deleteSong:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getSongsByAlbum: async (req, res) => {
    try {
      const { albumId } = req.params;

      const songs = await Song.find({ album: albumId }).populate('album', 'name');

      res.status(200).json({ songs });
    } catch (error) {
      console.error('Error in getSongsByAlbum:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = SongController;
