const Challenge = require('../models/Challenge');
const User = require('../models/User');

// Get Challenges
const getChallenges = async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
};

// Create Challenge
const createChallenge = async (req, res) => {
  const { title, description, type, data, solution, difficulty } = req.body;
  const challenge = new Challenge({ title, description, type, data, solution, difficulty });
  await challenge.save();
  res.status(201).json(challenge);
};

// Submit Solution
const submitSolution = async (req, res) => {
  const { challengeId, userSolution } = req.body;
  const challenge = await Challenge.findById(challengeId);

  if (!challenge) {
    return res.status(404).json({ message: 'Challenge not found' });
  }

  if (JSON.stringify(challenge.solution) === JSON.stringify(userSolution)) {
    req.user.coins += challenge.difficulty * 10;
    req.user.score += challenge.difficulty * 10;
    await req.user.save();
    res.json({ message: 'Correct', coins: req.user.coins, score: req.user.score });
  } else {
    res.json({ message: 'Incorrect' });
  }
};

// Delete Challenge
const deleteChallenge = async (req, res) => {
  const { challengeId } = req.params;
  await Challenge.findByIdAndDelete(challengeId);
  res.json({ message: 'Challenge deleted' });
};

module.exports = { getChallenges, createChallenge, submitSolution, deleteChallenge };
