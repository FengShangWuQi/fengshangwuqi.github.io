import React, { useEffect } from "react";

import { insertScript, removeScript } from "utils/dom";

export const Discussion = ({
  shortname,
  config,
}: {
  shortname: string;
  config: { identifier: string; url: string };
}) => {
  const { identifier, url } = config;

  useEffect(() => {
    const doc = window.document;
    const id = "dsq-discuss-scr";

    if (doc.getElementById(id)) {
      (window as any).DISQUS!.reset({
        reload: true,
        config: function() {
          this.page.identifier = identifier;
          this.page.url = url;
        },
      });
    } else {
      (window as any).disqus_shortname = shortname;
      (window as any).disqus_config = function() {
        this.page.identifier = identifier;
        this.page.url = url;
      };
      insertScript(`https://${shortname}.disqus.com/embed.js`, id);
    }

    return () => {
      removeScript(id);

      (window as any).DISQUS.reset({});

      delete (window as any).DISQUS;
      delete (window as any).disqus_shortname;
      delete (window as any).disqus_config;

      const disqusThread = doc.getElementById("disqus_thread");
      if (disqusThread) {
        while (disqusThread.hasChildNodes())
          disqusThread.removeChild(disqusThread.firstChild!);
      }
    };
  }, [shortname, config]);

  return <div id="disqus_thread" />;
};
