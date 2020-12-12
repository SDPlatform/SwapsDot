const SwapsdotStakingRewardsFactory = artifacts.require("SwapsdotStakingRewardsFactory");

// addresses[0]:  (Swapsdot: Deployer)

module.exports = async function (deployer, network, addresses) {
  let rewardsToken;
  let stakingRewardsGenesis;
  
  if (network === 'mainnet' || network === 'mainnet-fork') {
    rewardsToken = await ''; // eltAddress
    stakingRewardsGenesis = await 1605484800; // 2020-11-16 02:00:00 +0200
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    rewardsToken = await '0'; // eltAddress
    stakingRewardsGenesis = await 1605484800; // 2020-11-16 02:00:00 +0200
  } else {
    throw new Error('No Elite Swap on this network')
  }
  
  await deployer.deploy(SwapsdotStakingRewardsFactory, rewardsToken, stakingRewardsGenesis);
};
