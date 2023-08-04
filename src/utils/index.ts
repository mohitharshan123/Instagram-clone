export const clamp = (
  value: number,
  lowerBound: number,
  upperBound: number
) => {
  "worklet";
  return Math.min(Math.max(lowerBound, value), upperBound);
};

export const formatUsername = (username: string): string =>
  username.toLowerCase().split(" ").join("_");
