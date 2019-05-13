import React, { useEffect, useState, useRef } from "react";
import { rxBehaviorSubject } from "src-core/rxjs";

export default () => {
  const rootRef = useRef(null);
  const footerRef = useRef(null);

  const items$ = new rxBehaviorSubject([1, 2, 3, 4, 5]);
  const [items, setItems] = useState(items$.value);

  const loadItems = (n: number) => {
    const items = items$.value;
    const offset = items.length;

    items$.next([
      ...items,
      ...Array.from({ length: n }, (_, i) => i + 1 + offset),
    ]);
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio <= 0) {
          return;
        }

        setTimeout(() => {
          loadItems(5);
          console.log("Loaded new items");
        }, 500);
      },
      {
        root: rootRef.current,
      },
    );

    io.observe(footerRef.current!);

    return () => {
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    items$.subscribe(value => {
      setItems(value);
    });

    return () => {
      items$.unsubscribe();
    };
  }, []);

  return (
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
  );
};
