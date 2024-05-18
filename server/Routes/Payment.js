import express from 'express';
import stripe from 'stripe';


const route= express.Router()

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token === null) { 
    return res.sendStatus(401); // No token provided
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Token verification failed
    }
    req.user = user; 
    next(); 
  });
};
route.use(authenticateToken);


route.post('./checkout', async(req,res)=>{

    const {
        cardNumber,
        cardExpMonth,
        cardExpYear,
        cardCVC,
        country,
        postalCode,
      } = req.body;
      if (!cardNumber || !cardExpMonth || !cardExpYear || !cardCVC) {
        return res.status(400).send({
          Error: "Necessary Card Details are required for One Time Payment",
        });
      }
      try {
        const cardToken = await stripe.tokens.create({
          card: {
            number: cardNumber,

            exp_month: cardExpMonth,
            exp_year: cardExpYear,
            cvc: cardCVC,
            address_state: country,
            address_zip: postalCode,
          },
        });
  
        const charge = await stripe.charges.create({
          amount: amount,
          currency: "usd",
          source: cardToken.id,
          receipt_email: email,
          description: `Stripe Charge Of Amount ${amount} for One Time Payment`,
        });
  
        if (charge.status === "succeeded") {
          return res.status(200).send({ Success: charge });
        } else {
          return res
            .status(400)
            .send({ Error: "Please try again later for One Time Payment" });
        }
      } catch (error) {
        return res.status(400).send({
          Error: error.raw.message,
        });
      }
  
})

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});