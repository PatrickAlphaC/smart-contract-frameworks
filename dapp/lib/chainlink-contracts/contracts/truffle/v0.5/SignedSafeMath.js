'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SignedSafeMath = contract({
 "contractName": "SignedSafeMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058206b6b7495cc0d9a9fe4a5b498b3827e90e680c52ff4b514b8dc1aee3ff8ddbcf00029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH12 0x6B7495CC0D9A9FE4A5B498B3 DUP3 PUSH31 0x90E680C52FF4B514B8DC1AEE3FF8DDBCF00029000000000000000000000000 ",
   "sourceMap": "25:566:38:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058206b6b7495cc0d9a9fe4a5b498b3827e90e680c52ff4b514b8dc1aee3ff8ddbcf00029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH12 0x6B7495CC0D9A9FE4A5B498B3 DUP3 PUSH31 0x90E680C52FF4B514B8DC1AEE3FF8DDBCF00029000000000000000000000000 ",
   "sourceMap": "25:566:38:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/SignedSafeMath.sol\":\"SignedSafeMath\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/SignedSafeMath.sol\":{\"keccak256\":\"0x2695f6b8893d0333f719b12156bb8e2c2589c431fdf7241aca428bd2b5564dd4\",\"urls\":[\"bzzr://b82f0e4c561256ead4b559e2bc4585731001e99b572702849cb12b918c213fe8\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SignedSafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SignedSafeMath = SignedSafeMath
