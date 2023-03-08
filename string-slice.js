
// এইটা হলো প্রত্যোকটা কে আলাদা আলাদা করে শব্দ দিয়ে দিবে।
/* const funny = "Are ere kara kota thaka elo ara";

const word = funny.split(' ')
console.log(word); */

// এইটা হলো যেই অক্ষরটা এইখানে লেখবো সেখানে ভেঙ্গে ভেঙ্গে দেখাবেঅ।
/* const funny = "Are ere kara kota thaka elo ara";

const word = funny.split('a')
console.log(word); */

//slice
//এইটা হলো 5-14 পর্যন্ত যত গুলো অক্ষর আছে সেগুলোকে দেখাবে বাকি গুলো দেখাবে না। speace সহকারে ধরবে। এইটাকে slice বলে
/* const funny = "Are ere kara kota thaka elo ara";
const word = funny.slice(5, 14);
console.log(word); */


//এইটা হলো 14,5    14 নম্বর সংখ্যা থেকে 5 সংখ্যা পর্যন্ত যাবে। বাকি গুলো কেটে দিবে।
//substr
/* const funny = "Are ere kara kota thaka elo ara";
const word = funny.substr(14, 5);
console.log(word); */

//উপরের সাথে একই
/* const funny = "Are ere kara kota thaka elo ara";
const world = funny.substring(5, 12)
console.log(world); */


// যোগ করার নতুন নিয়ম এভাবে ও যোগ করা যায়।
/* const funny = "Are ere kara kota thaka elo ara";
const first = 'Amadar';
const second = 'todar';
const fullString = first.concat(second);
console.log(fullString); */


// যোগ করার সময় যদি কিছু যক্ত করতে চাই।
/* const funny = "Are ere kara kota thaka elo ara";
const first = 'Amadar';
const second = 'todar';
const fullString = first.concat(second).concat('jogra Hoycha').concat('Ami jani'); // এইখানে আরও যোগ করা যাবে .concat
console.log(fullString); */


//বেশি বেশি যোগ করার নিয়ম। 
/* const funny = "Are ere kara kota thaka elo ara";
const first = 'Amadar';
const second = 'todar';
const fullString = first.concat(second).concat('jogra Hoycha').concat('Ami jani'); */ // এইখানে আরও যোগ করা যাবে .concat


//এইটা ভিন্ন ভেরিয়েবেল যোগ করার নিয়ম। 
/* const word2 = ['david', 'dolar', 'dosany', 'pasa']
const allJoined = word2.join();
console.log(allJoined); */


//এইটা ভিন্ন ভেরিয়েবেল যোগ করার নিয়ম। তবে আমরা যদি কোন, েনা দেখতে চায় একসাথে তখন ('') ব্রাকেটের মধ্যে কোলন দিতে হবে।  
const word2 = ['david', 'dolar', 'dosany', 'pasa']
//const allJoined = word2.join( ); // শুধূেএকসাথে দেখার জন্য। 
// const allJoined = word2.join(' '); //speace দিলে আমাদের ফাকা করে দেখাবে। 
// const allJoined = word2.join(' , ');  //speace দিলে আমাদের ফাকা করে দেখাবে এবং , কমা দিলে প্রত্যকটা ওয়ার্ড এর পর কমা দিবে। 
// const allJoined = word2.join('www,'); //প্রত্যেকটার শেষে www, দেখাবে। 
// const allJoined = word2.join('');
console.log(allJoined);


