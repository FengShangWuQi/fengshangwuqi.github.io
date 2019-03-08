import React from "react";
import { Link } from "gatsby";
import { size } from "polished";

import { useDesignSystem } from "src-core/ds";
import { flex, margin } from "src-core/style";

export interface IPaginationProps {
  total: number;
  size: number;
  offset: number;
}

export const Pagination = ({ total, offset, size }: IPaginationProps) => {
  const ds = useDesignSystem();

  const totalPage = Math.ceil(total / size);
  const currPage = Math.floor(offset / size) + 1;

  const MAX_ITEM = 1;

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
          justifyContent: "flex-end",
        }),
        ...margin(18, 0),
      }}>
      {Array.from({ length: totalPage }, (_, i) => i + 1).map(num => {
        const onLeft: boolean = num <= MAX_ITEM + 1;
        const onMiddle: boolean =
          num >= currPage - MAX_ITEM && num <= currPage + MAX_ITEM;
        const onRight: boolean = num >= totalPage - MAX_ITEM;

        if (onLeft || onMiddle || onRight) {
          return (
            <PaginationItem key={num} isActive={num === currPage}>
              {num}
            </PaginationItem>
          );
        } else if (
          num === currPage - MAX_ITEM - 1 ||
          num === currPage + MAX_ITEM + 1
        ) {
          return (
            <div
              key={num}
              css={{
                marginLeft: 8,
                color: ds.color.textLight,
              }}>
              &hellip;
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

const PaginationItem = ({
  children,
  isActive,
}: {
  children: number;
  isActive?: boolean;
}) => {
  const ds = useDesignSystem();

  return (
    <Link
      to={children === 1 ? "/" : `/${children}`}
      css={[
        {
          ...size(24),
          ...flex({
            alignItems: "center",
            justifyContent: "center",
          }),
          marginLeft: 8,
          borderRadius: ds.radius.base,
        },
        isActive
          ? {
              color: ds.color.bg,
              background: ds.color.primary,
            }
          : { color: ds.color.textLight, background: "#E7EAEB" },
      ]}>
      {children}
    </Link>
  );
};
