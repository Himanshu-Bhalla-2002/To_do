const User = require('../models/User');
const jwt = require('jsonwebtoken');
async function signUp(req, res) {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}





async function login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { signUp, login };
