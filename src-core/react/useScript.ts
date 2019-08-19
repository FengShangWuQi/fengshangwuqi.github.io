import { useLayoutEffect, useState } from "react";
import { fromEvent } from "rxjs";

import { removeChild } from "utils/dom";

export const useScript = ({ src, id }: { src: string; id: string }) => {
  const [state, setState] = useState({
    load: false,
    error: false,
  });

  useLayoutEffect(() => {
    const doc = window.document;
    const script = doc.createElement("script");
    script.async = true;
    script.src = src;
    script.id = id;

    const load$ = fromEvent(script, "load").subscribe(() =>
      setState({
        load: true,
        error: false,
      }),
    );
    const error$ = fromEvent(script, "error").subscribe(() =>
      setState({
        load: true,
        error: true,
      }),
    );

    (doc.head || doc.body).appendChild(script);

    return () => {
      load$.unsubscribe();
      error$.unsubscribe();

      removeChild(id);
    };
  }, [src, id]);

  return [state.load, state.error];
};
