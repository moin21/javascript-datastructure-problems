function generateRandomNumber() {
  return (randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100);
}

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = generateRandomNumber();
  console.log(numbers[i]);
}

numbers.sort();
console.log("The Sorted Array is:");
for (let index = 0; index < 10; index++) {
  console.log(numbers[index]);
}

console.log("Second Largest Element : " + numbers[1]);
console.log("Second Smallest Element : " + numbers[8]);
