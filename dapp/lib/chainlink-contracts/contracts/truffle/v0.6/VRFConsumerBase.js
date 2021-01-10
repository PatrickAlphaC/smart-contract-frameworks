'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const VRFConsumerBase = contract({
 "contractName": "VRFConsumerBase",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "address",
     "name": "_vrfCoordinator",
     "type": "address"
    },
    {
     "internalType": "address",
     "name": "_link",
     "type": "address"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "",
     "type": "bytes32"
    }
   ],
   "name": "nonces",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "requestId",
     "type": "bytes32"
    },
    {
     "internalType": "uint256",
     "name": "randomness",
     "type": "uint256"
    }
   ],
   "name": "rawFulfillRandomness",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "bytes32",
     "name": "_keyHash",
     "type": "bytes32"
    },
    {
     "internalType": "uint256",
     "name": "_fee",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "_seed",
     "type": "uint256"
    }
   ],
   "name": "requestRandomness",
   "outputs": [
    {
     "internalType": "bytes32",
     "name": "requestId",
     "type": "bytes32"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "methodIdentifiers": {
   "nonces(bytes32)": "9e317f12",
   "rawFulfillRandomness(bytes32,uint256)": "94985ddd",
   "requestRandomness(bytes32,uint256,uint256)": "dc6cfe10"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_vrfCoordinator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_link\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"requestId\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"randomness\",\"type\":\"uint256\"}],\"name\":\"rawFulfillRandomness\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_keyHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_fee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_seed\",\"type\":\"uint256\"}],\"name\":\"requestRandomness\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"requestId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"PURPOSEReggie the Random Oracle (not his real job) wants to provide randomnessto Vera the verifier in such a way that Vera can be sure he's notmaking his output up to suit himself. Reggie provides Vera a public keyto which he knows the secret key. Each time Vera provides a seed toReggie, he gives back a value which is computed completelydeterministically from the seed and the secret key.Reggie provides a proof by which Vera can verify that the output wascorrectly computed once Reggie tells it to her, but without that proof,the output is indistinguishable to her from a uniform random samplefrom the output space.The purpose of this contract is to make it easy for unrelated contractsto talk to Vera the verifier about the work Reggie is doing, to providesimple access to a verifiable source of randomness. *****************************************************************************USAGECalling contracts must inherit from VRFConsumerInterface, and caninitialize VRFConsumerInterface's attributes in their constructor asshown:contract VRFConsumer {constuctor(<other arguments>, address _vrfCoordinator, address _link)VRFConsumerBase(_vrfCoordinator, _link) public {<initialization with other arguments goes here>}}The oracle will have given you an ID for the VRF keypair they havecommitted to (let's call it keyHash), and have told you the minimum LINKprice for VRF service. Make sure your contract has sufficient LINK, andcall requestRandomness(keyHash, fee, seed), where seed is the input youwant to generate randomness from.Once the VRFCoordinator has received and validated the oracle's responseto your request, it will call your contract's fulfillRandomness method.The randomness argument to fulfillRandomness is the actual random valuegenerated from your seed.The requestId argument is generated from the keyHash and the seed bymakeRequestId(keyHash, seed). If your contract could have concurrentrequests open, you can use the requestId to track which seed isassociated with which randomness. See VRFRequestIDBase.sol for moredetails.Colliding `requestId`s are cryptographically impossible as long as seedsdiffer. (Which is critical to making unpredictable randomness! See thenext section.) * *****************************************************************************SECURITY CONSIDERATIONSSince the ultimate input to the VRF is mixed with the block hash of theblock in which the request is made, user-provided seeds have no impacton its economic security properties. They are only included for APIcompatability with previous versions of this contract.Since the block hash of the block which contains the requestRandomness()call is mixed into the input to the VRF *last*, a sufficiently powerfulminer could, in principle, fork the blockchain to evict the blockcontaining the request, forcing the request to be included in adifferent block with a different hash, and therefore a different inputto the VRF. However, such an attack would incur a substantial economiccost. This cost scales with the number of blocks the VRF oracle waitsuntil it calls fulfillRandomness().\",\"methods\":{\"requestRandomness(bytes32,uint256,uint256)\":{\"details\":\"See \\\"SECURITY CONSIDERATIONS\\\" above for more information on _seed.The fulfillRandomness method receives the output, once it's providedby the Oracle, and verified by the vrfCoordinator.The _keyHash must already be registered with the VRFCoordinator, andthe _fee must exceed the fee specified during registration of the_keyHash.The returned requestId can be used to distinguish responses to *concurrent requests. It is passed as the first argument tofulfillRandomness.\",\"params\":{\"_fee\":\"The amount of LINK to send with the request\",\"_keyHash\":\"ID of public key against which randomness is generated\",\"_seed\":\"seed mixed into the input of the VRF\"},\"returns\":{\"requestId\":\"unique ID for this request\"}}}},\"userdoc\":{\"methods\":{\"requestRandomness(bytes32,uint256,uint256)\":{\"notice\":\"requestRandomness initiates a request for VRF output given _seed\"}},\"notice\":\"****************************************************************************Interface for contracts using VRF randomness *****************************************************************************\"}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/VRFConsumerBase.sol\":\"VRFConsumerBase\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/VRFConsumerBase.sol\":{\"keccak256\":\"0xee1c006961b33c3b070d0903d36b44d702034b472f338bbb179fd847c756d90f\",\"urls\":[\"bzz-raw://4f0b5c82551ea1e1cbd80df39a58626620b8c4b9cc009087c254cdc69197bd3a\",\"dweb:/ipfs/QmPLDRT7dK4R39iLh4U6qB3NzPavVPfAMenpS3jzbyB516\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/VRFRequestIDBase.sol\":{\"keccak256\":\"0x0b004386a2f5c662413598e3a2644bdc0ba8ec95c1bbb50a15f97e55c25e8bc1\",\"urls\":[\"bzz-raw://825b757416c08bdf36ebc9f477bcf1dff2979a37a04af8fa128a8b8da5195ed8\",\"dweb:/ipfs/QmWhGF2rLEKfCKLvN83VL3Zh19YvvoWqVaTH7ZkyJrcLvS\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/LinkTokenInterface.sol\":{\"keccak256\":\"0xdbf46b45a4c9f38ba71a0391aed0e7b108854b619f292d907ae537228868bda6\",\"urls\":[\"bzz-raw://3ae40466809630c4731e2e3a697d6885727c577aaf260766c8a2f534ad3f6ee8\",\"dweb:/ipfs/QmTzpN5yP4Y5jvQ1ohfXFrce3sjzUiSChYJgZj9VvhVohG\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/SafeMath.sol\":{\"keccak256\":\"0x95dbe2dd5ab8682b99bc3d7d297b621d4237442da160f78d3323ee5c4a06ded3\",\"urls\":[\"bzz-raw://d753308ff4eb43fba6f9ede371a33f707c5818350770dcb078a7d78ac8251361\",\"dweb:/ipfs/Qme64eYKWoTQiP3WhqGHoMqrENNZ9L8SdBLQ2hx5SmzUda\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('VRFConsumerBase.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.VRFConsumerBase = VRFConsumerBase
