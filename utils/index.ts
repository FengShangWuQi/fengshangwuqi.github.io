export const sleep = (interval: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};
