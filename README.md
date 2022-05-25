# Top Smart Contract/Blockchain Frameworks for 2021

And also blockchain tools, and noteworthy integrations. We also listed some important non-framework tools after the top 3 section. 

We went through each of the following frameworks:

Top 3 Frameworks
- [x] Truffle
- [x] Hardhat
- [x] Brownie 

Important Non-Framework tools
- [x] create-eth-app
- [x] OpenZepplin Contracts & Upgrade Plugin
- [x] Etherscan Verifier & Block Explorer

Great Beginer tools
- [x] OneClickDapp
- [x] Remix
- [x] Scaffold-ETH
- [x] eth.build  

Alternative Frameworks
- [x] Embark
- [x] Waffle 
- [x] Dapp.Tools 
- [x] sbt-ethereum
- [x] Epirus

Outdated Frameworks
- [x] Etherlime 
- [x] Openzepplin 
- [x] Cobra 
- [x] Parasol 

Mentionable
- [x] 0xcert framework 

And attempted to do the following: 

1. Deploy a smart contract locally
2. Deploy a smart contract to a testnet
3. Deploy a smart contract that uses [Chainlink](https://chain.link/) to a testnet

I've made a PR to the [ConsenSys repo](https://github.com/ConsenSys/ethereum-developer-tools-list) with some improvements to their list. You can read more about even MORE tools there. 

# Top Recommended Frameworks:
## Hardhat (JS)
## Truffle (JS)
## Brownie (PY)

## [Hardhat](https://hardhat.org/)

- Summary: ETH Foundation funded project, previously buidler. 
- Technology
  - Javascript
  - Web3.js and Ethers.js plugins
  - Openzepplin upgradable contracts plugin
  - Etherscan plugin
  - Blockchain forking
- Blockchain
  - Hardhat Runtime Environment/Local
  - Testnets
  - Mainnet
- Has Testing
  - Waffle
- Maintainance
  - Very Active
- Support
  - Active
- Open Sourced

Hardhat is one of the best frameworks out there. Having some of the fastest tests, best tutorials, and easiest integrations, honestly, everyone who like JS frameworks should try out hardhat at some point. Really easy to get going, blazing fast tests, and getting started is really simple. There discord has always been really quick to respond to questions as well, so if you run into issues, you can always ask for help. They use waffle and ethers.js for testing, which is arguably the "better" javascript smart contract framework, due to some really nice quality of life improvements over web3.js. 

This project has an awesome feel to it: it's clean. It does what you wnat it to do. It's *really* fast. Very clean project that is clearly designed to make smart contract developers lives better. 


## [Truffle](https://www.trufflesuite.com/)

- Summary: The most widely used platform that was recently aquired by ConsenSys (Nov. 2020). 
- Technology
  - Javascript
  - Web3.js
  - Openzepplin upgradable contracts plugin
  - Etherscan plugin
  - Blockchain forking
- Blockchain
  - Ganache/Local
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Very Active
- Support
  - Active
- Open Sourced
  - With paid upgrades

Truffle has been the default framework for a few years now, so you'll find easily the most projects using this platform, so finding examples is easy. It also comes packed with other tools like drizzle and ganache, which you'll see, a lot of other platforms are based on ganache due to how powerful it is. Tests run a little slower than hardhat because of this, and due to the high volume of users, getting support can be a little hard. I'm looking forward to seeing how they will improve this project since being acquired by Consensys. For those looking for even more tools, you can pay for a truffle teams account, where you'll get access to some really cool features to make your life easier. Their documentation appears to be starting to fall off a little, but if you google an error you run into, you'll most likely run into someone who has run into the error before as well. I've found some of the best ways to improve the project is to leave a VERY THOUGHT OUT issue on their github. This also is our open sourced duty to do so to make these protocols better. 

Due to almost everyone is familiar with it, getting support from your peers is usually pretty easy. I really hope to see the team get some more support on this project, as they are so insanly swamped. It feels like the truffle team has started working more on their paid platform when some of the docs of their core project are depreciating. I hope they see this post and work to improve it so that they can stay as one of the go-to platforms for testing and deploying smart contracts. 


## [Brownie](https://eth-brownie.readthedocs.io/en/stable/)

- Summary: The best python framework, used by defi projects like yearn.finance.  
- Technology
  - Python
  - Web3.py
  - Blockchain forking
  - Etherscan plugin
- Blockchain
  - Ganache/Local
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Very Active
- Support
  - Active
- Open Sourced

Heavily inspired by truffle, this is basically the python equivalent, with some added quality of life changes. Due to it being written in python though, a lot of the headaches that comes with working with javascript are removed, and you get this wonderfully simple framework for working and deploying smart contracts.

Being someone who loves python myself, I'm really excited for the future of this project, and as adoptiong picks up, it looks like more and more projects are looking at python and this framework to deploy their smart contracts. I've started using brownine as my go-to framework and have been loving it. Yearn.finance is using this platform and basically put it on the map. I've chatted with a few of the people who have recently started working on it more and they are a really intelligent group. 

If you come from the python world, or want a really simple clean framework, this is for you. No questions asked. 

# Important tools to use with your frameworks

## Openzepplin & Upgrades plugin
## Etherscan/Block Explorer Verifier
## create-eth-app

## [Openzepplin & Upgrades plugin](https://openzeppelin.com/contracts/)

Openzepplin is a platform that creates tools for smart contract engineers to use. They have some defaults like ERC20 and ERC721 tools, where you can just import their contract and have a token built in seconds. Look how simple it is to make an ERC20 with Openzepplin: 

```
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}
```

It doesn't make sense to reinvent the wheel, openzepplin is an open sourced project dedicated to making sure you don't have to. 

The other HUGE piece the openzepplin has, is their upgradable contracts functionality. Deploying a working project means you'll have to deploy a proxy contract that you'll need to update whenever you want to make changes. This is another project that feels amazing, and "clean". Honestly, every project no matter what platform you're using should probably use something openzepplin has created at some point. 

## [Etherscan/Block Explorer Verifier](https://etherscan.io/)

Etherscan is the most popular block explorer. When people want to check out your contract and what you've deployed, they won't be able to unless they have the ABI and contract address. Finding the contract address is usually pretty easy, but it's a lot hard to get the ABI! You'll want people to easily be able to see and interact with your smart contract, so you always want to verify it so that others can do just that. Most frameworks have some sort of verification plugin where you can deploy a smart contract and then right after verify it on Etherscan. Be sure to use this in your applications.

## [create-eth-app](https://github.com/paulrberg/create-eth-app)

Having a backend of smart contracts is great... but if no one can use it, it's worthless. create-eth-app is a platform that allows you to spin up a front-end for your smart contracts using reactJS. It uses a lot of newer react tricks like state hooks, and makes building really powerful front ends easier. 

# Important Starter Tools

## [Scaffold-ETH](https://github.com/austintgriffith/scaffold-eth)
## [eth.build](https://eth.build/)
## [Remix](https://remix.ethereum.org/)
## [oneclickdapp](https://oneclickdapp.com/)

# Alternative frameworks

The rest of these frameworks are not bad at all, and may work for you. Some of them do have some really cool ideas on what to put into a smart contract framework, and I hope the main 3 take note of some of these awesome ideas. These are tools that probably could use a little more explore time. 

## Embark (JS)
## Waffle (JS)
## Dapp.Tools (HASKELL)
## sbt-ethereum (SCALA/CLI)
## Epirus (JAVA)
## Apeworx (Python)

## [Embark](https://github.com/embarklabs/embark)
- Summary: Javascript framework with a ton of bells and whistles for front end development.  
- Technology
  - Javascript
  - Web3.js
  - Proxy contract support
- Blockchain
  - Ganache/Local
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Not very active
- Support
  - Active
- Open Sourced

I was surprised to see a framework outside of the top 3 with so many stars on github (3.1k). I'm not sure who uses it, but at least *someone* appears to be using it. This tool has a ton of while bells and whistles. After a little bit of struggling starting it (of course, I did my open sourced duty and created an issue to fix), I was able to deploy my contracts to the Kovan network. It comes with a UI that allows you to interact with the blockchain and your contracts in a GUI. It looked like there was a bit of a learning curve that I didn't spend enough time to get over, but showed a lot of promised. I'd love to see people try this framework out some more and see the power. I feel like I might not be able to do it justice here due to my limited time spent with the project. 

I think decoupling your front end from your back end is still best-practice, but if you need to spin up a project with a good front end quickly, this might be a project for you to look into. 

I was able to get some support on the issues I was running into, and was happy to see they were aware of the support chat. 100% not a dead project, but not being worked on as activly as something like Hardhat, Brownie, or Truffle. Very cool project, and would recommend anyone check out if they like Hardhat and Truffle. 
## [Waffle](https://getwaffle.io/)
- Summary: Lightweight javascript framework focused on testing.  
- Technology
  - Javascript
  - Ethers.js
- Blockchain
  - Anything you run
- Has Testing
- Maintainance
  - Very Active
- Support
  - Active
- Open Sourced

Waffle can be used as a deployment framework itself... although you'll have to write a lot more of your own custom scripts. It's listed as a smart contract framework, although it feels a little silly to compare it amoungst these other frameworks. Waffle can be used with whatever framework you like, and is currently the default tool for working with Hardhat. Waffle is great, and even better paired with Hardhat. I don't recommend using this by itself, but if you don't want to work with any of the bells and whistles that come with hardhat or truffle, then using this feels like a more raw, simple, customizable version of doing so. 

## [Dapp.Tools](http://dapp.tools/)
- Summary: Haskell simple framework used by MakerDAO. 
- Technology
  - Haskell/CLI
- Blockchain
  - Local/Ganache
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Active
- Support
  - Active
- Open Sourced

Tool used by MakerDAO that surprised me. Its written in haskell, but has support for a lot of the plugins like Openzepplin that we use and love. It looks to be a minimalist framework that is powerful enough to do what you want it to do. I was able to get help on deploying my contract with this platform, and was surprised by how clean and simple it was. If you're looking for a minimalist framework then I'd recommend checking this one out as well. 

## [Epirus](https://docs.epirus.io/sdk/cli/)

- Summary: A truffle like java implementation. 
- Technology
  - Java
- Blockchain
  - Ganache/Local
  - Testnets (Not Kovan)
- Has Testing
- Maintainance
  - Active
- Support
  - Not very Active
- Open Sourced
  - With Paid upgrades

Even though I said it's "truffle like" its not very truffle like at all in style, but in the business sense. They have an open sourced project, but they have a paid upgraded tool for those looking to work more with it. They use javas web3 implementation and it looks like it's still early in the projects development. I was happy to see they had android support, so I'm really curious to see how this project progresses, and we could get more java engineers into the industry, as there are not many java smart contract platforms. I wasn't able to deploy to Kovan, so that was a stopped, but it looks like they have support for rinkeby. In any case, excited to see the project move along. 

## [ApeWorkx](https://docs.apeworx.io/ape/stable/)
The Ethereum Development Framework For Python Developers, Data Scientists, And Security Professionals

## [sbt-ethereum](https://www.sbt-ethereum.io/)
- Summary: SBT plugin, command line and scala project that tackles two problems. Hobbyists working with smart contracts and smart contract engineers. 
- Technology
  - Scala and SBT
- Blockchain
  - Local/Ganache
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Mildly Active
- Support
  - Inactive
- Open Sourced

One of the more interesting projects I played with, this platform focuses on interacting with smart contracts almost solely from the command line, or if you were a scala engineer. I don't almost any scala experience so I don't have a great standpoint to review this platform. Seems like it could be really cool if you know scala and are looking to get into ethereum. 

# Outdated frameworks

These frameworks are no longer supported, and really shouldn't be used anymore. I see no reason to use these over any of the frameworks mentioned above. 

## Openzepplin CLI/SDK (JS)
## Etherlime (JS)
## Parasol (JS)
## Cobra (PY)

## [Cobra](https://github.com/cobraframework/cobra)

- Summary: Inactive python framework.  
- Technology
  - Python
  - Web3.py
- Blockchain
  - Ganache/Local
  - Testnets
  - Mainnet
- No Test
- Maintainance
  - Inactive
- Support
  - Inactive
- Open Sourced

Unfourtunatly we didn't spend enough time to get a working project done, we had some issues with the installation. It looks like it's very similar to brownie though, with a really intelligent group of contributors. It isn't activly maintained anymore, (as of writting, last commit was 17 months ago) and it looks like it's testing never was fully fleshed out. I see no reason to use this over brownie, but it looks like brownie may have drawn some inspiration from this project as well. 
## [Openzepplin CLI/SDK (JS)](https://forum.openzeppelin.com/t/building-for-interoperability-why-we-re-focusing-on-upgrades-plugins/4088)

- Summary: Openzepplin's depreciated smart contract framework. They depreciated to focus on upgrades plugin. Really clean JS framework otherwise. 
- Technology
  - Javascript
  - Web3.js and Ethers.js plugins
  - Openzepplin upgradable contracts plugin
- Blockchain
  - Local
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Inactive
- Support
  - Inactive
- Open Sourced

Now I understand why this project stopped working on this, they want to focus on a *really* hard problem with upgradeable smart contracts, but to be honest, it's sort of a shame. This project is cllleeeeaaaaaan. I was able to deploy my Chainlinked smart contract and read the price of ETH quicker than almost any other framework. It also had some really nice CLI options, that it looks like Epirus and Hardhat have as well. It also comes built in with upgradeable options, which is huge in a world where so few platforms do. 

Now I don't recommend using this as they intentionally are not supporting it anymore, but this was one of the best developer experiences I've had with a smart contract framework. I hope the main 3 are able to pick up on what made this project so shiny. There is a reason why I said above that everyone should use openzepplin tools. It just works. 

## [Etherlime](https://github.com/LimeChain/etherlime)
- Summary: Inactive JS framework. 
- Technology
  - Javascript
  - Ethers.js
- Blockchain
  - Local
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Inactive
- Support
  - Inactive
- Open Sourced

Etherlime seems to be another JS framework that is falling out of favor and not being activly worked on. It's tightly coupled with an outdated feature of Infura, so we weren't able to deploy our smart contracts on Kovan. Seems like a really strong project when it was live, and looks like it still works for local development, but wouldn't recommend working with it over the top 3. 

## [Parasol](https://github.com/Lamarkaz/parasol)
- Summary: Inactive JS framework. 
- Technology
  - Javascript
  - web3.js
- Blockchain
  - Local/Ganache
  - Testnets
  - Mainnet
- Has Testing
- Maintainance
  - Inactive
- Support
  - Inactive
- Open Sourced

Another inactive JS framework (over 2 years without a commit). It has some cool features like `parasol interact` and some integrations, and clearly some really intelligent people worked on this, but I see no reason to use this platform over any of the other JS frameworks. 

Mention: 0xcert

0xcert seemed more like an asset manager focused on ETH than a deployment framework, so I will not review 0xcert. 

