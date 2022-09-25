require("dotenv").config();
const ethers = require("ethers");

const ADDRESS = process.env.ADDRESS;

const RPC_URL_MUMBAI = "https://polygon-mumbai.g.alchemy.com/v2/";
const RPC_API_MUMBAI = process.env.RPC_API_MUMBAI;

const RPC_URL_GOERLI = "https://eth-goerli.g.alchemy.com/v2/";
const RPC_API_GOERLI = process.env.RPC_API_GOERLI;

const V1 = RPC_URL_MUMBAI.concat(RPC_API_MUMBAI);
const V2 = RPC_URL_MUMBAI.concat(RPC_API_GOERLI);
const V3 = RPC_URL_GOERLI.concat(RPC_API_MUMBAI);
const V4 = RPC_URL_GOERLI.concat(RPC_API_GOERLI);

async function main() {
  const provider1 = new ethers.providers.StaticJsonRpcProvider(V1);
  const balance1 = await provider1.getBalance(ADDRESS);
  console.log(ethers.utils.formatEther(balance1));

  const provider2 = new ethers.providers.StaticJsonRpcProvider(V2);
  const balance2 = await provider2.getBalance(ADDRESS);
  console.log(ethers.utils.formatEther(balance2));

  const provider3 = new ethers.providers.StaticJsonRpcProvider(V3);
  const balance3 = await provider3.getBalance(ADDRESS);
  console.log(ethers.utils.formatEther(balance3));

  const provider4 = new ethers.providers.StaticJsonRpcProvider(V4);
  const balance4 = await provider4.getBalance(ADDRESS);
  console.log(ethers.utils.formatEther(balance4));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
