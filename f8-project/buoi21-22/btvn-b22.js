// # Bài 1
// function calculateExpression(...values) {
//     let sum = 0;

//     for (let value of values) {
//         if (typeof value !== "number") {
//             return "Dữ liệu truyền vào không hợp lệ";
//         }
//         sum += value;
//     }

//     return sum;
// }

// console.log(calculateExpression(1, 2, 3));
// console.log(calculateExpression(1, 2, "abc"));

//# Bài 2
// Number.prototype.getCurrency = function (currencyUnit) {
//     let currenCy = {
//         style: "currency",
//         currency: currencyUnit,
//     };
//     return new Intl.NumberFormat("vi-VN", currenCy).format(this);
// };

// String.prototype.getCurrency = function (currencyUnit) {
//     let currenCy = {
//         style: "currency",
//         currency: currencyUnit,
//     };
//     return new Intl.NumberFormat("vi-VN", currenCy).format(this);
// };

// var price1 = 12000;
// console.log(price1.getCurrency("VND"));

// var price2 = "12000000";
// console.log(price2.getCurrency("VND"));

// Bài 3
// function convertToNestedArray(array, parentId = 0) {
//     const result = [];

//     array.forEach((item) => {
//         if (item.parent === parentId) {
//             const newItem = { ...item };

//             const children = convertToNestedArray(array, item.id);
//             if (children.length > 0) {
//                 newItem.children = children;
//             }

//             result.push(newItem);
//         }
//     });

//     return result;
// }

// const flatArray = [
//     { id: 1, name: "Chuyên mục 1", parent: 0 },
//     { id: 2, name: "Chuyên mục 2", parent: 0 },
//     { id: 3, name: "Chuyên mục 3", parent: 0 },
//     { id: 4, name: "Chuyên mục 2.1", parent: 2 },
//     { id: 5, name: "Chuyên mục 2.2", parent: 2 },
//     { id: 6, name: "Chuyên mục 2.3", parent: 2 },
//     { id: 7, name: "Chuyên mục 3.1", parent: 3 },
//     { id: 8, name: "Chuyên mục 3.2", parent: 3 },
//     { id: 9, name: "Chuyên mục 3.3", parent: 3 },
//     { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
//     { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
//     { id: 12, name: "Chuyên mục 2.2.3", parent: 5 },
// ];

// const nestedArray = convertToNestedArray(flatArray);
// console.log(JSON.stringify(nestedArray, null, 2));

//# Bài 4
// Array.prototype.reduce2 = function(callback, initialValue) {
//     let accumulator = initialValue === undefined ? this[0] : initialValue;

//     for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
//       accumulator = callback(accumulator, this[i], i, this);
//     }

//     return accumulator;
//   };

//   const numbers = [1, 2, 3, 4, 5];

//   const sum = numbers.reduce2((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   console.log(sum);
