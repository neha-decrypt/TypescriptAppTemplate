import BigNumber from "bignumber.js";

export const convertToReadableNumber = (
  number: string,
  decimals: number
): string => {
  return new BigNumber(number)
    .dividedBy(new BigNumber(10).exponentiatedBy(decimals))
    .toString();
};

export const convertToSmallestUnit = (
  number: string,
  decimals: number
): string => {
  return new BigNumber(number)
    .multipliedBy(new BigNumber(10).exponentiatedBy(decimals))
    .toString();
};
