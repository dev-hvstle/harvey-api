import { JsonRpcProvider, ethers } from "ethers";
import { erc20 } from "./abi";
require("dotenv").config();

export const getErc20Contract = async () => {
  const address = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
  const provider = new ethers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/s-hdjLqITCIC-0yx948QMzzi7v-43Sss"
  );
  const contract = new ethers.Contract(address, erc20, provider);

  return contract;
};
