
describe("Token", function() {

    it("Should create and execute token mint", async function() {
            
      const Token = await hre.ethers.getContractFactory("Token")
      const token = await Token.deploy("PETToken", "PET",ethers.utils.parseUnits('10000000000'))
      await token.deployed()
      const tokenAddress = token.address
      console.log("tokenAddress deployed to:", tokenAddress)
    })

})