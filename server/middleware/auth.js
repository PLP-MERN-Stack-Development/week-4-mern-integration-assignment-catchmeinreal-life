import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const protect = async (req, res, next) => { // Middleware to protect routes
    let token  = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "not Authorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        next();
    } catch (error) {
        res.status(401).json({ message: "Invaid Token" });
    }
};




module.exports = protect;