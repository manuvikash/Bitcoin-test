const { testnet, mainnet } = require("bitcore-lib/lib/networks");
const { createWallet, createHDWallet } = require("./wallet.bitcoin");

console.log(createHDWallet(testnet));
