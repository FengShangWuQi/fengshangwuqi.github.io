import React, { useRef, useEffect } from "react";

import { useDesignSystem } from "src-core/ds";
import { useRect } from "src-core/hooks";

export const BarrageDemo = () => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const [rect] = useRect(ref);

  const data = Array.from({ length: 30 }, (_, i) => `${String(i).repeat(3)}`);

  return (
    <div
      ref={ref}
      css={{
        width: "100%",
        height: 300,
        background: ds.color.secondary,
      }}>
      <Barrage width={rect.width} height={rect.height} data={data} />
    </div>
  );
};

const Barrage = ({
  width,
  height,
  data,
}: {
  width: number;
  height: number;
  data: string[];
}) => {
  const ds = useDesignSystem();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const barrageArr: (() => void)[] = [];
    let animationID: number;

    const ctx = canvasRef.current!.getContext("2d") as CanvasRenderingContext2D;

    const barrageDraw =
      (value: string, x: number, y: number, dx: number, index: number) =>
      () => {
        x -= dx;

        if (x < -1 * width * 1.5) {
          x = (1 + (index * 0.1) / Math.random()) * width;
          y = Math.floor(Math.random() * (height - 30)) + 30;
          dx = 1 + Math.random() * 3;
        }

        ctx.font = "1.5rem Microsoft YaHei";
        ctx.fillStyle = ds.colorPalette.white;
        ctx.fillText(value, x, y);
      };

    const barrageAnimate = () => {
      animationID = requestAnimationFrame(barrageAnimate);

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < barrageArr.length; i++) {
        const draw = barrageArr[i];
        draw();
      }
    };

    data.map((value, index) => {
      const x = (1 + (index * 0.1) / Math.random()) * width;
      const y = Math.floor(Math.random() * (height - 30)) + 30;
      const dx = 1 + Math.random() * 3;

      barrageArr.push(barrageDraw(value, x, y, dx, index));
    });

    barrageAnimate();

    return () => {
      cancelAnimationFrame(animationID);
    };
  }, [width, height, data]);

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
