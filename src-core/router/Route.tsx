import React from "react";

export interface IRoute {
  path: string;
  default?: boolean;
}

export interface IRouteProps extends IRoute {
  component: React.ComponentType<any>;
}

export const Route = ({ component: Component, path, ...rest }: IRouteProps) => (
  <Component {...rest} />
);
