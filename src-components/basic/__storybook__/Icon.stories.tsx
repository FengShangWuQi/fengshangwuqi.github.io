import React from "react";

import { useDesignSystem } from "src-core/ds";
import { grid } from "src-core/style";

import {
  IconCornerDownLeft,
  IconCss,
  IconGit,
  IconGithub,
  IconHash,
  IconHtml,
  IconReactjs,
  IconSearch,
  IconUbuntu,
} from "../Icon";

export const IconDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...grid({
          gridTemplateColumns: "repeat(6, 1fr)",
          gridColumnGap: ds.spacing[3],
          gridRowGap: ds.spacing[3],
        }),
        color: ds.color.secondary,
      }}>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconCornerDownLeft />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconCornerDownLeft
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconCss />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconCss
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconGit />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconGit
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconGithub />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconGithub
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconHash />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconHash
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconHtml />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconHtml
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconReactjs />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconReactjs
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconSearch />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconSearch
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconUbuntu />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconUbuntu
        </span>
      </div>
    </div>
  );
};
