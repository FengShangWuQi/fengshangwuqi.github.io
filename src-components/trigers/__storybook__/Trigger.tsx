import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { Trigger, popupPlacement } from "../";

export default () => {
  return (
    <div>
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

      <EditLink path="src-components/pagers/Pagination.tsx" />
    </div>
  );
};
