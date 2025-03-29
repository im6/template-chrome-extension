import { interval, take } from "rxjs";

export const getInterval = () => {
  const numbers = interval(1000);
  const takeFourNumbers = numbers.pipe(take(4));
  return takeFourNumbers;
};
