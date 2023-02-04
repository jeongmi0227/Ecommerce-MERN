const router = require('express').Router();
require ("dotenv").config();

const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', (req, res) => {
    // console.log(process.env.STRIPE_KEY);
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'cad',
        
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            // console.log('stripe Err!!',stripeErr);
            res.status(500).json(stripeErr);
        } else {
            // console.log('stripe Res!!',stripeRes);
            res.status(200).json(stripeRes);
        }
    });    
});

module.exports = router;
