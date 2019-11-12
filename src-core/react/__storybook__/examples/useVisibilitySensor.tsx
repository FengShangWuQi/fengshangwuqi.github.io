import React, { useRef, useState, useEffect } from "react";

import { useDesignSystem } from "src-core/ds";

import { useVisibilitySensor } from "../../useVisibilitySensor";

export const UseVisibilitySensorDemo = () => {
  const ds = useDesignSystem();

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
          padding: ds.spacing[3],
          width: 300,
          height: 240,
          border: `1px solid ${ds.color.primary}`,
          overflow: "scroll",
        }}>
        {items.map(item => (
          <div
            key={item}
            css={{
              margin: `16px auto`,
              paddingLeft: ds.spacing[2],
              color: ds.color.bg,
              background: ds.color.secondary,
              borderRadius: ds.borderRadius.lg,
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
    </div>
  );
};
