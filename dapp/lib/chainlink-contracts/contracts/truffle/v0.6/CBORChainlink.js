'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const CBORChainlink = contract({
 "contractName": "CBORChainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201cebfecaab6b01b45d7aaf9ec47344912cbd995365c78e198d264026e5acf92b64736f6c63430006060033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SHR 0xEB INVALID 0xCA 0xAB PUSH12 0x1B45D7AAF9EC47344912CBD SWAP10 MSTORE8 PUSH6 0xC78E198D2640 0x26 0xE5 0xAC 0xF9 0x2B PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "83:2369:60:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201cebfecaab6b01b45d7aaf9ec47344912cbd995365c78e198d264026e5acf92b64736f6c63430006060033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SHR 0xEB INVALID 0xCA 0xAB PUSH12 0x1B45D7AAF9EC47344912CBD SWAP10 MSTORE8 PUSH6 0xC78E198D2640 0x26 0xE5 0xAC 0xF9 0x2B PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "83:2369:60:-:0;;;;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/CBORChainlink.sol\":\"CBORChainlink\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/BufferChainlink.sol\":{\"keccak256\":\"0xe4aa364f56414c4326ffe12c1121d591be6ad168afb42b24a823f6d76299dd63\",\"urls\":[\"bzz-raw://e3e91a0eddb6fc6c53acdfbd59771deff1678330128d3c98014c668763efb45e\",\"dweb:/ipfs/Qmbt5VNT2W2oCN44536JGNuHqAJdmYGqzEFcHvy8W1tAsY\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/CBORChainlink.sol\":{\"keccak256\":\"0xbb4d8257c1af348cac9828ee531428b148bb726517357fe6a80279ac45b658b5\",\"urls\":[\"bzz-raw://8c8c5da0358946437fac595591367066b8d6e5f58414c027a79a093e1f3241c1\",\"dweb:/ipfs/QmNQ5TPzaPEbj5kaX17YLuZEmhv8NGfoCrUVK3s6gQuHdA\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('CBORChainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.CBORChainlink = CBORChainlink
