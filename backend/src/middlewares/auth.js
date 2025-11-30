const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret';

function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ error: 'No autorizado' });
    const token = auth.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No autorizado' });
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload; // { userId, email }
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}

module.exports = authMiddleware;
