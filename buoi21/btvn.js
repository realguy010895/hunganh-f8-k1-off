//# Bài 1:
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(field) {
    if (errors.hasOwnProperty(field)) {
        const errorGroup = errors[field];
        for (const errorType in errorGroup) {
            if (errorGroup.hasOwnProperty(errorType)) {
                return errorGroup[errorType];
            }
        }
    }
    return "Không tìm thấy lỗi";
}

console.log(getError("name")); // Output: "Vui lòng nhập họ tên"
console.log(getError("email")); // Output: "Định dạng email không hợp lệ"

//# Bài 2:
function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function createCustomers(customers) {
    const sortedCustomers = customers.sort((a, b) => a.age - b.age);
    const result = sortedCustomers.map((customer) => {
        const nameParts = customer.name.split(" ");
        const shortName = `${nameParts[nameParts.length - 1]} ${nameParts[0]}`;

        return { ...customer, shortName };
    });

    return result;
}

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
console.log(result);

//# Bài 3:
function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

const data = [];

function validateRegistration(name, password, email) {
    if (!name || !password || !email) {
        console.log("Thông tin không đầy đủ. Vui lòng kiểm tra lại.");
        return false;
    }
    if (data.some((user) => user.email === email)) {
        console.log("Email đã được sử dụng. Vui lòng chọn email khác.");
        return false;
    }
    return true;
}

function handleRegister(name, password, email) {
    if (validateRegistration(name, password, email)) {
        const newUser = new User(name, password, email);
        data.push(newUser);
        return newUser;
    }
}

// Hàm để kiểm tra đăng nhập
function handleLogin(email, password) {
    const user = data.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        return user;
    } else {
        console.log("Thông tin đăng nhập không hợp lệ.");
    }
}

// Đăng ký người dùng
const dataRegisterA = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
const dataRegisterB = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);

// Kiểm tra đăng nhập
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(data);
console.log(dataLogin);
