// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
//version of compiler we want our contract to use. should be same a hardhat.config.js

import "hardhat/console.sol";
//hardhat allowing us to use consol.logs for debuggin

contract WavePortal {
    uint256 totalBirds;
    //this is a "state variable" stored permanetly in contract storage.

    constructor() {
        console.log("Smarty McSmartContract!");
    }

    function bird() public {
        totalBirds += 1;
        console.log("%s has flipped you the bird!", msg.sender);
        //<msg.sender> wallet address of the person who clled the function.  Like built in authenticaton.  to beable to call a smart contrat function you need to be connecte with a valid wallet.  we can later write function that only allow certain wallets addresses can hit. 
    }

    function getTotalBirds() public view returns (uint256) {
        console.log("Smarty McSmartContract has been flipped the bird %d times!", totalBirds);
        return totalBirds;
    }

    //this is a smart contract. it kinda looks like a class
}