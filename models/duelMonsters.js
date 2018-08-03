const mongoose = require('mongoose');

const monsterSchema = mongoose.Schema({
  monsterName: String,
  attack: String,
  defense: String
});

module.exports = mongoose.model('Monster', monsterSchema);
