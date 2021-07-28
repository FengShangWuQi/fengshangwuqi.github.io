const suffix = ["B", "KB", "MB"];

const clamp = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

export const prettySize = (size: number) => {
  const base = Math.floor(Math.log2(size) / 10);
  const index = clamp(base, 0, 2);

  return (size / 2 ** (10 * index)).toFixed(2) + suffix[index];
};
