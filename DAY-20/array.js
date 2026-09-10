let arr = ["apple", "banana", "orange", "cherry"];
let capitalized = arr.forEach(
  (item) => item.charAt(0).toUpperCase() + item.slice(1),
);
// arr.sort((a, b) => a.localeCompare(b));
// arr.splice(3, 0, "kiwi");
console.log(capitalized);

let num = [1, 2, 3, 4, 6, 5];
const filter = num.filter((item) => item >= 5).map((item) => item * 2);
// num.sort((a, b) => a - b);
// num.sort((a, b) => b - a);
console.log(filter);
