import expressAsyncHandler from "express-async-handler";
import { getErc20Contract } from "../config/data";
import { ethers } from "ethers";

export const GETTokenInfo = expressAsyncHandler(async (req, res) => {
  const token = await getErc20Contract();

  const name = await token.name();
  const symbol = await token.symbol();
  const totalSupply = await token.totalSupply();
  const decimals = await token.decimals();

  res.status(200).send({
    name: name,
    symbol: symbol,
    totalSupply: ethers.formatEther(totalSupply.toString()),
    decimals: decimals,
  });
});
