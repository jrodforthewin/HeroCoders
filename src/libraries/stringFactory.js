const firstLetterIsCaps = (expr) => {
  if (!expr || typeof expr !== 'string') {
    return false;
  }
  const regex = /^[A-Z]/;
  const itIsCaps = regex.exec(expr) !== null;

  return itIsCaps;
};

export default firstLetterIsCaps;
