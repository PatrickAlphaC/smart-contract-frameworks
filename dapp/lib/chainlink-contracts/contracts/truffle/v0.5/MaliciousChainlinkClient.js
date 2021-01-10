'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MaliciousChainlinkClient = contract({
 "contractName": "MaliciousChainlinkClient",
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
   "object": "0x608060405260016004556001600655348015601957600080fd5b5060358060276000396000f3fe6080604052600080fdfea165627a7a723058204c2086821d925135b0298db236e1bc7394bac3edfe584494227a9ff7807607a00029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x4 SSTORE PUSH1 0x1 PUSH1 0x6 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x19 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x27 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0x4c KECCAK256 DUP7 DUP3 SAR SWAP3 MLOAD CALLDATALOAD 0xb0 0x29 DUP14 0xb2 CALLDATASIZE 0xe1 0xbc PUSH20 0x94BAC3EDFE584494227A9FF7807607A000290000 ",
   "sourceMap": "126:3799:27:-;;;1243:1:1;1212:32;;417:1:27;381:37;;126:3799;8:9:-1;5:2;;;30:1;27;20:12;5:2;126:3799:27;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a723058204c2086821d925135b0298db236e1bc7394bac3edfe584494227a9ff7807607a00029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0x4c KECCAK256 DUP7 DUP3 SAR SWAP3 MLOAD CALLDATALOAD 0xb0 0x29 DUP14 0xb2 CALLDATASIZE 0xe1 0xbc PUSH20 0x94BAC3EDFE584494227A9FF7807607A000290000 ",
   "sourceMap": "126:3799:27:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkFulfilled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkCancelled\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlinkClient.sol\":\"MaliciousChainlinkClient\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/Chainlink.sol\":{\"keccak256\":\"0x2e22ca7d3cfdca8f53ff01c25460f72c2634fd778746f9ec2e608412d0ab037c\",\"urls\":[\"bzzr://cee187a0a12f045523125e4522ddde4610ea5f000c1f92acbb7be778eaf8a4ed\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/ChainlinkClient.sol\":{\"keccak256\":\"0xc0c8c49ae17737caa957007286fec8029a3bc0c14e3550c9bc17caa7ec73bd2f\",\"urls\":[\"bzzr://2d16fab052156e663628e3c814866d7478a38e1d139f2a89b004de378f5f68a4\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/ChainlinkRequestInterface.sol\":{\"keccak256\":\"0xce2ef63d4dba0dfd878b4d4a328c97815937822c39f626f2af173565e674750e\",\"urls\":[\"bzzr://e11a8596788401106ab89cca333dff27e1847fbbb2e624a81a05e1230d79ad80\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/ENSInterface.sol\":{\"keccak256\":\"0x87607c12cc84c57afbcb38f00d96ae67c433474c1310a0c2798e2a728f41750d\",\"urls\":[\"bzzr://10a880076bf0b03ef9bd153e7f6ca18e65f15c9f7bf4b0883e93b8de67dd22c2\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0x592d87884106ba82cedbe79922de9cfaf28b211a09f9be243ad767d3baa1cb90\",\"urls\":[\"bzzr://1f4a72f8b790700d839354d412df656d5a59877264c6e126a1deae6164de9e7d\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/interfaces/PointerInterface.sol\":{\"keccak256\":\"0xdc08ab9320d187dbaffa20dc31d331f8067fa534c9a654aab8f9ffa63df450da\",\"urls\":[\"bzzr://7e34f1d953ea72152d9daffea28117d5d31d85891f2cac5f1ded4a589cad4874\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlink.sol\":{\"keccak256\":\"0x8ceb713a1355edbb0da9866efb81b23ffc2908127fb214112b6ef8a5371c21c5\",\"urls\":[\"bzzr://cc6617dabb50c278f4ee65902d57cd871c883f9842a5617b7588d8688b330d2e\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlinkClient.sol\":{\"keccak256\":\"0xcdc8098c27444e966dd9e0839bdc6911c1aadaba578a05ecdbec3c097823631b\",\"urls\":[\"bzzr://869b4e865af0750177ccdd0fa358ea687b41384b218632d3bcea087c5a8fbe3d\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/CBOR.sol\":{\"keccak256\":\"0x463c926cc78dfc3cbd27735a5aafdce495be4e56dd5a852e8d784c238d899877\",\"urls\":[\"bzzr://9d9cf37482cc90ab4963cfdff53529e961ab60ffd9213aff7720edd5f86abc35\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/ENSResolver.sol\":{\"keccak256\":\"0x64fcf7d2fc5efc87eaf7eba4a8f69af4d28986b6e4fb3590f076eb41ce40296e\",\"urls\":[\"bzzr://09e1bdee1831b5e85d3c7b5d96b7c26ad54e96d654cfaf18f58449c4c45961fc\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/SafeMath.sol\":{\"keccak256\":\"0x3c9aed70447b5aafb455bf2b124405f87979c19e628553c194f741660197265b\",\"urls\":[\"bzzr://560515f0c0118bae3cb38a64c2b67a75a80e87647618ba02f1e614a113cdfeea\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MaliciousChainlinkClient.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MaliciousChainlinkClient = MaliciousChainlinkClient
