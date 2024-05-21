//Question 37: Large Shirts: Default values in make_shirt().

function make_shirt(size : string = "large", message : string = "I love TypeScript"){
    console.log(`the size of shirt is ${size} and message is ${message}`)
}

make_shirt();
make_shirt("medium");
make_shirt("small" , "i love programming");
