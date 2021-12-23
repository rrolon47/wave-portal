// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
//version of compiler we want our contract to use. should be same a hardhat.config.js

import "hardhat/console.sol";
//hardhat allowing us to use consol.logs for debuggin

contract WavePortal {
    constructor() {
        console.log("Smarty McSmartContract!");
    }
    //this is a smart contract. it kinda looks like a class
}