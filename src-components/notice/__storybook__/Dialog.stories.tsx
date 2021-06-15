import React, { useState } from "react";
import { padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { Button } from "src-components/basic/Button";

import { Dialog, useDialog, supportDialog } from "../Dialog";

export const DialogDemo = () => {
  const [open, setOpen] = useState(false);

  if (!supportDialog) {
    return null;
  }

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}>
        dialog
      </Button>
      <Dialog
        open={open}
        onClose={val => {
          console.log(val);
          setOpen(false);
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
