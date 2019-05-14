import React, { useState, useRef, RefObject, useEffect } from "react";
import { createPortal } from "react-dom";

import { pickElmAttrs, useRect } from "src-core/react";
import { rxFromEvent, rxFilter } from "src-core/rxjs";

export enum popupPlacement {
  top,
  right,
  bottom,
  left,
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
}

export interface ITrigger {
  placement: popupPlacement;
  closeOnClickOutside?: boolean;
  popup: (props: ITriggerInnerProps) => JSX.Element;
  children: (props: ITriggerInnerProps) => JSX.Element;
}

export interface ITriggerInnerProps {
  isOpened: boolean;
  close: () => void;
  open: () => void;
}

export const Trigger = ({
  placement,
  popup,
  closeOnClickOutside,
  children,
  ...otherProps
}: ITrigger) => {
  const targetRef = useRef<Element>(null);

  const [isOpened, setIsOpened] = useState(false);

  const open = () => {
    if (!isOpened) {
      setIsOpened(true);
    }
  };

  const close = () => {
    if (isOpened) {
      setIsOpened(false);
    }
  };

  const ctx = { open, close, isOpened };

  return (
    <>
      {isOpened &&
        createPortal(
          <PopupContainer
            {...{
              placement,
              targetRef,
              close,
              closeOnClickOutside,
              ...otherProps,
            }}>
            {popup(ctx)}
          </PopupContainer>,
          document.body,
        )}
      {React.cloneElement(React.Children.only(children(ctx)), {
        ref: targetRef,
      })}
    </>
  );
};

const PopupContainer = ({
  targetRef,
  placement,
  closeOnClickOutside,
  close,
  children,
  ...otherProps
}: {
  targetRef: RefObject<Element>;
  placement: popupPlacement;
  closeOnClickOutside?: boolean;
  close: () => void;
  children: React.ReactNode;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (closeOnClickOutside) {
      const clicks = rxFromEvent(document, "click");
      const clicksOnOutside = clicks.pipe(
        rxFilter(e => {
          if (
            targetRef.current!.contains(e.target as Node) ||
            popupRef.current!.contains(e.target as Node)
          ) {
            return false;
          }
          return true;
        }),
      );
      const sub = clicksOnOutside.subscribe(close);

      return () => {
        sub.unsubscribe();
      };
    }

    return () => {};
  }, []);

  const targetRect = useRect(targetRef);
  const popupRect = useRect(popupRef);

  let top: number = 0;
  let left: number = 0;

  switch (placement) {
    case popupPlacement.top: {
      top = targetRect.top - popupRect.height;
      left = targetRect.left + targetRect.width / 2 - popupRect.width / 2;
      break;
    }
    case popupPlacement.right: {
      top = targetRect.top + targetRect.height / 2 - popupRect.height / 2;
      left = targetRect.left + targetRect.width;
      break;
    }
    case popupPlacement.bottom: {
      top = targetRect.top + targetRect.height;
      left = targetRect.left + targetRect.width / 2 - popupRect.width / 2;
      break;
    }
    case popupPlacement.left: {
      top = targetRect.top + targetRect.height / 2 - popupRect.height / 2;
      left = targetRect.left - popupRect.width;
      break;
    }
    case popupPlacement.topLeft: {
      top = targetRect.top;
      left = targetRect.left - popupRect.width;
      break;
    }
    case popupPlacement.topRight: {
      top = targetRect.top;
      left = targetRect.left + targetRect.width;
      break;
    }
    case popupPlacement.bottomRight: {
      top = targetRect.top + targetRect.height - popupRect.height;
      left = targetRect.left + targetRect.width;
      break;
    }
    case popupPlacement.bottomLeft: {
      top = targetRect.top + targetRect.height - popupRect.height;
      left = targetRect.left - popupRect.width;
      break;
    }
  }

  return (
    <div
      {...pickElmAttrs(otherProps)}
      ref={popupRef}
      css={{
        position: "absolute",
        top,
        left,
      }}>
      {children}
    </div>
  );
};
