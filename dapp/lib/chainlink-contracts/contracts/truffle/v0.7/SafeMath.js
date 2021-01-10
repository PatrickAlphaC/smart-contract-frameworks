'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const SafeMath = contract({
 "contractName": "SafeMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205fb307ccf0e31892df58166217401aba2d88bb45f84e0c6fcb59e7b70d9c203864736f6c63430007000033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x5F 0xB3 SMOD 0xCC CREATE 0xE3 XOR SWAP3 0xDF PC AND PUSH3 0x17401A 0xBA 0x2D DUP9 0xBB GASLIMIT 0xF8 0x4E 0xC PUSH16 0xCB59E7B70D9C203864736F6C63430007 STOP STOP CALLER ",
   "sourceMap": "589:2774:8:-:0;;;;;;;;;;;;;;;;;;;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205fb307ccf0e31892df58166217401aba2d88bb45f84e0c6fcb59e7b70d9c203864736f6c63430007000033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x5F 0xB3 SMOD 0xCC CREATE 0xE3 XOR SWAP3 0xDF PC AND PUSH3 0x17401A 0xBA 0x2D DUP9 0xBB GASLIMIT 0xF8 0x4E 0xC PUSH16 0xCB59E7B70D9C203864736F6C63430007 STOP STOP CALLER ",
   "sourceMap": "589:2774:8:-:0;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Wrappers over Solidity's arithmetic operations with added overflow checks. Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.7/vendor/SafeMath.sol\":\"SafeMath\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.7/vendor/SafeMath.sol\":{\"keccak256\":\"0x9fe4afb74faea910cd4f0aecdacaca134e0e367ba7970e45c4212da47dd66b10\",\"urls\":[\"bzz-raw://c3c3e3af0847a2fd45018dd4254f257de7dbdcfb154d01d278431e93e145e465\",\"dweb:/ipfs/QmNoYneZqnJBRbXFignrrwALYEaeou3HNKeLPs2hzC3EKq\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('SafeMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.SafeMath = SafeMath
