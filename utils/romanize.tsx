export const romanize = (num?: number) => {
  let numeral = '';
  const arr = [
    { number: 1, roman: 'I' },
    { number: 4, roman: 'IV' },
    { number: 5, roman: 'V' },
    { number: 9, roman: 'IX' },
    { number: 10, roman: 'X' },
    { number: 40, roman: 'XL' },
    { number: 50, roman: 'L' },
    { number: 90, roman: 'XC' },
    { number: 100, roman: 'C' },
    { number: 400, roman: 'CD' },
    { number: 500, roman: 'D' },
    { number: 900, roman: 'CM' },
    { number: 1000, roman: 'M' },
  ];
  if (num)
    while (num > 0) {
      const searching = arr.filter(function (myArr) {
        if (num && myArr.number <= num) {
          return myArr.number;
        }
      });
      const latest = searching.pop();
      const full = latest && Math.floor(num / latest.number);
      if (full)
        for (let i = 0; i < full; i++) {
          numeral += latest?.roman;
        }
      if (latest) num = num % latest?.number;
    }
  return numeral;
};
