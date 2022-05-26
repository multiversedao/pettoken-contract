// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Token is Ownable,ERC20Burnable {
    
    bool public mintStopped = false;
    
    constructor (
        string memory name,
        string memory symbol,
        uint256 initialBalance
    ) payable ERC20(name, symbol) {
        require(_msgSender() != address(0), "Invalid owner");
        transferOwnership(_msgSender());
        _mint(_msgSender(), initialBalance);
    }

    function stopMint() public onlyOwner{
        mintStopped = true;
    }

    function mint(address to, uint256 value) public onlyOwner returns (bool) {
        require(!mintStopped, "mint is stopped");
        _mint(to, value);
        return true;
    }

    function burn(address account, uint256 value) public onlyOwner returns (bool) {
        _burn(account, value);
        return true;
    } 
}
