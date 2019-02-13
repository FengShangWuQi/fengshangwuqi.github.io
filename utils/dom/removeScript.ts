export const removeScript = (id: string) => {
  const doc = window.document;
  const script = doc.getElementById(id);

  if (script) (doc.head || doc.body).removeChild(script);
};
