//Question 31: No Users: Ensure your user list isn’t empty.

let users:string[] = ["hammad","huzaifa","bilal","moiz"] ;

if(users.length === 0) {
    console.log("We need to find some users!");
}else{
    users = []
    console.log("all users has been removed", users);
}
    