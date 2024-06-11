const express = require('express');
const { getTriviaQuestions, submitAnswer } = require('../controllers/triviaController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getTriviaQuestions);
router.post('/submit', authMiddleware, submitAnswer);

module.exports = router;
