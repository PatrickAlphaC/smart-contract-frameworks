'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Chainlink = contract({
 "contractName": "Chainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820d2ddd88f38c4c0817ebb58fcfe10186cdaf2ded10833af69a76dc54c705265de0029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN STOP PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xd2 0xdd 0xd8 DUP16 CODESIZE 0xc4 0xc0 DUP2 PUSH31 0xBB58FCFE10186CDAF2DED10833AF69A76DC54C705265DE0029000000000000 ",
   "sourceMap": "268:3456:1:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820d2ddd88f38c4c0817ebb58fcfe10186cdaf2ded10833af69a76dc54c705265de0029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xd2 0xdd 0xd8 DUP16 CODESIZE 0xc4 0xc0 DUP2 PUSH31 0xBB58FCFE10186CDAF2DED10833AF69A76DC54C705265DE0029000000000000 ",
   "sourceMap": "268:3456:1:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{},\"title\":\"Library for common Chainlink functions\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/Chainlink.sol\":\"Chainlink\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/Chainlink.sol\":{\"keccak256\":\"0x3e8d01f8aead4e1eac6b3332d366ed8bc2ef5d889c2c8c344777b981d4071f63\",\"urls\":[\"bzzr://7be4bdda81bc444446593968124112fb399d460f529d80761e50c47874b9cb4f\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":{\"keccak256\":\"0x900b4c8ab35b4876d89835a8b050c96107ace250a70f64c5bba6a78a60f03883\",\"urls\":[\"bzzr://408340da4e8fa35e608196ee508f11f9d44f6f70a10f0db0083ab20b5a894d59\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/CBOR.sol\":{\"keccak256\":\"0xf1b54cf6a1c57ac32980695d109e08025fe2245b22a4b6bb1cdad45e04d05883\",\"urls\":[\"bzzr://048573793d67c5e7d779847adf35c39096ad098b8d934c3c79205b36cde64dd3\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Chainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Chainlink = Chainlink
