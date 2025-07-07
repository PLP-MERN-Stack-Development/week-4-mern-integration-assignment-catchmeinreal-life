import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const verify = async (req, res, next) => { // Middleware to protect routes
    console.log(req.headers);
    let token  = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "not Authorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = await User.findById(decoded.id).select('-password');
        req.user = decoded; // Assuming the decoded token contains user information

        next();
    } catch (error) {
        res.status(401).json({ message: "Invaid Token" });
    }
};



export default verify;