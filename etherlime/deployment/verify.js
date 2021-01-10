const etherlime = require('etherlime-lib')
// Path to your etherlime compiled contract json file
const TestContract = require('../build/TestContract.json')

const deploy = async (network, secret, etherscanApiKey) => {
    const deployer = new etherlime.InfuraPrivateKeyDeployer(secret, network,
        "INFURA_API_KEY")
    deployer.defaultOverrides = { etherscanApiKey }
    // Add params separated with ,
    const result = await deployer.deployAndVerify(TestContract, {})
}

module.exports = { deploy }
