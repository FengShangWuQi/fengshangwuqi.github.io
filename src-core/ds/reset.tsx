import React from "react";
import { Global } from "@emotion/core";
import { normalize } from "polished";

export const DSReset = () => (
  <>
    <Global styles={{ ...normalize() }} />

    <Global
      styles={{
        "ul, li": {
          margin: 0,
          padding: 0,
        },
      }}
    />
  </>
);
