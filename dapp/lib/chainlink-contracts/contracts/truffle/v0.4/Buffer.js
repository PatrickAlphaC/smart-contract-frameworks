'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Buffer = contract({
 "contractName": "Buffer",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058203701ca69baa260370a2f6efbea6b53b9bc6a55b8aea5353539ed6d5d790259670029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN STOP PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALLDATACOPY ADD 0xca PUSH10 0xBAA260370A2F6EFBEA6B MSTORE8 0xb9 0xbc PUSH11 0x55B8AEA5353539ED6D5D79 MUL MSIZE PUSH8 0x29000000000000 ",
   "sourceMap": "403:9250:33:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058203701ca69baa260370a2f6efbea6b53b9bc6a55b8aea5353539ed6d5d790259670029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALLDATACOPY ADD 0xca PUSH10 0xBAA260370A2F6EFBEA6B MSTORE8 0xb9 0xbc PUSH11 0x55B8AEA5353539ED6D5D79 MUL MSIZE PUSH8 0x29000000000000 ",
   "sourceMap": "403:9250:33:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":\"Buffer\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":{\"keccak256\":\"0x900b4c8ab35b4876d89835a8b050c96107ace250a70f64c5bba6a78a60f03883\",\"urls\":[\"bzzr://408340da4e8fa35e608196ee508f11f9d44f6f70a10f0db0083ab20b5a894d59\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Buffer.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Buffer = Buffer
