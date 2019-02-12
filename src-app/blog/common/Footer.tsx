import React from "react";

import { flex, margin } from "src-core/style";

export const Footer = () => {
  const relatedLinks = [
    { value: "https://twitter.com/fengshangwuqi", label: "twitter" },
    { value: "https://github.com/FengShangWuQi", label: "github" },
  ];

  return (
    <footer
      css={{
        ...flex({
          justifyContent: "space-between",
          alignItems: "center",
        }),
        height: 90,
        paddingBottom: 10,
      }}>
      <div>
        {relatedLinks.map((item, index) => (
          <>
            <a href={item.value} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
            {index !== relatedLinks.length - 1 && (
              <span
                css={{
                  ...margin(0, 6),
                }}>
                &bull;
              </span>
            )}
          </>
        ))}
      </div>
    </footer>
  );
};
