const express = require('express');
const { getChallenges, createChallenge, submitSolution, deleteChallenge } = require('../controllers/challengeController');
const protect = require('../middleware/authMiddleware'); // Changed from destructuring

const router = express.Router();

router.route('/').get(getChallenges).post(protect, createChallenge);
router.route('/:challengeId').delete(protect, deleteChallenge);
router.route('/submit').post(protect, submitSolution);

module.exports = router;
