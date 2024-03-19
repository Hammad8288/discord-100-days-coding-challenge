/*Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.*/
var friends = ['hammad', 'huzaifa', 'bilal', 'moiz'];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log("Hello from", friend);
}
