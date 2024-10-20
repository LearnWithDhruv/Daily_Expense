const User = require('../models/User');

const createUser = async (req, res) => {
  const { name, email, mobile } = req.body;
  
  if (!name || !email || !mobile) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.create({ name, email, mobile });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUserDetails };
