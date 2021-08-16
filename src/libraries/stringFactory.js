const firstLetterIsCaps = (expr) => {
  if (!expr) {
    // expr is empty
    return false;
  }
  const regex = /^[A-Z]/;
  const itIsCaps = regex.exec(expr) !== null;

  return itIsCaps;
};

export default firstLetterIsCaps;
