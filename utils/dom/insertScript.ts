export const insertScript = (src: string, id: string) => {
  const doc = window.document;
  const script = doc.createElement("script");
  script.async = true;
  script.src = src;
  script.id = id;
  (doc.head || doc.body).appendChild(script);

  return script;
};
