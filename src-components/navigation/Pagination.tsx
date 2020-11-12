import React, { useState } from "react";
import { size } from "polished";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";
import { pickElmAttrs } from "utils/pickElmAttrs";

export interface IPaginationProps {
  total: number;
  size: number;
  offset?: number;
  onChange?: (page: number) => void;
}

export const Pagination = ({
  total,
  offset = 0,
  size,
  onChange,
  ...otherProps
}: IPaginationProps) => {
  const ds = useDesignSystem();

  const [currPage, setCurrPage] = useState(Math.floor(offset / size) + 1);

  const totalPage = Math.ceil(total / size);

  const MAX_ITEM = 1;

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        ...flex({
          alignItems: "center",
        }),
      }}>
      {Array.from({ length: totalPage }, (_, i) => i + 1).map(num => {
        const onLeft: boolean = num <= MAX_ITEM + 1;
        const onMiddle: boolean =
          num >= currPage - MAX_ITEM && num <= currPage + MAX_ITEM;
        const onRight: boolean = num >= totalPage - MAX_ITEM;

        if (onLeft || onMiddle || onRight) {
          return (
            <PaginationItem
              key={num}
              isActive={num === currPage}
              onPageChange={page => {
                setCurrPage(page);
                onChange && onChange(page);
              }}>
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
  isActive = false,
  onPageChange,
}: {
  children: number;
  isActive?: boolean;
  onPageChange: (page: number) => void;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={[
        {
          ...size(24),
          ...flex({
            alignItems: "center",
            justifyContent: "center",
          }),
          marginLeft: 8,
          borderRadius: ds.radius.default,
          cursor: "pointer",
        },
        isActive
          ? {
              color: ds.color.bg,
              background: ds.color.primary,
            }
          : { color: ds.color.textLight, background: ds.color.bgLight },
      ]}
      onClick={() => onPageChange(children)}>
      {children}
    </div>
  );
};
