'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const ServiceAgreementDecoder = contract({
 "contractName": "ServiceAgreementDecoder",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a72305820095e42ae89d1ac5f82f9dd971cf86ab3c1f91952528aa4f9ddf2264d6c8257c30029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x1D PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 MULMOD 0x5e TIMESTAMP 0xae DUP10 0xd1 0xac 0x5f DUP3 0xf9 0xdd SWAP8 SHR 0xf8 PUSH11 0xB3C1F91952528AA4F9DDF2 0x26 0x4d PUSH13 0x8257C300290000000000000000 ",
   "sourceMap": "24:1585:10:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24:1585:10;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fdfea165627a7a72305820095e42ae89d1ac5f82f9dd971cf86ab3c1f91952528aa4f9ddf2264d6c8257c30029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 MULMOD 0x5e TIMESTAMP 0xae DUP10 0xd1 0xac 0x5f DUP3 0xf9 0xdd SWAP8 SHR 0xf8 PUSH11 0xB3C1F91952528AA4F9DDF2 0x26 0x4d PUSH13 0x8257C300290000000000000000 ",
   "sourceMap": "24:1585:10:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/dev/ServiceAgreementDecoder.sol\":\"ServiceAgreementDecoder\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.5/dev/ServiceAgreementDecoder.sol\":{\"keccak256\":\"0x809ce1b1bec5b16d0bf0c637fc91b46ecf0707a38f6fc28a342e3336f902006a\",\"urls\":[\"bzzr://62417d69405cc3dc4d2fcfa7322cb491be6b8a73bfa44e779e1ca8d90e4a05fe\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('ServiceAgreementDecoder.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.ServiceAgreementDecoder = ServiceAgreementDecoder
