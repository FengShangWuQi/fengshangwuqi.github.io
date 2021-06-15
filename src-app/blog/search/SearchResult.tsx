import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import {
  connectStateResults,
  Highlight,
  connectHits,
  Index,
} from "react-instantsearch-dom";
import { fromEvent } from "rxjs";
import { padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { grid, flex } from "src-core/style";

import { useDialog } from "src-components/notice/Dialog";
import { IconCornerDownLeft } from "src-components/basic/Icon";

import { TagIcon } from "../post/PostTag";

const Hits = connectHits(({ hits }: any) => {
  const ds = useDesignSystem();
  const ref = useRef(null);
  const [selectedItem, setSelectedItem] = useState<string>(hits[0]?.slug);

  const { close } = useDialog();

  useEffect(() => {
    setSelectedItem(hits[0]?.slug);
  }, [hits]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const mouseover$ = fromEvent(node, "mouseover").subscribe((event: any) => {
      if (event.target.id) {
        setSelectedItem(event.target.id);
      }
    });

    return () => {
      mouseover$.unsubscribe();
    };
  }, []);

  return (
    <ul
      ref={ref}
      css={{
        ...grid({
          gridRowGap: ds.spacing[3],
        }),
        listStyleType: "none",
      }}>
      {hits.map((hit: any) => (
        <li
          key={hit.slug}
          id={hit.slug}
          role="option"
          aria-selected={selectedItem === hit.slug ? "true" : "false"}
          onClick={() => {
            navigate(hit.slug);
            close();
          }}
          css={{
            ...flex({ justifyContent: "space-between", alignItems: "center" }),
            ...padding(0, ds.spacing[6]),
            height: 70,
            fontSize: ds.size.sm,
            fontWeight: "normal",
            textDecoration: "underline",
            background: "#f5f5f5",
            borderRadius: ds.radius.default,
            cursor: "pointer",
            "&[aria-selected=true]": {
              color: ds.colorPalette.white,
              background: ds.color.primary,
              "& svg": {
                fill: ds.colorPalette.white,
              },
            },
          }}>
          <div
            css={{
              ...flex({
                alignItems: "center",
              }),
            }}>
            <TagIcon
              css={{
                marginRight: ds.spacing[3],
                fontSize: ds.size["xl"],
                fill: "#969faf",
              }}
              tags={hit.tags}
            />
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </div>
          <IconCornerDownLeft
            css={{
              visibility: selectedItem === hit.slug ? "visible" : "hidden",
              fontSize: ds.size["2xl"],
              fill: ds.colorPalette.white,
            }}
          />
        </li>
      ))}
    </ul>
  );
});

const ResultWrapper = connectStateResults(
  ({ searchState, searchResults, children }: any) => {
    const ds = useDesignSystem();

    if (!searchState.query) {
      return null;
    }

    return (
      <div
        css={{
          padding: `${ds.spacing[6]} ${ds.spacing[5]}`,
          maxHeight: 468,
          overflowX: "hidden",
          overflowY: "scroll",
        }}>
        {searchResults && searchResults.nbHits !== 0 ? (
          children
        ) : (
          <div>
            No results for
            <span
              css={{
                padding: `${ds.spacing[3]} ${ds.spacing[1]}`,
                color: ds.color.primary,
                fontWeight: "bold",
              }}>
              "{searchState.query}"
            </span>
            😕
          </div>
        )}
      </div>
    );
  },
);

export const SearchResult = ({ indices }: any) => {
  return (
    <ResultWrapper>
      {indices.map((index: any) => (
        <Index indexName={index.name} key={index.name}>
          <Hits />
        </Index>
      ))}
    </ResultWrapper>
  );
};
