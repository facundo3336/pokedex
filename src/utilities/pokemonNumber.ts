export const pokemonNumber = (number: number): string | number => {
  const numberString = number.toString().split("");
  let newNumber;

  switch (numberString.length) {
    case 1:
      newNumber = "000" + numberString[0];
      break;
    case 2:
      newNumber = "00" + numberString[0] + numberString[1];
      break;
    case 3:
      newNumber = "0" + numberString[0] + numberString[1] + numberString[2];
      break;
    default:
      newNumber = number;
  }

  return newNumber;
};
