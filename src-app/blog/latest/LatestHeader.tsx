import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { position, size } from "polished";
import { Dictionary } from "lodash";

import { useRect } from "src-core/hooks";
import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { Stars } from "../common/Stars";

export const LatestHeader = ({
  social,
  contact,
}: {
  social: Dictionary<string>;
  contact: Dictionary<string>;
}) => {
  const ds = useDesignSystem();

  return (
    <Wrapper>
      {({ width, height }) => (
        <>
          <Stars width={width} height={height} />
          <Container>
            <div>
              <Title />
              <Contact Email={contact["Email"]} />
              <div
                css={{
                  paddingTop: 16,
                  lineHeight: "28px",
                  fontSize: ds.size.sm,
                }}>
                <SocialLink
                  src={`https://github.com/${social["GitHub"]}`}
                  color="#e0a458">
                  GitHub
                </SocialLink>
                <SocialLink
                  src={`https://twitter.com/${social["Twitter"].slice(1)}`}
                  color="#419d78">
                  Twitter
                </SocialLink>
                <SocialLink
                  src={`https://fengshangwuqi.netlify.com`}
                  color="#d9594c">
                  Storybook
                </SocialLink>
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
  const rect = useRect(ref);

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

const SocialLink = ({
  src,
  color,
  children,
}: {
  src: string;
  color: string;
  children: string;
}) => {
  const ref = useRef(null);
  const rect = useRect(ref);

  const DEFAULT_WIDTH = 15;
  const [props, setProps] = useSpring(() => ({
    width: DEFAULT_WIDTH,
    height: 2,
    background: color,
  }));

  return (
    <a
      ref={ref}
      css={{
        display: "inline-block",
        marginRight: 25,
        color,
      }}
      href={src}
      target="_blank"
      rel="noopener noreferrer">
      <div
        onMouseEnter={() => {
          setProps({ width: rect.width });
        }}
        onMouseLeave={() => {
          setProps({
            width: DEFAULT_WIDTH,
          });
        }}>
        {children}
      </div>
      <animated.div style={props} />
    </a>
  );
};
