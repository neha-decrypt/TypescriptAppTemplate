import { ethers } from "ethers";
import { contracts } from "../Config/contracts";

export const getContract = async (contractName: string) => {
  const provider = new ethers.JsonRpcProvider(
    process.env.REACT_APP_RPC_URL ?? "https://rpc-mumbai.maticvigil.com/"
  );
  let signer = await provider.getSigner();
  let a = new ethers.Contract(
    getAddress(contractName) ?? "",
    getABI(contractName) ?? "",
    signer
  );

  if (a) {
    return a;
  } else {
    return {};
  }
};

export const getAddress = (contractName: string): string | null => {
  console.log("contract[contractName]", contracts[contractName]);
  return (
    contracts[contractName].address?.[
      process.env.REACT_APP_CHAIN_ID ?? 80001
    ] || null
  );
};

export const getABI = (contractName: string): string | null => {
  console.log("contract[contractName]", contracts[contractName]);
  return contracts[contractName].abi;
};
