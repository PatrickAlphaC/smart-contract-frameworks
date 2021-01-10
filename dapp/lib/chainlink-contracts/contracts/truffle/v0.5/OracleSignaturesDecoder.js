'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const OracleSignaturesDecoder = contract({
 "contractName": "OracleSignaturesDecoder",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a723058200ca43ebedc6d63fd540dcfa34de268b8610e98f87c416178b790a4167ed6b4980029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0xc LOG4 RETURNDATACOPY 0xbe 0xdc PUSH14 0x63FD540DCFA34DE268B8610E98F8 PUSH29 0x416178B790A4167ED6B498002900000000000000000000000000000000 ",
   "sourceMap": "24:489:8:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24:489:8;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a723058200ca43ebedc6d63fd540dcfa34de268b8610e98f87c416178b790a4167ed6b4980029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0xc LOG4 RETURNDATACOPY 0xbe 0xdc PUSH14 0x63FD540DCFA34DE268B8610E98F8 PUSH29 0x416178B790A4167ED6B498002900000000000000000000000000000000 ",
   "sourceMap": "24:489:8:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/dev/OracleSignaturesDecoder.sol\":\"OracleSignaturesDecoder\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/dev/OracleSignaturesDecoder.sol\":{\"keccak256\":\"0xbfadafdb8329e1022ad617e071ccfe330897bc044983998f1de8dae266affb63\",\"urls\":[\"bzzr://7260171bb3cc1ed67d2f5bf6a08ca3e9fe1fc97ffeb57c3a2255021f41d7609f\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('OracleSignaturesDecoder.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.OracleSignaturesDecoder = OracleSignaturesDecoder
