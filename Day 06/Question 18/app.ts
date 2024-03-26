//Question 18: Seeing the World: Think of at least five places you’d like to visit.

let locations:string[] = ['New Zealand','France','Japan','Spain','Norway'] ;
console.log("Original order " , locations) ;

let alphabetical_order:string[] = [...locations].sort()
console.log("alphabetical_order", alphabetical_order) ;
console.log("Original order " , locations) ;

let resverse_alphabetical_order:string[] = [...locations].sort().reverse()
console.log("resverse_alphabetical_order" , resverse_alphabetical_order) ;
console.log("Original order " , locations) ;

let reverse_location:string[] = [...locations].reverse() ;
console.log("reverse_location",reverse_location) ;
console.log("Original order " , locations) ;


console.log(...locations.sort()) ;
console.log(...locations.sort().reverse()) ;