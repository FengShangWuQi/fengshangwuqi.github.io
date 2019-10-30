import {
  toBeChecked,
  toBeDisabled,
  toBeEmpty,
} from "@testing-library/jest-dom";

expect.extend({ toBeChecked, toBeDisabled, toBeEmpty });
