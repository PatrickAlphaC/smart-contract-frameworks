'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const ChainlinkClient = contract({
 "contractName": "ChainlinkClient",
 "abi": [
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkRequested",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkFulfilled",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkCancelled",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60806040526001600455348015601457600080fd5b5060358060226000396000f3fe6080604052600080fdfea165627a7a72305820dca4885f90f6aac0b98e0624b8140c762d8be333688fe25f625593e1dce572390029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x4 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x22 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0xdc LOG4 DUP9 0x5f SWAP1 0xf6 0xaa 0xc0 0xb9 DUP15 MOD 0x24 0xb8 EQ 0xc PUSH23 0x2D8BE333688FE25F625593E1DCE5723900290000000000 ",
   "sourceMap": "546:8703:1:-;;;1243:1;1212:32;;546:8703;8:9:-1;5:2;;;30:1;27;20:12;5:2;546:8703:1;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a72305820dca4885f90f6aac0b98e0624b8140c762d8be333688fe25f625593e1dce572390029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0xdc LOG4 DUP9 0x5f SWAP1 0xf6 0xaa 0xc0 0xb9 DUP15 MOD 0x24 0xb8 EQ 0xc PUSH23 0x2D8BE333688FE25F625593E1DCE5723900290000000000 ",
   "sourceMap": "546:8703:1:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkFulfilled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkCancelled\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{},\"title\":\"The ChainlinkClient contract\"},\"userdoc\":{\"methods\":{},\"notice\":\"Contract writers can inherit this contract in order to create requests for the Chainlink network\"}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/ChainlinkClient.sol\":\"ChainlinkClient\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/Chainlink.sol\":{\"keccak256\":\"0x2e22ca7d3cfdca8f53ff01c25460f72c2634fd778746f9ec2e608412d0ab037c\",\"urls\":[\"bzzr://cee187a0a12f045523125e4522ddde4610ea5f000c1f92acbb7be778eaf8a4ed\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/ChainlinkClient.sol\":{\"keccak256\":\"0xc0c8c49ae17737caa957007286fec8029a3bc0c14e3550c9bc17caa7ec73bd2f\",\"urls\":[\"bzzr://2d16fab052156e663628e3c814866d7478a38e1d139f2a89b004de378f5f68a4\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/ChainlinkRequestInterface.sol\":{\"keccak256\":\"0xce2ef63d4dba0dfd878b4d4a328c97815937822c39f626f2af173565e674750e\",\"urls\":[\"bzzr://e11a8596788401106ab89cca333dff27e1847fbbb2e624a81a05e1230d79ad80\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/ENSInterface.sol\":{\"keccak256\":\"0x87607c12cc84c57afbcb38f00d96ae67c433474c1310a0c2798e2a728f41750d\",\"urls\":[\"bzzr://10a880076bf0b03ef9bd153e7f6ca18e65f15c9f7bf4b0883e93b8de67dd22c2\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0x592d87884106ba82cedbe79922de9cfaf28b211a09f9be243ad767d3baa1cb90\",\"urls\":[\"bzzr://1f4a72f8b790700d839354d412df656d5a59877264c6e126a1deae6164de9e7d\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/PointerInterface.sol\":{\"keccak256\":\"0xdc08ab9320d187dbaffa20dc31d331f8067fa534c9a654aab8f9ffa63df450da\",\"urls\":[\"bzzr://7e34f1d953ea72152d9daffea28117d5d31d85891f2cac5f1ded4a589cad4874\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/CBOR.sol\":{\"keccak256\":\"0x463c926cc78dfc3cbd27735a5aafdce495be4e56dd5a852e8d784c238d899877\",\"urls\":[\"bzzr://9d9cf37482cc90ab4963cfdff53529e961ab60ffd9213aff7720edd5f86abc35\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/ENSResolver.sol\":{\"keccak256\":\"0x64fcf7d2fc5efc87eaf7eba4a8f69af4d28986b6e4fb3590f076eb41ce40296e\",\"urls\":[\"bzzr://09e1bdee1831b5e85d3c7b5d96b7c26ad54e96d654cfaf18f58449c4c45961fc\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/SafeMath.sol\":{\"keccak256\":\"0x3c9aed70447b5aafb455bf2b124405f87979c19e628553c194f741660197265b\",\"urls\":[\"bzzr://560515f0c0118bae3cb38a64c2b67a75a80e87647618ba02f1e614a113cdfeea\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('ChainlinkClient.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.ChainlinkClient = ChainlinkClient
