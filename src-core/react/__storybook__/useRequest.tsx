import React, { useState } from "react";

import { useDesignSystem } from "src-core/ds";

import { useRequest } from "../";

export const UseRequestDemo = () => {
  const ds = useDesignSystem();

  const [response, setResponse] = useState(null as any);

  const [request, requesting] = useRequest(
    {
      url:
        "https://api.github.com/repos/FengShangWuQi/fengshangwuqi.github.io/pulls",
    },
    {
      onSuccess: ({ data }) => {
        setResponse(data);
      },
    },
  );

  return (
    <div>
      <button
        css={{
          marginBottom: ds.padding.l,
        }}
        onClick={() => {
          request();
        }}>
        click
      </button>

      <div>
        {requesting && "loading..."}
        {response && (
          <ul>
            {response.map((item: any) => (
              <div
                css={{
                  marginBottom: 4,
                }}>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  #{item.number}
                </a>
                <span
                  css={{
                    marginLeft: ds.padding.s,
                  }}>
                  {item.title}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
