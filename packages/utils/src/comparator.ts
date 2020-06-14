const comparator = <T>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

export const equal = <T>(a: T, b: T): boolean => {
  return comparator(a, b) === 0;
};

export const lessThan = <T>(a: T, b: T): boolean => {
  return comparator(a, b) < 0;
};

export const greaterThan = <T>(a: T, b: T): boolean => {
  return comparator(a, b) > 0;
};

export const lessThanOrEqual = <T>(a: T, b: T): boolean => {
  return lessThan(a, b) || equal(a, b);
};

export const greaterThanOrEqual = <T>(a: T, b: T): boolean => {
  return greaterThan(a, b) || equal(a, b);
};
