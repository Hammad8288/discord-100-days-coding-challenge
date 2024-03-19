//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 
var fullName = "HaMmAd AhmEd";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" "));
