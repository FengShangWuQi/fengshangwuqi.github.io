import React, { createContext, useContext, useRef, useEffect } from "react";
import { fromEvent } from "rxjs";
import { pickElmAttrs } from "utils/pickElmAttrs";

interface IDialogContext {
  open: () => void;
  close: (val?: any) => void;
}

export const supportDialog = typeof HTMLDialogElement === "function";

const DialogThemeContext = createContext({} as IDialogContext);
const DialogThemeProvider = DialogThemeContext.Provider;
export const useDialog = () => useContext(DialogThemeContext);

export const Dialog = ({
  children,
  open,
  onClose,
  ...otherProps
}: {
  children: React.ReactNode;
  open: boolean;
  onClose?: (val?: any) => void;
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    }
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const click$ = fromEvent(dialog, "click").subscribe(event => {
      if (event.target === dialog) {
        dialog.close("click-out-side");
      }
    });
    const keydown$ = fromEvent(dialog, "keydown").subscribe((event: any) => {
      if (event.keyCode === 27) {
        dialog.close("keydown-esc");
      }
    });
    const close$ = fromEvent(dialog, "close").subscribe(() => {
      onClose && onClose(dialog.returnValue);
    });

    return () => {
      click$.unsubscribe();
      keydown$.unsubscribe();
      close$.unsubscribe();
    };
  }, []);

  return (
    <DialogThemeProvider
      value={{
        open: () => ref.current?.showModal(),
        close: (val: any) => ref.current?.close(val),
      }}>
      <dialog ref={ref} {...pickElmAttrs(otherProps)}>
        {children}
      </dialog>
    </DialogThemeProvider>
  );
};
