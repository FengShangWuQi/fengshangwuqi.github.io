import React, { useEffect } from "react";

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

    if ((window as any).DISQUS && doc.getElementById(id)) {
      (window as any).DISQUS!.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.url = url;
        },
      });
    } else {
      (window as any).disqus_shortname = shortname;
      (window as any).disqus_config = function () {
        this.page.identifier = identifier;
        this.page.url = url;
      };
      loadScript(`https://${shortname}.disqus.com/embed.js`, {
        id,
        async: true,
      });
    }

    return () => {
      removeChild(id);

      if ((window as any).DISQUS) {
        (window as any).DISQUS.reset({});
        delete (window as any).DISQUS;
        delete (window as any).disqus_shortname;
        delete (window as any).disqus_config;
      }

      const disqusThread = doc.getElementById("disqus_thread");
      if (disqusThread) {
        while (disqusThread.hasChildNodes())
          disqusThread.removeChild(disqusThread.firstChild!);
      }
    };
  }, [shortname, config]);

  return <div id="disqus_thread" />;
};

const loadScript = (
  src: string,
  opts: {
    type?: string;
    id?: string;
    async?: boolean;
    defer?: boolean;
  },
) => {
  const doc = window.document;
  const script = doc.createElement("script");

  script.src = src;

  if (opts.id) script.id = opts.id;
  if (opts.type) script.type = opts.type;
  if (opts.defer) script.defer = true;
  if (opts.async) script.async = true;

  (doc.head || doc.body).appendChild(script);

  return script;
};

const removeChild = (id: string) => {
  const doc = window.document;
  const child = doc.getElementById(id);

  if (child) (doc.head || doc.body).removeChild(child);
};
