require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({path:__dirname+'/.env'});
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ALCHEMY_KEY_TEST = process.env.ALCHEMY_KEY_TEST;
const ALCHEMY_KEY_PROD = process.env.ALCHEMY_KEY_PROD;
const BSCSCAN_KEY = process.env.BSCSCAN_KEY;

module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {

    },
    testnet: {
      url: ALCHEMY_KEY_TEST,
      accounts: [WALLET_PRIVATE_KEY],
      chainId: 97,
      gasPrice: 20000000000,
    },
    mainnet: {
      url: ALCHEMY_KEY_PROD,
      accounts: [WALLET_PRIVATE_KEY],
      chainId: 56,
      gasPrice: 20000000000,
    },
  },
  solidity: "0.8.4",
  bscscan: {
    apiKey: BSCSCAN_KEY
  }
};
