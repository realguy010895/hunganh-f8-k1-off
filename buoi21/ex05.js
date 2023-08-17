// function contructor = ham tao

// var person = {
//     name: "long",
//     age: "28",
//     email: "realguy@gmail.com"
// }

// var user = {
//     name: "duong",
//     age: "19",
//     email: "duong@gmail.com",
//     getName: function() {
//         this.name
//     }
// }

// dinh nghia ham tao

var Person = function (name, email, age) {
    // dinh nghia cac thuoc tinh
    this.name = name;
    this.email = email;
    this.age = age;
    var _this = this;
    this.getName = function () {
        return _this.name;
    };
};
Person.prototype.getMessage = function () {
    return "Fullstack K1";
};

// khoi tao doi tuong
var person = new Person("Nguyen Long", "nguyenlong@gmail.com", 31);
var user = new Person("Nguyen duong", "nguyenduong@gmail.com", 31);
console.log(person.getMessage());
console.log(user.getMessage());

// Kiem tra 1 object dc khoi tao tu ham tao nao
var user = [];
console.log(user.contructor.name);
