import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (token === null) { 
      return res.sendStatus(401); // No token provided
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token verification failed
      }
      req.user = user; 
  
      next(); 
    });}

export const authrole = (roles) => (req, res, next) => {
    const userRole = req.user.role;
   
    if (roles.includes(userRole)) {
        next();
    } else {
        return res.status(403).send('Forbidden'); // User role not authorized
    
}; }
  