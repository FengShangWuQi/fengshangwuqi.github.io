import React from "react";

import { render, cleanup, fireEvent } from "src-core/test/react";

import { Switch } from "../Switch";

afterEach(cleanup);

describe("Switch #components #form", () => {
  it("when render - with default attributes", () => {
    const { getByTestId } = render(<Switch />);

    const checkbox = getByTestId("switch-checkbox");

    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });

  it("when disabled - with disabled", () => {
    const { getByTestId } = render(<Switch disabled />);

    const checkbox = getByTestId("switch-checkbox");

    expect(checkbox).toBeDisabled();
  });

  it("when set defaultChecked is true - with checked", () => {
    const { getByTestId } = render(<Switch defaultChecked={true} />);

    const checkbox = getByTestId("switch-checkbox");

    expect(checkbox).toBeChecked();
  });

  it("when add icons - with icons", () => {
    const { getByTestId } = render(
      <Switch
        icons={{
          checked: <span>icon</span>,
        }}
      />,
    );

    const checkedBox = getByTestId("switch-track-check");
    const unCheckedBox = getByTestId("switch-track-uncheck");

    expect(checkedBox).not.toBeEmpty();
    expect(unCheckedBox).toBeEmpty();
  });

  it("when click - with checked and correct handleChange", () => {
    const handleChange = jest.fn();

    const { getByTestId, container } = render(
      <Switch onValueChange={handleChange} />,
    );

    const checkbox = getByTestId("switch-checkbox");

    fireEvent.click((container as any).firstChild);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it("when double click - with not checked", () => {
    const { getByTestId, container } = render(<Switch />);

    const checkbox = getByTestId("switch-checkbox");

    fireEvent.click((container as any).firstChild);
    fireEvent.click((container as any).firstChild);

    expect(checkbox).not.toBeChecked();
  });

  it("when click label - with checked", () => {
    const { getByTestId } = render(
      <div>
        <Switch id="switchID" />
        <label data-testid="switch-label" htmlFor="switchID">
          label
        </label>
      </div>,
    );

    const checkbox = getByTestId("switch-checkbox");
    const label = getByTestId("switch-label");

    fireEvent.click(label);

    expect(checkbox).toBeChecked();
  });
});
