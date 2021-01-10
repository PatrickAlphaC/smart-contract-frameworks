'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Median = contract({
 "contractName": "Median",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122008be99a95c7e25a626df6ed448e21b501f7c4ec9478683bc163b93a38468e3d864736f6c63430006060033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 ADDMOD 0xBE SWAP10 0xA9 0x5C PUSH31 0x25A626DF6ED448E21B501F7C4EC9478683BC163B93A38468E3D864736F6C63 NUMBER STOP MOD MOD STOP CALLER ",
   "sourceMap": "89:7514:11:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122008be99a95c7e25a626df6ed448e21b501f7c4ec9478683bc163b93a38468e3d864736f6c63430006060033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 ADDMOD 0xBE SWAP10 0xA9 0x5C PUSH31 0x25A626DF6ED448E21B501F7C4EC9478683BC163B93A38468E3D864736F6C63 NUMBER STOP MOD MOD STOP CALLER ",
   "sourceMap": "89:7514:11:-:0;;;;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/Median.sol\":\"Median\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/Median.sol\":{\"keccak256\":\"0x7d5f7e0c161b9e0476ced988b190130c37a2141f13a91c664fd043226a98fb83\",\"urls\":[\"bzz-raw://396ee17f9cc94d4a55147273eb00de166de60415c2691cca92d953b2b6b6d65e\",\"dweb:/ipfs/QmUnPtGVpwDuMivPiZiv9zzCQXf2t4jsM38VS1oM4CV3WT\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/SignedSafeMath.sol\":{\"keccak256\":\"0x83e027df9251983d079e85187b87362d4898bc3052fd72ca365c89504b7f52ff\",\"urls\":[\"bzz-raw://3d56e6e2396d11b77828a3c6e531b525eb9d8c8a18e21aacac7284f46a74d8c0\",\"dweb:/ipfs/QmXvbrYGJVmnstRFZr3axhVT5ZCiWZSyCUnMu4p8jmNUHg\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/SafeMath.sol\":{\"keccak256\":\"0x95dbe2dd5ab8682b99bc3d7d297b621d4237442da160f78d3323ee5c4a06ded3\",\"urls\":[\"bzz-raw://d753308ff4eb43fba6f9ede371a33f707c5818350770dcb078a7d78ac8251361\",\"dweb:/ipfs/Qme64eYKWoTQiP3WhqGHoMqrENNZ9L8SdBLQ2hx5SmzUda\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Median.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Median = Median
