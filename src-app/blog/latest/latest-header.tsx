import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { position, size } from "polished";

import { useRect, useToggle } from "src-core/hooks";
import { useDesignSystem } from "src-core/ds";
import { flex, userSelect } from "src-core/style";

import { pickElmAttrs } from "utils/pickElmAttrs";

import {
  APP_META,
  CONTACT_INFO,
  SOCIAL_ACCOUNTS,
  SOCIAL_ACCOUNT_UNDERLINE_WIDTH,
} from "../constants";
import { Stars } from "./Stars";

export const LatestHeader = () => {
  return (
    <Wrapper>
      {({ width, height }) => (
        <>
          <Stars width={width} height={height} />
          <Container>
            <div>
              <AppMeta />
              <ContactInfo />
              <SocialAccount />
            </div>
          </Container>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = ({
  children,
}: {
  children: ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => React.ReactNode;
}) => {
  const ref = useRef(null);
  const [rect] = useRect(ref);

  return (
    <div
      ref={ref}
      css={{
        ...position("relative"),
        ...size(400, "100%"),
        background: "#171a19",
        cursor: "grab",
        "&:active": {
          cursor: "grabbing",
        },
      }}>
      {children({ width: rect.width, height: rect.height })}
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        ...position("absolute", 0, 0, 0, 0),
        ...flex({
          alignItems: "center",
        }),
        margin: "0 auto",
        width: "90%",
        maxWidth: 1000,
      }}>
      {children}
    </div>
  );
};

const AppMeta = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        lineHeight: "63px",
        fontFamily: "serif",
        fontSize: ds.size["4xl"],
        color: "#fff",
        letterSpacing: 2,
      }}>
      {APP_META.TITLE}
    </div>
  );
};

const ContactInfo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        fontFamily: "sans-serif",
        fontSize: ds.size.sm,
        lineHeight: "28px",
        color: "#ddd",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}>
      {CONTACT_INFO.EMAIL}
    </div>
  );
};

const SocialAccount = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        paddingTop: 16,
        lineHeight: "28px",
        fontSize: ds.size.sm,
      }}>
      {SOCIAL_ACCOUNTS.map(account => (
        <SocialAccountItem
          key={account.name}
          css={{ marginRight: 25, "&:last-of-type": { marginRight: 0 } }}
          {...account}
        />
      ))}
    </div>
  );
};

const SocialAccountItem = ({
  color,
  link,
  name,
  ...otherProps
}: {
  color: string;
  link: string;
  name: string;
}) => {
  const ref = useRef(null);
  const [rect] = useRect(ref);
  const [isHover, { show, hide }] = useToggle();
  const styles = useSpring({
    width: isHover ? rect.width : SOCIAL_ACCOUNT_UNDERLINE_WIDTH,
  });

  return (
    <a
      {...pickElmAttrs(otherProps)}
      ref={ref}
      css={{
        ...userSelect("none"),
        display: "inline-block",
        color,
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      <div onMouseEnter={show} onMouseLeave={hide}>
        {name}
      </div>
      <animated.div
        style={{
          height: 2,
          background: color,
          ...styles,
        }}
      />
    </a>
  );
};
