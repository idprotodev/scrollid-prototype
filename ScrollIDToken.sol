// ScrollIDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ScrollIDToken is ERC20 {
    constructor() ERC20("ScrollID Token", "SID") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
