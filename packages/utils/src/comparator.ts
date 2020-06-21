const comparatorFun = <T>(a: T, b: T): number => {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

const equal = <T>(a: T, b: T): boolean => {
  return comparatorFun(a, b) === 0;
};

const lessThan = <T>(a: T, b: T): boolean => {
  return comparatorFun(a, b) < 0;
};

const greaterThan = <T>(a: T, b: T): boolean => {
  return comparatorFun(a, b) > 0;
};

const lessThanOrEqual = <T>(a: T, b: T): boolean => {
  return lessThan(a, b) || equal(a, b);
};

const greaterThanOrEqual = <T>(a: T, b: T): boolean => {
  return greaterThan(a, b) || equal(a, b);
};

export const comparator = {
  equal,
  lessThan,
  greaterThan,
  lessThanOrEqual,
  greaterThanOrEqual,
};
