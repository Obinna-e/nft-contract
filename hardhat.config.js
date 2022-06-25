require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ALCHEMY_KEY_TEST = process.env.ALCHEMY_KEY_TEST;
const ALCHEMY_KEY_PROD = process.env.ALCHEMY_KEY_PROD;
const BSCSCAN_KEY = process.env.BSCSCAN_KEY;

module.exports = {
  networks: {
    Bsctestnet: {
      url: ALCHEMY_KEY_TEST,
      accounts: [WALLET_PRIVATE_KEY]
    },
    Main: {
      url: ALCHEMY_KEY_PROD,
      accounts: [WALLET_PRIVATE_KEY]
    },
  },
  solidity: "0.8.4",
  bscscan: {
    apiKey: BSCSCAN_KEY
  }
};
