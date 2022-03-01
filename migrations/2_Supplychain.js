const supplyChain = artifacts.require("supplyChain");

module.exports = function (deployer) {
  deployer.deploy(supplyChain);
};


const ERC20Token = artifacts.require("ERC20Token");

module.exports = function (deployer) {
  deployer.deploy(supplyChain);
};