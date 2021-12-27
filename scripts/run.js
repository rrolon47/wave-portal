
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    //gets contract owner wallet address and other persons wallet address (potential waver)
    
    const birdContractFactory = await hre.ethers.getContractFactory('WavePortal');
    //compiles our contract
    //creates files used to work with contract in /artifacts
    //hre stands for Hardhat Runtime Environment: an object containing all functionality of Hardhat when running a task, test, or script. 
    const birdContract = await birdContractFactory.deploy();
    //this makes hardhat create a local ethereum network(blockchain) to run this contract locally
    //it is destroyed after it runs (kinda like when you run a app locally with out persistent DB)
    await birdContract.deployed();
    //this waits for the local blockchain to be deployed before actually running the constructor.
    
    console.log("Find this contract at:", birdContract.address);
    //this gives us the address of the deployed contract so we can find the contract on the blockchain
    console.log("Deployed by Smarty McSmartContract:", owner.address);
    //gets the address of the person deploying our contract

    //here we manually call our functions made in WavePortal.sol like an API call  
    let birdCount;
    birdCount = await birdContract.getTotalBirds();
    //see how many waves we have
    
    let birdTxn = await birdContract.bird();
    await birdTxn.wait();
    //do the wave (changes the state variable)
    
    birdCount = await birdContract.getTotalBirds();
    //get the number of waves to see it it changed

    birdTxn = await birdContract.connect(randomPerson).bird();
    await birdTxn.wait();

    birdCount = await birdContract.getTotalBirds();
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