const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coins: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [{ type: String }],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
