import React, { useState, useRef, RefObject } from "react";

import { useDesignSystem } from "src-core/ds";
import { pickElmAttrs } from "src-core/react";

export const Toggle = ({
  defaultChecked,
  icons,
  onChange,
  ...otherProps
}: {
  icons?: { checked: React.ReactNode; unchecked: React.ReactNode };
  defaultChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}) => {
  const inputRef = useRef(null) as RefObject<HTMLInputElement>;

  const [checked, setChecked] = useState(defaultChecked || false);
  const [hasFocus, setFocus] = useState(false);

  const handleClick = () => {
    setChecked(!checked);

    onChange && onChange(!checked);

    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  };

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={handleClick}>
      <ToggleTrack>
        <ToggleTrackCheck isChecked={checked}>
          {icons && icons.checked}
        </ToggleTrackCheck>
        <ToggleTrackUnCheck isChecked={checked}>
          {icons && icons.unchecked}
        </ToggleTrackUnCheck>
      </ToggleTrack>

      <ToggleThumb isChecked={checked} hasFocus={hasFocus} />

      <input
        css={{
          position: "absolute",
          top: 4,
          left: 4,
          zIndex: -1,
        }}
        ref={inputRef}
        type="checkbox"
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </div>
  );
};

const ToggleTrack = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        padding: 0,
        width: 50,
        height: 24,
        borderRadius: 30,
        background: "#0f1114",
        transition: "all 0.2s ease",
      }}>
      {children}
    </div>
  );
};

const ToggleTrackCheck = ({
  isChecked,
  children,
}: {
  isChecked: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      css={{
        position: "absolute",
        width: 17,
        height: 17,
        left: 5,
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
        lineHeight: 0,
        transition: "opacity 0.25s ease",
        ...(isChecked ? { opacity: 1 } : { opacity: 0 }),
      }}>
      {children}
    </div>
  );
};

const ToggleTrackUnCheck = ({
  isChecked,
  children,
}: {
  isChecked: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      css={{
        position: "absolute",
        width: 17,
        height: 17,
        right: 5,
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
        lineHeight: 0,
        transition: "opacity 0.25s ease",
        ...(isChecked ? { opacity: 0 } : { opacity: 1 }),
      }}>
      {children}
    </div>
  );
};

const ToggleThumb = ({
  isChecked,
  hasFocus,
}: {
  isChecked: boolean;
  hasFocus: boolean;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        position: "absolute",
        top: 1,
        left: 1,
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "#fafafa",
        boxSizing: "border-box",
        transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        transform: "translateX(0)",
        ...(isChecked
          ? {
              transform: "translateX(26px)",
            }
          : {}),
        ...(hasFocus
          ? {
              boxShadow: `0px 0px 2px 3px ${ds.color.primary}`,
            }
          : {}),
      }}></div>
  );
};
