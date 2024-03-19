/* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.*/
var Guest_List = ["Huzaifa", "bilal", "moiz"];
for (var _i = 0, Guest_List_1 = Guest_List; _i < Guest_List_1.length; _i++) {
    var Guest = Guest_List_1[_i];
    console.log('I’d like to invite to dinner Mr.', Guest);
}
var absent_guest = "bilal";
var new_guest = "hamza";
Guest_List[1] = new_guest;
console.log("\n Due to some persnal reasons Mr.".concat(absent_guest, " Will Not Come to our party. \n"));
for (var _a = 0, Guest_List_2 = Guest_List; _a < Guest_List_2.length; _a++) {
    var Guest = Guest_List_2[_a];
    console.log('I’d like to invite to dinner Mr.', Guest);
}
