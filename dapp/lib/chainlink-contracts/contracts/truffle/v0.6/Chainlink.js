'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Chainlink = contract({
 "contractName": "Chainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206c483ae70ef374f814ebbc7fb4e44452943bebf01605acaed9c8f009651eaaed64736f6c63430006060033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH13 0x483AE70EF374F814EBBC7FB4E4 DIFFICULTY MSTORE SWAP5 EXTCODESIZE 0xEB CREATE AND SDIV 0xAC 0xAE 0xD9 0xC8 CREATE MULMOD PUSH6 0x1EAAED64736F PUSH13 0x63430006060033000000000000 ",
   "sourceMap": "265:3506:3:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206c483ae70ef374f814ebbc7fb4e44452943bebf01605acaed9c8f009651eaaed64736f6c63430006060033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH13 0x483AE70EF374F814EBBC7FB4E4 DIFFICULTY MSTORE SWAP5 EXTCODESIZE 0xEB CREATE AND SDIV 0xAC 0xAE 0xD9 0xC8 CREATE MULMOD PUSH6 0x1EAAED64736F PUSH13 0x63430006060033000000000000 ",
   "sourceMap": "265:3506:3:-:0;;;;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Uses imported CBOR library for encoding to buffer\",\"methods\":{},\"title\":\"Library for common Chainlink functions\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/Chainlink.sol\":\"Chainlink\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/Chainlink.sol\":{\"keccak256\":\"0x7048bfd6e6fe4e60ea4af01ed44fc0494cec75df75c6b542a6f08ed34c66d39e\",\"urls\":[\"bzz-raw://37efc6a4665b537657283652d75919ec8dd3d48d85150b5285041bc9614fec11\",\"dweb:/ipfs/QmWKgeJEj222kNefTkauHwM5x58KTxSGgcbLseH9Fq8jed\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/BufferChainlink.sol\":{\"keccak256\":\"0xe4aa364f56414c4326ffe12c1121d591be6ad168afb42b24a823f6d76299dd63\",\"urls\":[\"bzz-raw://e3e91a0eddb6fc6c53acdfbd59771deff1678330128d3c98014c668763efb45e\",\"dweb:/ipfs/Qmbt5VNT2W2oCN44536JGNuHqAJdmYGqzEFcHvy8W1tAsY\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/CBORChainlink.sol\":{\"keccak256\":\"0xbb4d8257c1af348cac9828ee531428b148bb726517357fe6a80279ac45b658b5\",\"urls\":[\"bzz-raw://8c8c5da0358946437fac595591367066b8d6e5f58414c027a79a093e1f3241c1\",\"dweb:/ipfs/QmNQ5TPzaPEbj5kaX17YLuZEmhv8NGfoCrUVK3s6gQuHdA\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Chainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Chainlink = Chainlink
