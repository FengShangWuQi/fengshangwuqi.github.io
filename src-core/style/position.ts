export interface IPosition {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface IAbsolute extends IPosition {
  position: 'absolute';
}

export enum PositionDirection {
  LEFT_TOP,
  RIGHT_TOP,
  LEFT_BOTTOM,
  RIGHT_BOTTOM,
}

export const relative = ({ top, right, bottom, left }: IPosition) => ({
  position: 'relative',
  top,
  right,
  bottom,
  left,
});

export const absolute = (
  direction?: PositionDirection,
  offset?: IPosition
): IAbsolute => {
  const defaults: IAbsolute = {
    position: 'absolute',
  };

  switch (direction) {
    case PositionDirection.LEFT_TOP:
      return {
        ...defaults,
        top: 0,
        left: 0,
        ...offset,
      };
    case PositionDirection.RIGHT_TOP:
      return {
        ...defaults,
        top: 0,
        right: 0,
        ...offset,
      };
    case PositionDirection.LEFT_BOTTOM:
      return {
        ...defaults,
        bottom: 0,
        left: 0,
        ...offset,
      };
    case PositionDirection.RIGHT_BOTTOM:
      return {
        ...defaults,
        bottom: 0,
        right: 0,
        ...offset,
      };
    default:
      return {
        ...defaults,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      };
  }
};
