// Array.prototype.map2 = function (cb) {
//     if (typeof cb !== "function") {
//         return;
//     }
//     var array = this;
//     var newArr = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         var result = cb(element, i);
//         newArr[newArr.length] = result;
//     }
//     return newArr;
// };

// var users = ["user1", "user2", "user3"];

// var newArr = users.map2(function (user, index) {
//     return `<h2>${index} - ${user}</h2>`;
// });

// console.log(newArr);

var obj1 = {
    name: "Nguyen Long",
    email: "nguyenlong.web@gmail.com",
    age: 31,
    address: "Ha Noi",
};
var obj2 = {
    age: 31,
    address: "Ha Noi",
};

Object.keys(obj2).forEach(function (key) {
    // obj1[key] = obj2[key];
    // console.log(key, obj2[key]);
});

console.log(obj1["address"], obj2["address"]);

obj1["address"] = obj2["address"];

// console.log(obj1["age"], obj2["age"]);
