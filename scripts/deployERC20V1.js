const { ethers, upgrades } = require("hardhat");
async function main() {
  const ERC20UpgradableV1 = await ethers.getContractFactory(
    "ERC20UpgradableV1"
  );
    console.log("Deploying ERC20UpgradableV1...");
  const contract = await upgrades.deployProxy(ERC20UpgradableV1, [], {
    initializer: "initialize",
    kind: "transparent",
  });
    await contract.deployed();
  console.log("ERC20UpgradableV1 deployed to:", contract.address);
}

main();
//0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
// await contract.mint(
//   "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
//   ethers.utils.parseEther("100.0")
// );

// await contract.getBalance("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")