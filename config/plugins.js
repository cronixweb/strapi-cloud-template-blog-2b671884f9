module.exports = {
  'bigcommerce': {
    enabled: true,
    config: {
      accessToken: process.env.BIGCOMMERCE_ACCESS_TOKEN, // The environment variable containing your private store access token
      shopHash: process.env.BIGCOMMERCE_SHOP_HASH, // The environment variable containing your shop hash
    },
  },
}
