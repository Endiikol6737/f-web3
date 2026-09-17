// control: hardhat #0 is a public fixture key, blocklisted
module.exports = {
  networks: {
    hardhat: { accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"] },
  },
};
