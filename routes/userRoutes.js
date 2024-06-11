const express = require('express');
const { getUserProfile, updateUserProfile, deleteUser, createManyUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile).delete(protect, deleteUser);
router.route('/create-many').post(createManyUsers);

module.exports = router;
