const circleArea = (radius = 0) => {
  if (typeof radius !== 'number') {
    return 0;
  }
  const radiusSquared = radius ** 2;
  const area = Math.PI * radiusSquared;
  return area;
};

export default circleArea;
