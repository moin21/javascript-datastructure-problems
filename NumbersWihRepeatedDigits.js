const numbersWithRepeatedDigits = [];
function findingNumbersWithRepeatedDigits() {
  let count = 0;
  for (let i = 1; i < 100; i++) {
    if (i / 10 == i % 10) {
      console.log(i);
      numbersWithRepeatedDigits[count] = i;
      count++;
    }
  }
}
findingNumbersWithRepeatedDigits();
