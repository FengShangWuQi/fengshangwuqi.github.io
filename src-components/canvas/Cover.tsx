import React, { useRef, useLayoutEffect } from "react";

export const Cover = ({ width, height }: { width: number; height: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // add stars
  const starsArr: (() => void)[] = [];
  let starsAnimationID: number;
  const STAR_COLORS = [
    "#4c1a22",
    "#4c1a23",
    "#5d6268",
    "#1f2e37",
    "#474848",
    "#542619",
    "#ead8cf",
    "#4c241f",
    "#d6b9b1",
    "#964a47",
  ];
  const STARS_NUM = (width * 2) / 3;
  const STAR_RADIUS = 0.5;
  const STAR_INCREMENT = 1.3;

  useLayoutEffect(() => {
    const ctx = canvasRef.current!.getContext("2d");

    const starsDraw = (
      x: number,
      y: number,
      dx: number,
      dy: number,
      fill: string,
    ) => () => {
      if (x + STAR_RADIUS > width || x - STAR_RADIUS < 0) dx = -dx;
      if (y + STAR_RADIUS > height || y - STAR_RADIUS < 0) dy = -dy;
      x += dx;
      y += dy;

      ctx!.beginPath();
      ctx!.arc(x, y, STAR_RADIUS, 0, Math.PI * 2);
      ctx!.fillStyle = fill;
      ctx!.fill();
    };

    const starsAnimate = () => {
      starsAnimationID = requestAnimationFrame(starsAnimate);

      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < starsArr.length; i++) {
        const draw = starsArr[i];
        draw();
      }
    };

    for (let i = 0; i < STARS_NUM; i++) {
      const x = Math.random() * (width - STAR_RADIUS * 2) + STAR_RADIUS;
      const y = Math.random() * (height - STAR_RADIUS * 2) + STAR_RADIUS;
      const dx = (Math.random() - 0.5) * STAR_INCREMENT;
      const dy = (Math.random() - 1) * STAR_INCREMENT;
      const fill = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];

      starsArr.push(starsDraw(x, y, dx, dy, fill));
    }

    starsAnimate();

    return () => cancelAnimationFrame(starsAnimationID);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      css={{
        width,
        height,
      }}
    />
  );
};
