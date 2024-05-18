import { ConstructionOutlined } from '@mui/icons-material';
import jwt from 'jsonwebtoken';
import { usermodel } from '../Models/usermodel';

export const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) { 
      return res.sendStatus(401); 
    }  
                                                
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
       
        return res.sendStatus(403); // Token verification failed
      }
      req.message = "User authenticated successfully!";
      
      req.user = user;  
      console.log(user)
      next() ;  
      
    });}  

export const authrole = () => (req, res, next) => {
  if ( req.user.role === 'admin') {
    console.log(req.user.role)
    next();
} else {
    res.status(200).send('Forbidden'); 
}
};

 
  