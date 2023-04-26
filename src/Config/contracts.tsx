export interface Contracts {
  [contractName: string]: {
    address: {
      [chainId: string]: string;
    };
    abi: string;
  };
}

export const contracts: Contracts = {
  Metamarines: {
    address: { "80001": "bhgfhfjhfg", "137": "fdghdfh" },
    abi: "",
  },
};
