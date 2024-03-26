//Question 18: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ['New Zealand', 'France', 'Japan', 'Spain', 'Norway'];
console.log("Original order ", locations);
var alphabetical_order = __spreadArray([], locations, true).sort();
console.log("alphabetical_order", alphabetical_order);
console.log("Original order ", locations);
var resverse_alphabetical_order = __spreadArray([], locations, true).sort().reverse();
console.log("resverse_alphabetical_order", resverse_alphabetical_order);
console.log("Original order ", locations);
var reverse_location = __spreadArray([], locations, true).reverse();
console.log("reverse_location", reverse_location);
console.log("Original order ", locations);
console.log.apply(console, locations.sort());
console.log.apply(console, locations.sort().reverse());
