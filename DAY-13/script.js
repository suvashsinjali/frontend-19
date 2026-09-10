// function arithmetic(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "/":
//       return a / b;
//     case "*":
//       return a * b;
//     default:
//       return "invalid operator";
//   }
}

// const isNumEven = (num) => {
//   return num % 2 === 0 ? `${num} is even number.` : `${num} is odd Number.`;
// };

// console.log(isNumEven(21));

// function isNumEven(num) {
//   return num % 2 === 0 ? `${num} is even number.` : `${num} is odd Number.`;
// }
// console.log(isNumEven(21));

// let myName = "Suvash";
// myName.split("").reverse().join("");

// console.log(myName);

// const arithmetic = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "/":
//       return a / b;
//     case "*":
//       return a * b;
//     default:
//       return "invalid operator";
//   }
// };

// console.log(arithmetic(5, 3, "+"));
// console.log(arithmetic(5, 3, "-"));
// console.log(arithmetic(5, 3, "/"));
// console.log(arithmetic(5, 3, "*"));
// console.log(arithmetic(5, 3, "."));

function capitalize(str) {
  if (typeof str !== "String" || !str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let fruit = 2;
console.log(capitalize(fruit));

// let myName = "suvash";
// let upperCase = myName.charAt(0).toUpperCase() + myName.slice(1);
// console.log(upperCase);

// let replacedName = myName.replace("s", "S");
// console.log(replacedName);
