import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { position, size } from "polished";

import { useRect } from "src-core/hooks";
import { useDesignSystem } from "src-core/ds";
import { flex, userSelect } from "src-core/style";
import { pickElmAttrs } from "utils/pickElmAttrs";

import { SOCIAL_ACCOUNTS, SOCIAL_ACCOUNT_UNDERLINE_WIDTH } from "../constants";
import { Stars } from "./Stars";

export const LatestHeader = () => {
  const ds = useDesignSystem();

  return (
    <Wrapper>
      {({ width, height }) => (
        <>
          <Stars width={width} height={height} />
          <Container>
            <div>
              <Title />
              <Contact Email="fengshangwuqi@gmail.com" />
              <div
                css={{
                  paddingTop: 16,
                  lineHeight: "28px",
                  fontSize: ds.size.sm,
                }}>
                {SOCIAL_ACCOUNTS.map(account => (
                  <SocialAccount
                    css={{ marginRight: 25 }}
                    key={account.name}
                    link={account.link}
                    color={account.color}>
                    {account.name}
                  </SocialAccount>
                ))}
              </div>
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

const Title = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...userSelect("none"),
        lineHeight: "63px",
        fontFamily: "serif",
        fontSize: ds.size["4xl"],
        color: "#fff",
        letterSpacing: 2,
      }}>
      枫上雾棋的日志
    </div>
  );
};

const Contact = ({ Email }: { Email: string }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...userSelect("none"),
        fontFamily: "sans-serif",
        fontSize: ds.size.sm,
        lineHeight: "28px",
        color: "#ddd",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}>
      {Email}
    </div>
  );
};

const SocialAccount = ({
  link,
  color,
  children,
  ...otherProps
}: {
  link: string;
  color: string;
  children: string;
}) => {
  const ref = useRef(null);
  const [rect] = useRect(ref);

  const [props, setProps] = useSpring(() => ({
    width: SOCIAL_ACCOUNT_UNDERLINE_WIDTH,
    height: 2,
    background: color,
  }));

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
      <div
        onMouseEnter={() => {
          setProps({ width: rect.width });
        }}
        onMouseLeave={() => {
          setProps({
            width: SOCIAL_ACCOUNT_UNDERLINE_WIDTH,
          });
        }}>
        {children}
      </div>
      <animated.div style={props} />
    </a>
  );
};
