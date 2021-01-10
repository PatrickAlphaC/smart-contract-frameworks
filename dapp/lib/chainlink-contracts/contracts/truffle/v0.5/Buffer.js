'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Buffer = contract({
 "contractName": "Buffer",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058204d5764b1e51b3520335f681f0ce370a108c684de51e31d28afe09ad44fdd25a80029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0x4d JUMPI PUSH5 0xB1E51B3520 CALLER 0x5f PUSH9 0x1F0CE370A108C684DE MLOAD 0xe3 SAR 0x28 0xaf 0xe0 SWAP11 0xd4 0x4f 0xdd 0x25 0xa8 STOP 0x29 ",
   "sourceMap": "402:9256:33:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058204d5764b1e51b3520335f681f0ce370a108c684de51e31d28afe09ad44fdd25a80029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0x4d JUMPI PUSH5 0xB1E51B3520 CALLER 0x5f PUSH9 0x1F0CE370A108C684DE MLOAD 0xe3 SAR 0x28 0xaf 0xe0 SWAP11 0xd4 0x4f 0xdd 0x25 0xa8 STOP 0x29 ",
   "sourceMap": "402:9256:33:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"A library for working with mutable byte buffers in Solidity. * Byte buffers are mutable and expandable, and provide a variety of primitives for writing to them. At any time you can fetch a bytes object containing the current contents of the buffer. The bytes object should not be stored between operations, as it may change due to resizing of the buffer.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":\"Buffer\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Buffer.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Buffer = Buffer
