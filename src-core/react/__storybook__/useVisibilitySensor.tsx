import React, { useRef, useState, useEffect } from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useVisibilitySensor } from "../";

export default () => {
  const rootRef = useRef(null);
  const footerRef = useRef(null);

  const isVisible = useVisibilitySensor(footerRef, {
    root: rootRef.current,
  });

  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const loadItems = (n: number) => {
    const offset = items.length;

    setItems([
      ...items,
      ...Array.from({ length: n }, (_, i) => i + 1 + offset),
    ]);
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        loadItems(5);
        console.log("Loaded new items");
      }, 500);
    }
  }, [isVisible]);

  return (
    <div>
      <div
        ref={rootRef}
        css={{
          padding: 10,
          width: 300,
          height: 240,
          border: "1px solid #eee",
          overflow: "scroll",
        }}>
        {items.map(item => (
          <div
            key={item}
            css={{
              margin: "16px auto",
              paddingLeft: 8,
              color: "#333333",
              background: "#f1f1f1cc",
              border: "1px solid #dbdbdb",
              borderRadius: 5,
            }}>
            {item}
          </div>
        ))}
        <footer
          ref={footerRef}
          css={{
            height: 10,
          }}
        />
      </div>

      <EditLink path="src-core/react/useVisibilitySensor.ts" />
    </div>
  );
};
