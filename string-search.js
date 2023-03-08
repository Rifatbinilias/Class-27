const products = [
    'Hp pavilion 15 black',
    'Thinkpad 480s yellow',
    'Iphone yeyoga madiation',
    'uPhone 21 plus gray whith green',
    'Dell vayuga color 18g ram'

]
const serching = "green";
const output = [];

//single single করে দেখার জন্য
/* for (const product of products) {
    console.log(product);

} */

//এইটা হলো কোন কিছুর মধ্যে থেকে শুধুমাত্র একটাকে দেখাবে।
/* const serching = "Dell";
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(serching.toLowerCase()) != -1) {
        output.push(product);
    }
} */
//এইটা হলো যে কোন একটা শব্দ লিখে দিবো তারপর সেটাকে ছোট করে আমার মূল তথ্যের মধ্যে সেই লেখা যেটা আছে সেটাকে খজে বের করে সম্পূর্ণ বাক্য টাকে দেখাবে। সেটা অবশ্যই শুরুর সংখ্যার সাথে মিলতে হবে।
// console.log(output);

/* const serching = "Dell";
const output = [];
const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(serching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output); */

//এইটাও ঠিক শুরুর সংখ্যার সাথে মিলতে হবে এবং সেটাকে খুজে বের করে আমাদের পুরো লাইটা দেখাবে। এখানে output.push বলতে product এর মধ্যে দিয়ে দিচ্ছি। যাতে করে দেখতে পারি।
/* const serching = "Dell";
const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(serching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output); */

//এইটা হলো শেষের সংখ্যা দেখার জন্য
/* const serching = "green";
const output = [];

for (const product of products) {
    if (product.toLowerCase().endsWith(serching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output); */
