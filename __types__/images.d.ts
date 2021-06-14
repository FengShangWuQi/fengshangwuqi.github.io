declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  export default ReactComponent;
}

declare module "*.png" {
  const src: string;
  export default src;
}
