// const hre = require("hardhat")
// const ethers = hre.ethers

async function main() {
    console.log("Getting artifacts together")
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3")
    console.log("Deploying")
    const priceConsumerV3 = await PriceConsumerV3.deploy()
    await priceConsumerV3.deployed()

    console.log("priceConsumerV3 deployed to: ", priceConsumerV3.address)
    ethPrice = await priceConsumerV3.getLatestPrice()
    console.log("Price data for ETH: ", ethPrice.toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
