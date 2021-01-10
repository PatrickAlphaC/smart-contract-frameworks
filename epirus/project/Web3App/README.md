# OpenAPI project
This is a generated [Web3j-OpenAPI](https://docs.web3j.io/web3j_openapi) project using the [Epirus-CLI](https://docs.epirus.io/).

### Run the project
```shell script
$ epirus run rinkeby|ropsten
```

For more information, check the [Web3j-OpenAPI](https://docs.web3j.io/web3j_openapi) documentation.

## Important
If this is an ERC777 project, then it is based on the [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) contracts.
This means that it requires an ERC1820 registry pre-deployed on the target network. More on this [here](https://forum.openzeppelin.com/t/simple-erc777-token-example/746).
                                    
We also provide support for ERC20. If interested, generate an ERC20 project using `epirus openapi new erc20`.