/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.*/

let guests :string[] =['hammad','bilal','huzaifa','moiz','hamza'] ;

console.log("Good News ! I Just found a bigger dinner table.")

//• Add one new guest to the beginning of your array.
guests.unshift("Arsalan") ;

//• Add one new guest to the middle of your array. 
guests.splice(2 , 0, "imran" ); 

//add one new guest to the end of your list
guests.push("Umair") ;

for(let guest of guests) {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
}

