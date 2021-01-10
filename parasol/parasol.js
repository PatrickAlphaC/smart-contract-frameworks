module.exports = {
    dev: { // Ganache-cli options (https://github.com/trufflesuite/ganache-cli)
        port:8555,
        total_accounts:10,
        locked:false,
        debug:false,
        //logger:console,
        gasPrice: 0
    },
    contracts : "*", // To select specific contract locations, replace it with an array: ["File1.sol", "Folder/File2.sol"]
    solc: { // Solidity compiler options (https://solidity.readthedocs.io/en/develop/using-the-compiler.html)
        optimizer: {
          enabled: true,
          // Optimize for how many times you intend to run the code.
          // Lower values will optimize more for initial deployment cost, higher values will optimize more for high-frequency usage.
          runs: 200
        },
        evmVersion: "byzantium", // Version of the EVM to compile for. Affects type checking and code generation. Can be homestead, tangerineWhistle, spuriousDragon, byzantium or constantinople
        // UNCOMMENT IF USING LIBRARIES: Addresses of the libraries. If not all libraries are given here, it can result in unlinked objects whose output data is different.
        // libraries: {
        //   // The top level key is the the name of the source file where the library is used.
        //   // If remappings are used, this source file should match the global path after remappings were applied.
        //   // If this key is an empty string, that refers to a global level.
        //   "myFile.sol": {
        //     "MyLib": "0x123123..."
        //   }
        // },
        outputSelection: {
          "*": {
            "*": [ "metadata", "evm.bytecode", "devdoc" ]
          }
        }
    },
    preprocessor: {
        context: {
            title: "A minimal token contract",
            tokenSupply: "1*10**28",
            tokenName: "Token",
            tokenDecimals:18,
            tokenSymbol: "TOK"
        },
        settings: { // Underscore.js.template settings. Read more: https://underscorejs.org/#template
            evaluate:    /{{([\s\S]+?)}}/g,
            interpolate: /{{=([\s\S]+?)}}/g,
            escape:      /{{-([\s\S]+?)}}/g
        },
        strict: false // If true, strict mode will abort deployment on warnings as well as errors
    },
    deployer: async function (contracts, network, web3, test, save) {
        for (var contract in contracts) {
            var gasPrice = "50000000000"; //50 Gwei
            if(network === "dev") {
                gasPrice = "0";
            }
            contracts[contract] = await contracts[contract].deploy().send({from: web3.eth.accounts[0], gasPrice, gas:6000000})
            console.log(("Contract " + contract + " deployed at address " + contracts[contract].options.address).green)
        }
        save(contracts) // Saves contract addresses to addressbook.json. Development addresses will never be saved to addressbook.
        test(contracts) // Call the test function if you want to run unit tests after deployment. Tests will only run if network is dev
    }
}