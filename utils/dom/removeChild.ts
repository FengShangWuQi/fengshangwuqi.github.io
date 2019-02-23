export const removeChild = (id: string) => {
  const doc = window.document;
  const child = doc.getElementById(id);

  if (child) (doc.head || doc.body).removeChild(child);
};
