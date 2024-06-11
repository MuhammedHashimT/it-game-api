const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true }, // e.g., pattern, sequence, logic
  data: { type: Object, required: true }, // Challenge-specific data
  solution: { type: Object, required: true }, // Expected solution format
  difficulty: { type: Number, required: true },
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);
module.exports = Challenge;
