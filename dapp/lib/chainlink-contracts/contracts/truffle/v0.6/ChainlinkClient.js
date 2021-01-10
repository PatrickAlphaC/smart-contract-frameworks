'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const ChainlinkClient = contract({
 "contractName": "ChainlinkClient",
 "abi": [
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "bytes32",
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkCancelled",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "bytes32",
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
     "internalType": "bytes32",
     "name": "id",
     "type": "bytes32"
    }
   ],
   "name": "ChainlinkRequested",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60806040526001600455348015601457600080fd5b50603f8060226000396000f3fe6080604052600080fdfea264697066735822122064ab0b78556298e316c37174d1bb2f0f676c4c3db9bfe3e4f2c5e055c4213fbf64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x1 PUSH1 0x4 SSTORE CALLVALUE DUP1 ISZERO PUSH1 0x14 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3F DUP1 PUSH1 0x22 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH5 0xAB0B785562 SWAP9 0xE3 AND 0xC3 PUSH18 0x74D1BB2F0F676C4C3DB9BFE3E4F2C5E055C4 0x21 EXTCODEHASH 0xBF PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "546:8723:4:-:0;;;1243:1;1212:32;;546:8723;5:9:-1;2:2;;;27:1;24;17:12;2:2;546:8723:4;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x6080604052600080fdfea264697066735822122064ab0b78556298e316c37174d1bb2f0f676c4c3db9bfe3e4f2c5e055c4213fbf64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH5 0xAB0B785562 SWAP9 0xE3 AND 0xC3 PUSH18 0x74D1BB2F0F676C4C3DB9BFE3E4F2C5E055C4 0x21 EXTCODEHASH 0xBF PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "546:8723:4:-:0;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkCancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkFulfilled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"id\",\"type\":\"bytes32\"}],\"name\":\"ChainlinkRequested\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{},\"title\":\"The ChainlinkClient contract\"},\"userdoc\":{\"methods\":{},\"notice\":\"Contract writers can inherit this contract in order to create requests for the Chainlink network\"}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/ChainlinkClient.sol\":\"ChainlinkClient\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/Chainlink.sol\":{\"keccak256\":\"0x7048bfd6e6fe4e60ea4af01ed44fc0494cec75df75c6b542a6f08ed34c66d39e\",\"urls\":[\"bzz-raw://37efc6a4665b537657283652d75919ec8dd3d48d85150b5285041bc9614fec11\",\"dweb:/ipfs/QmWKgeJEj222kNefTkauHwM5x58KTxSGgcbLseH9Fq8jed\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/ChainlinkClient.sol\":{\"keccak256\":\"0xf9c4039a2e4ca49bbb9409baf6afcf99a572695d3e5f3c191b7fac6cfa7378e9\",\"urls\":[\"bzz-raw://792875fb40c3723baa0607337a6bd27b5c3bc55502bc8db9981ed71747e9ce52\",\"dweb:/ipfs/QmUWKB9zaaf1ywDd9vWe4JB9Pjtqt1cddjUoGwEiKfP2HP\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/ChainlinkRequestInterface.sol\":{\"keccak256\":\"0x4b41b021bf58c429891ff291637de29be54741565105de82238dac9f6ecee374\",\"urls\":[\"bzz-raw://84681ff65b31b2e2c6977289661733c0f22409965b9057140f56f8a9ff185048\",\"dweb:/ipfs/QmS4TQJDSHQiKNwQ4LkSCVp7LjuRQwp6gem3271vtCwz9k\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/ENSInterface.sol\":{\"keccak256\":\"0xf4998e886147b298eda28b4eacbdc90c58ba63ba475469651f2072e188dd5a64\",\"urls\":[\"bzz-raw://c1e2334294a816b7eda9de280e39b9463ebde2db8b242410eb991b2f623b47d4\",\"dweb:/ipfs/QmNY5bajahfFRmhBgcMVQ7712zHKxc6HkuN7LaiKtpjb7t\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0xdbf46b45a4c9f38ba71a0391aed0e7b108854b619f292d907ae537228868bda6\",\"urls\":[\"bzz-raw://3ae40466809630c4731e2e3a697d6885727c577aaf260766c8a2f534ad3f6ee8\",\"dweb:/ipfs/QmTzpN5yP4Y5jvQ1ohfXFrce3sjzUiSChYJgZj9VvhVohG\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/PointerInterface.sol\":{\"keccak256\":\"0x6458d82762d4f13c020a13efdbd9bf14500e147df707184a693aea91449c2f4f\",\"urls\":[\"bzz-raw://735950f3a544fc6ef2db92405597169bfb5fdb9df83623c0d99fd3d85de8690d\",\"dweb:/ipfs/QmZHxb5Qr7Kw9DHAg4VwEADue9ffNyyhbiyEZ15A5mANUN\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/BufferChainlink.sol\":{\"keccak256\":\"0xe4aa364f56414c4326ffe12c1121d591be6ad168afb42b24a823f6d76299dd63\",\"urls\":[\"bzz-raw://e3e91a0eddb6fc6c53acdfbd59771deff1678330128d3c98014c668763efb45e\",\"dweb:/ipfs/Qmbt5VNT2W2oCN44536JGNuHqAJdmYGqzEFcHvy8W1tAsY\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/CBORChainlink.sol\":{\"keccak256\":\"0xbb4d8257c1af348cac9828ee531428b148bb726517357fe6a80279ac45b658b5\",\"urls\":[\"bzz-raw://8c8c5da0358946437fac595591367066b8d6e5f58414c027a79a093e1f3241c1\",\"dweb:/ipfs/QmNQ5TPzaPEbj5kaX17YLuZEmhv8NGfoCrUVK3s6gQuHdA\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/ENSResolver.sol\":{\"keccak256\":\"0xdddea29d7407c1dbd1e130d885fc1a0934e98f0a7cc9f4d5bfd002bb2cfbcf82\",\"urls\":[\"bzz-raw://c4c764d69c47754d7b219fab558bf4be2a6444470ede7aa0ab1e446aea01dbda\",\"dweb:/ipfs/QmWp2CNUw9xt8ir2P3LhGHuydUsAXnyZ382U2BUjhoYPvy\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/SafeMath.sol\":{\"keccak256\":\"0x95dbe2dd5ab8682b99bc3d7d297b621d4237442da160f78d3323ee5c4a06ded3\",\"urls\":[\"bzz-raw://d753308ff4eb43fba6f9ede371a33f707c5818350770dcb078a7d78ac8251361\",\"dweb:/ipfs/Qme64eYKWoTQiP3WhqGHoMqrENNZ9L8SdBLQ2hx5SmzUda\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('ChainlinkClient.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.ChainlinkClient = ChainlinkClient
