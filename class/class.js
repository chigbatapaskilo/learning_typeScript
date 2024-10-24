var invoice = /** @class */ (function () {
    function invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.details, " the sum of").concat(this.amount);
    };
    return invoice;
}());
var generateInvoice = new invoice("mr sam", "mr james", 400);
console.log(generateInvoice);
var expensesTracker = /** @class */ (function () {
    function expensesTracker(e, d, a) {
        this.expense = e;
        this.description = d;
        this.amount = a;
    }
    expensesTracker.prototype.format = function () {
        return " ".concat(this.expense, ";\n        ").concat(this.description, ";\n        ").concat(this.amount);
    };
    return expensesTracker;
}());
var trackfundz = new expensesTracker("food", "morning food", 600);
console.log(trackfundz);
var expenses = [];
expenses.push(trackfundz);
var myArray = [];
var arrayData = myArray.push("89");
console.log(myArray);
trackfundz.amount = 7000;
console.log(trackfundz);
var order = /** @class */ (function () {
    function order(n, a, p) {
        this.name = n;
        this.address = a;
        this.phoneNumber = p;
    }
    order.prototype.format = function () {
        return "my name is ".concat(this.name, ",i live at ").concat(this.address, ", my phonenumber is ").concat(this.phoneNumber);
    };
    return order;
}());
var user1 = new order("emeka", "75 uzor street", 7043081352);
console.log(user1);
var user2 = [];
user2.push(user1);
console.log(user2);
var user = /** @class */ (function () {
    function user(u, s, a, d) {
        this.userName = u;
        this.sex = s;
        this.age = a;
        this.dateOfBirth = d;
    }
    user.prototype.format = function () {
        return "i was born on ".concat(this.dateOfBirth.day, "/").concat(this.dateOfBirth.month, "/").concat(this.dateOfBirth.year, " and i am a ").concat(this.sex);
    };
    return user;
}());
var registeredUser = new user("paschal", "male", 23, { day: 15, month: "april", year: 2001 });
var registeredUser1 = new user("chelsea", "female", 25, { day: 16, month: "july", year: 2002 });
registeredUser = new user("paschal", "male", 23, { day: 15, month: "april", year: 1998 });
var registeredUser3 = new user("pato", "male", 23, { day: 15, month: "april", year: 2001 });
console.log(registeredUser.format());
console.log(registeredUser);
var newUsers = [];
newUsers.push(registeredUser);
newUsers.push(registeredUser1);
newUsers.push(registeredUser);
newUsers.push(registeredUser3);
console.log(newUsers);
newUsers.forEach(function (news) {
    console.log(news.format());
});
var newUser = /** @class */ (function () {
    function newUser(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    newUser.prototype.format = function () {
        return "".concat(this.a, " ").concat(this.b, " ").concat(this.d, " ").concat(this.d);
    };
    return newUser;
}());
var registeredUser5 = new newUser("emeka", "lota", 5, { e: "ebuka", f: "chinedu" });
console.log("`the name of my elder brother is,`".concat(registeredUser5.b));
