export const camelCase = (name: string) =>
  name.toLowerCase().replace(/[-_.\s]+(\w)/g, (_, p1) => p1.toUpperCase());
