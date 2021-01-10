'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MaliciousChainlink = contract({
 "contractName": "MaliciousChainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820d398eece8ae6ef74487c8f31f524764541064f0fbbeab55693b1289d7eb038830029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN STOP PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xd3 SWAP9 0xee 0xce DUP11 0xe6 0xef PUSH21 0x487C8F31F524764541064F0FBBEAB55693B1289D7E 0xb0 CODESIZE DUP4 STOP 0x29 ",
   "sourceMap": "154:1743:27:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820d398eece8ae6ef74487c8f31f524764541064f0fbbeab55693b1289d7eb038830029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xd3 SWAP9 0xee 0xce DUP11 0xe6 0xef PUSH21 0x487C8F31F524764541064F0FBBEAB55693B1289D7E 0xb0 CODESIZE DUP4 STOP 0x29 ",
   "sourceMap": "154:1743:27:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/tests/MaliciousChainlink.sol\":\"MaliciousChainlink\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/tests/MaliciousChainlink.sol\":{\"keccak256\":\"0x87ad9d4783e641b5d3ea79f3eeff41953a22b2b53f1d8d53c4dc07ff88baffaa\",\"urls\":[\"bzzr://b056fc5fe3ca2e8a91fd5af189e8d22921132a292125abaf658101ac8eae0589\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":{\"keccak256\":\"0x900b4c8ab35b4876d89835a8b050c96107ace250a70f64c5bba6a78a60f03883\",\"urls\":[\"bzzr://408340da4e8fa35e608196ee508f11f9d44f6f70a10f0db0083ab20b5a894d59\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/CBOR.sol\":{\"keccak256\":\"0xf1b54cf6a1c57ac32980695d109e08025fe2245b22a4b6bb1cdad45e04d05883\",\"urls\":[\"bzzr://048573793d67c5e7d779847adf35c39096ad098b8d934c3c79205b36cde64dd3\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MaliciousChainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MaliciousChainlink = MaliciousChainlink
