const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const Trivia = mongoose.model('Trivia', TriviaSchema);
module.exports = Trivia;
