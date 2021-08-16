const circleArea = (radius = 0) => {
  const radiusSquared = radius ** 2;
  const area = Math.PI * radiusSquared;
  console.log(
    `The area of a circle with the radius of ${radius}, is ${area}. Calculation is Area = pi * radius². Pi: ${Math.PI}, Radius²: ${radiusSquared}`
  );
  return area;
};

export default circleArea;