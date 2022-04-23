import React, { useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { connectSearchBox } from "react-instantsearch-dom";
import { fromEvent } from "rxjs";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { useDialog } from "src-components/notice/Dialog";
import { IconSearch } from "src-components/basic/Icon";

const SearchBox = ({ refine, currentRefinement, onFocus }: any) => {
  const ref = useRef(null);

  const ds = useDesignSystem();
  const { close } = useDialog();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const keydown$ = fromEvent(node, "keydown").subscribe((event: any) => {
      if (event.keyCode === 13) {
        event.preventDefault();

        const slug = document.querySelector("li[aria-selected=true]")?.id;

        if (slug) {
          navigate(slug);
          close();
        }
      }
    });

    return () => {
      keydown$.unsubscribe();
    };
  }, []);

  return (
    <form
      css={{
        ...flex({
          alignItems: "center",
        }),
        height: 56,
      }}>
      <label
        css={{
          ...flex({
            alignItems: "center",
          }),
          fontSize: ds.size["2xl"],
          marginRight: ds.spacing[3],
        }}
        htmlFor="searchInput">
        <IconSearch css={{ fill: ds.color.primary }} />
      </label>
      <input
        css={{
          width: "100%",
          height: ds.spacing[16],
          border: 0,
          outline: 0,
          fontSize: ds.size.base,
          background: "transparent",
        }}
        ref={ref}
        id="searchInput"
        type="search"
        placeholder="Search Posts"
        aria-label="Search"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        onFocus={onFocus}
      />
    </form>
  );
};

export default connectSearchBox(SearchBox);
