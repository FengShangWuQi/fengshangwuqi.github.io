import React, { useState } from "react";
import { padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";
import { useToggle } from "src-core/hooks";

import { Button } from "src-components/basic/Button";

import { Dialog, useDialog, supportDialog } from "../Dialog";

export const DialogDemo = () => {
  const ds = useDesignSystem();

  const [isOpen, { show, hide }] = useToggle();
  const [returnValue, setReturnValue] = useState("");

  if (!supportDialog) {
    return null;
  }

  return (
    <div>
      <div css={{ ...flex({ alignItem: "center" }) }}>
        <Button
          onClick={() => {
            show();
          }}>
          dialog
        </Button>
        <div css={{ marginLeft: ds.spacing[2] }}>{returnValue}</div>
      </div>
      <Dialog
        open={isOpen}
        onClose={val => {
          setReturnValue(val);
          hide();
        }}>
        <header
          css={{
            height: 168,
          }}></header>

        <DialogFooter />
      </Dialog>
    </div>
  );
};

const DialogFooter = () => {
  const ds = useDesignSystem();

  const { close } = useDialog();

  return (
    <footer
      css={{
        ...flex({
          justifyContent: "flex-end",
        }),
        ...padding(ds.spacing[3], ds.spacing[5]),
        background: ds.colorPalette.gray[300],
      }}>
      <Button
        css={{
          marginRight: ds.spacing[3],
        }}
        onClick={() => {
          close("click-cancel");
        }}>
        cancel
      </Button>

      <Button
        primary
        onClick={() => {
          close("click-confirm");
        }}>
        confirm
      </Button>
    </footer>
  );
};
