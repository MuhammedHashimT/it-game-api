const Trivia = require('../models/Trivia');

// Get Trivia Questions
const getTriviaQuestions = async (req, res) => {
  const questions = await Trivia.find();
  res.json(questions);
};

// Submit Answer
const submitAnswer = async (req, res) => {
  const { questionId, answer } = req.body;
  const question = await Trivia.findById(questionId);

  if (question.correctAnswer === answer) {
    req.user.coins += 10;
    req.user.score += 10;
    await req.user.save();
    res.json({ message: 'Correct', coins: req.user.coins, score: req.user.score });
  } else {
    res.json({ message: 'Incorrect' });
  }
};

module.exports = { getTriviaQuestions, submitAnswer };
