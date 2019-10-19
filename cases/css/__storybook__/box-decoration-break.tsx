import React from "react";

import { margin } from "src-core/style";

export default () => {
  return (
    <span
      css={{
        ...margin(0, "auto"),
        backgroundImage:
          "linear-gradient(135deg, deeppink, dodgerblue, yellowgreen)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        boxDecorationBreak: "clone",
      }}>
      La propriété box-decoration-break définit la façon dont les propriétés
      background, padding, border, border-image, box-shadow, margin et clip sont
      appliquées sur un élément lorsque la boîte de celui-ci est fragmentée. La
      fragmentation apparaît lorsqu'une boîte en ligne s'étend sur plusieurs
      lignes ou lorsqu'un bloc s'étend sur plus d'une colonne lorsque qu'il est
      dans conteneur disposé en colonne ou lorsqu'un bloc déclenche un saut de
      page sur un média imprimé. Chaque « morceau » de l'élément est alors
      appelé un fragment.
    </span>

    // <EditLink path="cases/css/__storybook__/box-decoration-break.tsx" />
  );
};
