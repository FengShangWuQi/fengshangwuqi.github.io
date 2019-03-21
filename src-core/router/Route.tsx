import React from "react";

export interface IBaseRoute {
  path?: string;
  default?: boolean;
}

export interface IRoute extends IBaseRoute {
  element: React.ReactElement;
}

export interface IRouteProps extends IBaseRoute {
  component: React.ComponentType<any>;
}

export const Route = ({ component: Component, ...rest }: IRouteProps) => (
  <Component {...rest} />
);
