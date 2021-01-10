const HDWalletProvider = require('@truffle/hdwallet-provider')
const split_rpc_url = process.env.RPC_URL.substring(8, process.env.RPC_URL.length)

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL)
      },
      gas: 5000000,
      gasPrice: 5e9,
      networkId: 42
    },
  },
}
