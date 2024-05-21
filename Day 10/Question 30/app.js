//Question 30: Hello Admin: Greet users differently, especially 'admin'.
var username = ["hammad", "bilal", "admin", "huzaifa", "moiz"];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var name_1 = username_1[_i];
    if (name_1 === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(name_1, ", thank you for logging in again."));
    }
}
