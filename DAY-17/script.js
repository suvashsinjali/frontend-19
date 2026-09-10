let num = [1, 2, 3, 4, 5];

let filterNum = num.filter((item) => item % 2 === 0).map((item) => item * 2);
console.log(filterNum);

// let mapNum = filterNum.map((item) => item * 2);
// console.log(mapNum);

let fruits = ["apple", "banana", "cherry", "blueberry"];
let longestWord = fruits.reduce((prev, curr) =>
  prev.length > curr.length ? prev : curr,
);
console.log(longestWord);

// let highestLength = fruits.map((item) => item.length);
// console.log(highestLength);

// let highestNumber = highestLength.reduce();
// //
//     fruits.map((item) => item.charAt(0).toLocaleLowerCase() + item.slice(1)),
//   );
// let newFruits = fruits.foreach((item) => {
//   return item;
// });
// console.log(fruits);
// fruits.splice(3, 0, "Mango", "Orange");
// console.log(fruits);
