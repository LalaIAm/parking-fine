import express from 'express';
import Stripe from 'stripe';
const app = express();

const stripe = Stripe(
  'sk_test_51P9GgwKgHa40wMWjM4Cn6YRA82tJG84p0LF9NkpiDk1NzUUyy5jCoTgjOEHa4orduCwYIp7dkS4s9iC6DldD1QLt00TZ6vlC34'
);


app.use(express.json());

const calculateOrderAmount = (items) => {
  return 75;
};

app.post('/api/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
    res.send({
        clientSecret: paymentIntent.client_secret
    })
});


app.listen(4242, () => console.log('listening on 4242'))