import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";

import { useRect } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { size, position, flex } from "src-core/style";

import { Stars } from "./Stars";

import { IDictionary } from "utils/object";

export const Header = ({
  social,
  contact,
}: {
  social: IDictionary<string>;
  contact: IDictionary<string>;
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
                  fontSize: ds.size.s,
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
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={{
        ...position("relative"),
        ...size("100%", 400),
        background: "#171a19",
        color: ds.color.text,
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
  const ds = useDesignSystem();

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
        color: ds.color.bg,
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
        fontSize: ds.size.xl,
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
        fontSize: ds.size.s,
        fontWeight: 400,
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
