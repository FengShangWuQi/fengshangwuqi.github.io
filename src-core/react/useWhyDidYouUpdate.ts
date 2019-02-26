import { useRef, useEffect } from "react";

import { IDictionary, isEqual } from "utils/object";
import { format } from "utils/date";

export const useWhyDidYouUpdate = (name: string, props: IDictionary<any>) => {
  const prevProps = useRef(props);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const allKeys = Object.keys({ ...prevProps.current, ...props });
    const changesObj: IDictionary<any> = {};

    allKeys.forEach(key => {
      if (!isEqual(prevProps.current[key], props[key])) {
        changesObj[key] = prevProps.current[key];
      }
    });

    const primaryStyle = "color: gray; font-weight: lighter;";
    const titleStyle = (style?: string) => `${style}font-weight: bold;`;

    Object.keys(changesObj).map(key => {
      console.group(
        `%cwhyDidYouUpdate %c@@${name}--${key} %c@${format(
          new Date(),
          "hh:mm:ss",
        )}`,
        primaryStyle,
        titleStyle(),
        primaryStyle,
      );
      console.log(
        "%cprev state",
        titleStyle("color: #9E9E9E;"),
        changesObj[key],
      );
      console.log("%cnext state", titleStyle("color: #4CAF50;"), props[key]);
      console.groupEnd();
    });

    prevProps.current = props;
  }, Object.values(props));
};
