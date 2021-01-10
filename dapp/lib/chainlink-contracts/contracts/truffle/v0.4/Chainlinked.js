'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Chainlinked = contract({
 "contractName": "Chainlinked",
 "abi": [
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkRequested",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkFulfilled",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkCancelled",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60806040526001600455348015601457600080fd5b5060358060226000396000f3006080604052600080fd00a165627a7a72305820ac0c3cedd583a6d9c332c91fdad318b05df34c77d522842de5fa83efa837b7380029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x4 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x35 DUP1 PUSH1 0x22 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xac 0xc EXTCODECOPY 0xed 0xd5 DUP4 0xa6 0xd9 0xc3 ORIGIN 0xc9 0x1f 0xda 0xd3 XOR 0xb0 0x5d RETURN 0x4c PUSH24 0xD522842DE5FA83EFA837B738002900000000000000000000 ",
   "sourceMap": "271:4198:3:-;;;1233:1:2;1206:28;;271:4198:3;8:9:-1;5:2;;;30:1;27;20:12;5:2;271:4198:3;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080fd00a165627a7a72305820ac0c3cedd583a6d9c332c91fdad318b05df34c77d522842de5fa83efa837b7380029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xac 0xc EXTCODECOPY 0xed 0xd5 DUP4 0xa6 0xd9 0xc3 ORIGIN 0xc9 0x1f 0xda 0xd3 XOR 0xb0 0x5d RETURN 0x4c PUSH24 0xD522842DE5FA83EFA837B738002900000000000000000000 ",
   "sourceMap": "271:4198:3:-;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkFulfilled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkCancelled\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{},\"title\":\"The Chainlinked contract\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/Chainlinked.sol\":\"Chainlinked\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/Chainlink.sol\":{\"keccak256\":\"0x3e8d01f8aead4e1eac6b3332d366ed8bc2ef5d889c2c8c344777b981d4071f63\",\"urls\":[\"bzzr://7be4bdda81bc444446593968124112fb399d460f529d80761e50c47874b9cb4f\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/ChainlinkClient.sol\":{\"keccak256\":\"0xa7046a924941ac7a836997e9784dada7c0d9af216c42c88c3175985062352f8a\",\"urls\":[\"bzzr://de43d2920231895680ea16a52162b1cf50727c419ba185f69217850d85381a3e\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/Chainlinked.sol\":{\"keccak256\":\"0x7ea2587ce4ad6fb965aac139bf7872baafed08c48cb6d2e3cb1c4139b535c73a\",\"urls\":[\"bzzr://bf058b58fa620e0c3d5d9286728a5233ab43dbd7838dd786e7aec9899e848f37\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/interfaces/ChainlinkRequestInterface.sol\":{\"keccak256\":\"0x7d3983584065248fba8f0ce75fd86feac43ade43784466f87ea502254ddec992\",\"urls\":[\"bzzr://30de07df8cb9fb4ec53aff0f115f88d65936ffd6e90d2aeb031a05d6bf4de6c1\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/interfaces/ENSInterface.sol\":{\"keccak256\":\"0xd0b1a6134b5d6c0213bc4db5df8693ec41e13de3d97d43cc8d19639e516f9767\",\"urls\":[\"bzzr://93d66e26b4b5cf6cfa8c6a5d04cb56ff27d49a2aee8f54858ac3db7658355b1f\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0x37f31fbd4f4f28ba236cbd9a61ae9b6f7806ea7fe0a684a855e4835f808f8b92\",\"urls\":[\"bzzr://5518135de15ba1afd8bdac829875935dea5520b152d1f602cdc34551d3c0b806\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/interfaces/PointerInterface.sol\":{\"keccak256\":\"0x8019f30a207af4ee80a8b2774e42aba721641254ed0a97826a54f33d7caef218\",\"urls\":[\"bzzr://8ddbb9ae67ec27aed40d6013d6ea176c05f7cd61d4f6fa95492a03fa086d90af\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/Buffer.sol\":{\"keccak256\":\"0x900b4c8ab35b4876d89835a8b050c96107ace250a70f64c5bba6a78a60f03883\",\"urls\":[\"bzzr://408340da4e8fa35e608196ee508f11f9d44f6f70a10f0db0083ab20b5a894d59\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/CBOR.sol\":{\"keccak256\":\"0xf1b54cf6a1c57ac32980695d109e08025fe2245b22a4b6bb1cdad45e04d05883\",\"urls\":[\"bzzr://048573793d67c5e7d779847adf35c39096ad098b8d934c3c79205b36cde64dd3\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/ENSResolver.sol\":{\"keccak256\":\"0x08965df63f00cb8d164d6fc36a0c388740725906b0bfb79b17391d5dfeabf683\",\"urls\":[\"bzzr://0700cb12e032ed8ed8327e446dfd805ae9fa28785a2909a73def511fe374b8cd\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.4/vendor/SafeMath.sol\":{\"keccak256\":\"0x65f5d6e031847d23e8c1481931224c814cccda28bb2364e6fb0f109f4357b6b4\",\"urls\":[\"bzzr://2c5808ad411781bc368fbe6c5e8b36b08b23bf604e1e9fb6337f6f5069fdba4a\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Chainlinked.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Chainlinked = Chainlinked
