const etherlime = require('etherlime-lib')
const PriceConsumerV3 = require('../build/PriceConsumerV3.json')


const deploy = async (network, secret, etherscanApiKey) => {
	//const deployer = new etherlime.EtherlimeGanacheDeployer()
	const deployer = new etherlime.InfuraPrivateKeyDeployer(secret, network, process.env.INFURA_API_KEY)
	deployer.setVerifierApiKey(etherscanApiKey)
	const result = await deployer.deployAndVerify(PriceConsumerV3)
}

module.exports = {
	deploy
}
