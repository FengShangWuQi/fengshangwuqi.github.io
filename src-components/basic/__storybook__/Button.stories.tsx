import React from "react";

import { useDesignSystem } from "src-core/ds";

import { Button } from "../Button";

export const ButtonDemo = () => {
  const ds = useDesignSystem();

  return (
    <div>
      <Button primary css={{ marginRight: ds.spacing[3] }}>
        Primary
      </Button>
      <Button>Default</Button>
    </div>
  );
};
