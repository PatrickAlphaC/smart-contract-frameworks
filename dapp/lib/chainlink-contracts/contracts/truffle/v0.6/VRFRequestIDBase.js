'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const VRFRequestIDBase = contract({
 "contractName": "VRFRequestIDBase",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122062deefef11fca4635b3a5d8ab019456cc904961b1cc2240f07d2a96abf03b2a764736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH3 0xDEEFEF GT 0xFC LOG4 PUSH4 0x5B3A5D8A 0xB0 NOT GASLIMIT PUSH13 0xC904961B1CC2240F07D2A96ABF SUB 0xB2 0xA7 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "25:1524:24:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;25:1524:24;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x6080604052600080fdfea264697066735822122062deefef11fca4635b3a5d8ab019456cc904961b1cc2240f07d2a96abf03b2a764736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH3 0xDEEFEF GT 0xFC LOG4 PUSH4 0x5B3A5D8A 0xB0 NOT GASLIMIT PUSH13 0xC904961B1CC2240F07D2A96ABF SUB 0xB2 0xA7 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "25:1524:24:-:0;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":\"VRFRequestIDBase\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":{\"keccak256\":\"0x0b004386a2f5c662413598e3a2644bdc0ba8ec95c1bbb50a15f97e55c25e8bc1\",\"urls\":[\"bzz-raw://825b757416c08bdf36ebc9f477bcf1dff2979a37a04af8fa128a8b8da5195ed8\",\"dweb:/ipfs/QmWhGF2rLEKfCKLvN83VL3Zh19YvvoWqVaTH7ZkyJrcLvS\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('VRFRequestIDBase.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.VRFRequestIDBase = VRFRequestIDBase
