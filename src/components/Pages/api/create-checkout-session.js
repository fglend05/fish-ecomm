const stripe = require("stripe")(`${process.env.STRIPE_PUBLIC_KEY}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { items, email } = req.body;

  console.log(items);
  console.log(email);
};
