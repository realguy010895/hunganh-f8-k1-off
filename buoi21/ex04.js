console.log(Object.prototype);

Object.prototype.combine = function (...args) {
    var result = [];
    var _this = this;
    if (args.length) {
        args.forEach(function (arg) {
            result.push(_this[arg]);
        });
    }
    return result;
};

var user = {
    name: "Nguyen Long",
    mail: "realguy010895@gmail.com",
    age: 31,
};
var abc = {
    name: "Nguyen Long",
    mail: "realguy010895@gmail.com",
    age: 31,
};
console.log(user.combine("name", "mail", "age"));

console.log(user);
