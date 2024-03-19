/* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.*/


let Guest_List:string[] = ["Huzaifa","bilal","moiz"] ;

for (let Guest of Guest_List){
    console.log('I’d like to invite to dinner Mr.',Guest) ;
}

let absent_guest = "bilal" ;
let new_guest = "hamza" ;

Guest_List[1] = new_guest 


console.log(`\n Due to some persnal reasons Mr.${absent_guest} Will Not Come to our party. \n`)

for (let Guest of Guest_List){
    console.log('I’d like to invite to dinner Mr.',Guest) ;
}


