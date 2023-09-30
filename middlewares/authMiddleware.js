const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { _id: decoded.userId };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = { authenticateUser };
