import React, { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { border } from "polished";

import { useDesignSystem } from "src-core/ds";
import { useToggle } from "src-core/hooks";

import { IconSearch } from "src-components/basic/Icon";
import { Dialog, supportDialog } from "src-components/notice/Dialog";

import SearchBox from "./SearchBox";
import { SearchResult } from "./SearchResult";

export const Search = ({ indices }: { indices: { name: string }[] }) => {
  const ds = useDesignSystem();

  const [isOpen, { show, hide }] = useToggle();

  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID as string,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY as string,
      ),
    [],
  );

  if (!supportDialog) {
    return null;
  }

  return (
    <div>
      <IconSearch
        css={{
          cursor: "pointer",
          fontSize: ds.size.lg,
        }}
        onClick={() => {
          show();
        }}
      />

      <Dialog
        open={isOpen}
        onClose={() => {
          hide();
        }}>
        <InstantSearch searchClient={searchClient} indexName={indices[0].name}>
          <header
            css={{
              padding: `${ds.spacing[1]} ${ds.spacing[5]}`,
            }}>
            <div
              css={{
                ...border("bottom", 1, "solid", ds.colorPalette.gray[300]),
              }}>
              <SearchBox />
            </div>
          </header>

          <SearchResult indices={indices} />
        </InstantSearch>
      </Dialog>
    </div>
  );
};
