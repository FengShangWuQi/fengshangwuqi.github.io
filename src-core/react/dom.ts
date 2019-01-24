export const withoutBubble = (cb: () => void) => (e: React.SyntheticEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  cb();
};
