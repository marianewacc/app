const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registrationDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateOfBirth: {
    type: Date
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
