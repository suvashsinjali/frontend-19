// let cards = [
//   "A",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
// ];
// let randomCards = cards[Math.floor(Math.random() * cards.length)];

// console.log(randomCards);

// Array spread operator
// let arr = ["name", "age"];
// let arr2 = [...arr];
// arr2.push("address");
// console.log(arr);
// console.log(arr2);

// Object spread operator
// let user = {
//   name: "Suvash Sinjali",
//   age: 30,
//   address: {
//     city: "Kathmandu",
//     country: "Nepal",
//   },
// };

// let user2 = structuredClone(user);
// // let user2 = { ...user };
// user2.userId = 7;

// console.log(user);
// console.log(user2);

// let user = {
//   name: "Suvash Sinjali",
//   age: 30,
//   address: "KTM",
// };

// let fruits = ["apple", "mango", "banana"];
// const [a, b, c] = fruits;

// console.log(a);

// let students = [
//   {
//     name: "Shyam",
//     age: 29,
//     isStudent: true,
//     marks: 90,
//     address: {
//       city: "Kathmandu",
//       state: "Bagmati",
//     },
//   },
//   {
//     name: "Ram",
//     age: 30,
//     isStudent: false,
//     marks: 80,
//     address: {
//       city: "Kathmandu",
//       state: "Bagmati",
//     },
//   },
//   {
//     name: "Hari",
//     age: 28,
//     isStudent: true,
//     marks: 70,
//     address: {
//       city: "New York",
//       state: "USA",
//     },
//   },
// ];

// let filterAdd = students
//   .filter((item) => item.address.state === "Bagmati")
//   .map((item) => item.name);
// console.log(filterAdd);

// let filteredAge = students
//   .sort((a, b) => b.age - a.age)
//   .forEach((item) => console.log(item.name));

// console.log(filteredAge);

// let forEachName = students.forEach((item) =>
//   item.address.state === "Bagmati" ? console.log(item.name) : null,
// );
// console.log(forEachName);

// console.log(filteredAge);

// let foreachAge = students.forEach((item) =>
//   item.age >= 30 ? console.log(item.name) : null,
// );

// console.log(foreachAge);

// let filteredName = students
//   .filter((item) => item.isStudent)
//   .map((item) => item.name);

// console.log(filteredName);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let averageAge = ages.reduce((a, b) => a + b / ages.length);
console.log(`The average age is ${averageAge}.`);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]; // List of countries

let middle = Math.floor(countries.length / 2);
console.log(middle);

// const frtHalf = continues.length %
