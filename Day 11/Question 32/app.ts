// Question 32: Checking Usernames: Ensure uniqueness in usernames.



// List of current usernames
let current_users :string[]= ["John", "hammad", "HUzaifa", "BILAL", "moiz"];


 // List of new usernames   
 let new_users :string []= ["JOHN","hamza", "arsalan", "bilal", "umair"] ;


 // Convert all current usernames to lowercase for case-insensitive comparison
let convertUsernames :string[] = current_users.map(user => user.toLowerCase()) ;


new_users.forEach(user => {
    if (convertUsernames.includes(user.toLowerCase())){
        console.log(`${user} is already taken, please choose another username.`);
    } else{
        console.log(`${user} is available.`)
    }
}) ;