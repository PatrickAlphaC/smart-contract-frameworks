module.exports = {
  kovan: {
    gas: "auto",
    deploy: {
      PriceConsumerV3: {
        deploy: true
      }
    },
    afterDeploy: async ({ contracts, web3, logger }) => {
      const price = await contracts.PriceConsumerV3.methods.getLatestPrice().call({ from: web3.eth.defaultAccount })
      console.log(price)
    }
  }
}
