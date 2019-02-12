import React, { useEffect } from "react";

export const Discussion = ({ shortname }: { shortname: string }) => {
  useEffect(() => {
    {
      (function() {
        const d = document;
        const s = d.createElement("script");
        s.src = `https://${shortname}.disqus.com/embed.js`;
        s.setAttribute("data-timestamp", `${new Date()}`);
        (d.head || d.body).appendChild(s);
      })();
    }
  });

  return <div id="disqus_thread" />;
};
