// Viết chương trình tính giá trị căn bậc hai của một số nguyên

// function calculateSquareRoot(number) {
//     const squareRoot = Math.sqrt(number);
//     return squareRoot;
// }

// function sqrt(number) {
//     for (let i = 0; i <= number.length; i++) {
//         if(i ** 2 < n && (i + 1) ** 2 > n) {
//             for (let j = i + 1; j <= number.length; j++){}
//         }
// }
// }

// const number = 15;
// const result = calculateSquareRoot(number);
// console.log(number, result);

// Viết chương trình tìm phần tử thứ n của dãy fibonacci

// function fibonacci(n) {
//     if (n <= 0) {
//         return "Vui lòng nhập số nguyên dương lớn hơn 0";
//     }

//     if (n === 1) {
//         return 0;
//     }

//     if (n === 2) {
//         return 1;
//     }

//     let prev1 = 0;
//     let prev2 = 1;
//     let current;

//     for (let i = 3; i <= n; i++) {
//         current = prev1 + prev2;
//         prev1 = prev2;
//         prev2 = current;
//     }

//     return current;
// }

// const n = 10;
// const result = fibonacci(n);
// console.log(result);

// Viet chuong trinh tinh tong so chan trong 1 day so
// function firstEvenNumbersSum(n) {
//     if (n === 0) {
//         return 0;
//     }
//     let num = n * 2;
//     let sum = num + firstEvenNumbersSum(n - 1);
//     return sum;
// }

// console.log(firstEvenNumbersSum);
