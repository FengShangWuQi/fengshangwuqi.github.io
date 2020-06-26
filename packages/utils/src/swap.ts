export const swap = <T>(
  arr: T[],
  leftIndex: number,
  rightIndex: number,
): T[] => {
  [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];

  return arr;
};
