// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

/**
 * @title ERC777Token
 * @dev Simple ERC777 Token based on OpenZeppelin implementation, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` or `ERC777` functions.
 */
contract ERC777Token is ERC777 {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor (
        string memory name,
        string memory symbol,
        address[] memory defaultOperators,
        uint256 initialSupply) public ERC777(name, symbol, defaultOperators) {
        _mint(msg.sender, initialSupply, "", "");
    }
}
