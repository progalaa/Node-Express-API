const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {

  return true;
}

exports.genreSchema = genreSchema;
exports.Genre = Genre; 
exports.validate = validateGenre;