const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    //compiles our contract
    //creates files used to work with contract in /artifacts
    //hre stands for Hardhat Runtime Environment: an object containing all functionality of Hardhat when running a task, test, or script. 
    const waveContract = await waveContractFactory.deploy();
    //this makes hardhat create a local ethereum network(blockchain) to run this contract locally
    //it is destroyed after it runs (kinda like when you run a app locally with out persistent DB)
    await waveContract.deployed();
    //this waits for the local blockchain to be deployed before actually running the constructor.
    console.log("Contract deployed to:", waveContract.address);
    //this gives us the address of the deployed contract so we can find the contract on the blockchain
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();