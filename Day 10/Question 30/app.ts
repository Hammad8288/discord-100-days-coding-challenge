//Question 30: Hello Admin: Greet users differently, especially 'admin'.

let username:string[] = ["hammad","bilal","admin","huzaifa","moiz"] ;

for(let name of username){
    if(name === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}