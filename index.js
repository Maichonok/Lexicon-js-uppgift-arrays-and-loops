const numbers = [];

// Ex.#1
numbers.push(1, 4, 6, 8, 10, 12);
console.log(numbers);

// Ex.#2
let multiplyArray = [2, 3, 5, 7, 9, 11];
multiplyArray.forEach(function (val, i, arr) {
  arr[i] = val * 3;
});

console.log(multiplyArray);

// Ex.#3
let array = [2, 3, 5, 7, 9, 11];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 5) {
    newArray.push(array[i]);
  }
}
console.log(newArray);

// Ex.#4
let randomNumbers = Array.from({ length: 10 }, () => Math.random());
console.log(randomNumbers);

let sum = 0;

for (let i = 0; i < randomNumbers.length; i++) {
  sum += randomNumbers[i];
}

console.log(sum.toFixed(2));

// Ex.#5
let values = [5, 19, 10, 15, 6, 8];
let elementToFind = 19;

for (let i = 0; i < values.length; i++) {
  if (values[i] === elementToFind) {
    console.log(`${elementToFind} was found!`);
  }
}

// Ex.#6
let newValues = [5, 19, 10];
newValues.length = newValues.length - 1;
console.log(newValues);

// Ex.#7
let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let biggest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > biggest) {
    biggest = arr[i];
  }
}
console.log(biggest);

// Ex.#8
let arrNew = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let result = [];

for (let i = 0; i < arrNew.length; i++) {
  result.push(arrNew[i]);
}
console.log(result);

// Ex.#9
let myArray = [3, 4, 5, 6];
while (myArray.length > 0) {
  myArray.pop();
}
console.log(myArray);
