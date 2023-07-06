type convertFunctionType = (a: string) => number;

const convertToMilliscond = (value: string): number | undefined => {
  let number = Number(value.slice(0, value.length - 1));
  let timeType = value
    .slice(value.length - 1)
    .trim()
    .toLowerCase();
  let ans = value.slice(value.length - 3);
  let an = value.slice(value.length - 2);

  if (an !== "an" && ans !== "ans")
    switch (timeType) {
      case "j":
        return number * 24 * 60 * 60 * 1000;
      case "h":
        return number * 60 * 60 * 1000;
      case "s":
        return number * 1000;
      default:
        return undefined;
    }

  if (an === "an" || ans === "ans") {
    an === "an"
      ? (number = Number(value.slice(0, value.length - 2)))
      : (number = Number(value.slice(0, value.length - 3)));
    return number * 365 * 24 * 60 * 60 * 1000;
  }
};

export default convertToMilliscond;
