//Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("the size of shirt is ".concat(size, " and message is ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love programming");
