export const firstLetterIsCaps = function checkIfFirstLetterIsCaps(string) {
  if (!string) {
    //string is empty
    console.log("string is empty");
    return false;
  }
  const regex = /^[A-Z]/;
  const itIsCaps = regex.exec(string) !== null;

  console.log(`Does ${string} begin with a capital letter? ${itIsCaps}`);
  return itIsCaps;
};
