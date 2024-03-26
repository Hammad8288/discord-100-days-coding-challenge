/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.*/

let Guest_name:string [] = ["Huzaifa","Bilal","Moiz","arsalan","umair","imran"];

console.log("bad news guys ! i can invite only two people for dinner.") ;

while(Guest_name.length > 2){
    let removed_guest = Guest_name.pop();
    console.log(`Sorry Mr.${removed_guest} you are not invited for dinner.`)
}

Guest_name.forEach(guest =>{
    console.log(`Dear Mr.${guest} You Are Still Invited..`)
}) ;
