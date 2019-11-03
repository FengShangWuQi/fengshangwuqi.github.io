import React from "react";

export const FormatDemo = () => {
  return (
    <pre>
      {`format(new Date(), "YY-MM-DD hh:mm:ss");
// => 10-10-10 10:10:10
`}
    </pre>

    // <EditLink path="utils/date/format.ts" />
  );
};
