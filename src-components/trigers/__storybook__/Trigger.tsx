import React from "react";

import { Trigger, popupPlacement } from "../";

export default () => {
  return (
    <>
      <Trigger
        placement={popupPlacement.bottom}
        closeOnClickOutside
        popup={({ close }) => {
          return (
            <>
              <div
                css={{
                  cursor: "pointer",
                }}
                onClick={close}>
                popup
              </div>
            </>
          );
        }}>
        {({ open }) => {
          return (
            <span
              css={{
                cursor: "pointer",
              }}
              onClick={open}>
              Click Me
            </span>
          );
        }}
      </Trigger>
    </>
  );
};
