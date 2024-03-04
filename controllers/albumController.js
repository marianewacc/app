const Album = require('../models/album');

exports.createAlbum = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const album = new Album({ title, artist });
    await album.save();
    res.json(album);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.json(album);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateAlbum = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const album = await Album.findByIdAndUpdate(req.params.id, { title, artist }, { new: true });
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.json(album);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    await album.remove();
    res.json({ message: 'Album deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};