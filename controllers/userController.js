const User = require('../models/User');

// Get User Profile
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.email = req.body.email || user.email;
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.user._id);
  res.json({ message: 'User deleted' });
};

// Create Multiple Users
const createManyUsers = async (req, res) => {
  const users = req.body;
  const createdUsers = await User.insertMany(users);
  res.status(201).json(createdUsers);
};

module.exports = { getUserProfile, updateUserProfile, deleteUser, createManyUsers };
