'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SafeMath = contract({
 "contractName": "SafeMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582044b550787d50bf436e8ae2302e24dfd07a296a653d17446b0bfd1fdcb01448c90029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 DIFFICULTY 0xb5 POP PUSH25 0x7D50BF436E8AE2302E24DFD07A296A653D17446B0BFD1FDCB0 EQ 0x48 0xc9 STOP 0x29 ",
   "sourceMap": "589:2774:37:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582044b550787d50bf436e8ae2302e24dfd07a296a653d17446b0bfd1fdcb01448c90029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 DIFFICULTY 0xb5 POP PUSH25 0x7D50BF436E8AE2302E24DFD07A296A653D17446B0BFD1FDCB0 EQ 0x48 0xc9 STOP 0x29 ",
   "sourceMap": "589:2774:37:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers over Solidity's arithmetic operations with added overflow checks. * Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. * Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/SafeMath.sol\":\"SafeMath\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/SafeMath.sol\":{\"keccak256\":\"0x3c9aed70447b5aafb455bf2b124405f87979c19e628553c194f741660197265b\",\"urls\":[\"bzzr://560515f0c0118bae3cb38a64c2b67a75a80e87647618ba02f1e614a113cdfeea\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SafeMath = SafeMath
