const withImages = require("next-images");
module.exports = withImages();

export default {
  mode: "universal",
  env: {
    STRIPE_API_KEY: `${process.env.STRIPE_API_KEY}`,
  },
};
