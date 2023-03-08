//এইটা হলো এলা মেলো থাকলেও সিরিয়াল অনুযায়ী দেখাবে। 
/* const number = [1, 7, 8, 4, 5, 2, 3, 6, 9];
const numberShortList = number.sort();
console.log(numberShortList); */

//ঠিক আগের টা মতো সিরিয়াল অনুযায়ী হয় A B C D E F এইভাবে প্রত্যেকটা স্থানের
/* const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
names.sort();
console.log(names); */
//একই নিয়ম দুইটা
/* const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
const fullname = names.sort();
console.log(fullname); */

// A আগে B C D সব জায়গার অক্ষর উল্টা দিকে দেখাবে কারণ আমরা friends.reverse() করছি। এভাবে দেখাবে। 
/* const friends = ['avid', 'zolarda', 'bandor', 'gosanydakat', 'casahawla'];
const friendsSort = friends.sort();
const reversFriends = friends.reverse(); */
// console.log(reversFriends);//


//এইটা হলো সিরিয়াল অনুযায়ী দেখাবে যেমন [ 11, 120, 42,  44, 55,   657,  66, 77, 900, 99 ] মানে 1 থেকে প্রথম টা আবার দৃতীয় ঘরে 1 থেকে নিবে। 
/* const bigNumber = [66, 55, 11, 44, 77, 42, 99, 120, 900, 657];
const bigNumberSort = bigNumber.sort();
console.log(bigNumberSort); */


//এইভাবে হলো যদি আমরা ছোট থেকে বড় দেখতে চাই তাহলে function (a, b) {    return a - b;})
const bigNumber = [66, 55, 11, 44, 77, 42, 99, 120, 900, 657];
const bigNumberSort = bigNumber.sort(function (a, b) {
    return a - b;
})
console.log(bigNumberSort);