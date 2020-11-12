export const sleep = async (interval: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};
