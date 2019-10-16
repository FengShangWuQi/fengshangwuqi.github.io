export const sleep = (interval: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};

export const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
