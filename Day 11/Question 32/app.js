// Question 32: Checking Usernames: Ensure uniqueness in usernames.
// List of current usernames
var current_users = ["John", "hammad", "HUzaifa", "BILAL", "moiz"];
// List of new usernames   
var new_users = ["JOHN", "hamza", "arsalan", "bilal", "umair"];
// Convert all current usernames to lowercase for case-insensitive comparison
var convertUsernames = current_users.map(function (user) { return user.toLowerCase(); });
new_users.forEach(function (user) {
    if (convertUsernames.includes(user.toLowerCase())) {
        console.log("".concat(user, " is already taken, please choose another username."));
    }
    else {
        console.log("".concat(user, " is available."));
    }
});
