
const hre = require("hardhat");

async function main() {
    //deploy
    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy("PETToken", "PET",ethers.utils.parseUnits('10000000000'));
    await token.deployed();
    console.log("Token deployed to:", token.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
