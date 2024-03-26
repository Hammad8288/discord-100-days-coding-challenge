/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.*/
var guests = ['hammad', 'bilal', 'huzaifa', 'moiz', 'hamza'];
console.log("Good News ! I Just found a bigger dinner table.");
//• Add one new guest to the beginning of your array.
guests.unshift("Arsalan");
//• Add one new guest to the middle of your array. 
guests.splice(2, 0, "imran");
//add one new guest to the end of your list
guests.push("Umair");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
}
