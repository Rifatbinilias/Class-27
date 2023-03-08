// এইটা হলো arguments এইটার কাজ হলো যে, কে কত নাম্বারে আছে সেটা নাম্বার সহ দেখাবে। 
/* function addAllNumber(num1, num2) {
    console.log(arguments);

}

const total = addAllNumber(66, 55, 11, 44, 77, 42, 99, 120, 900, 657)
console.log(total); */

//এইটা হলো যদি শুধু 0 নাম্বারে কে আছে সেটা দেখতে চাই। তাহলে 
/* function addAllNumber(num1, num2) {
    console.log(arguments[0]);

}
const total = addAllNumber(66, 55, 11, 44, 77, 42, 99, 120, 900, 657)
console.log(total); */


//এইটা সিম্পল 
/* function addAllNumber(num1, num2) {
    // console.log(arguments);

    for (const number of arguments) {
        console.log(number);
    }

}

const total = addAllNumber(66, 55, 11, 44, 77, 42, 99, 120, 900, 657)
console.log(total); */


//এইটা হলো সবগুলোতে যোগ করে দেখাবে। 
function addAllNumber() {
    // console.log(arguments);
    let total = 0;
    for (const number of arguments) {
        // console.log(number);
        total = total + number;
    }
    return total

}

const total = addAllNumber(66, 55, 11, 44, 77, 42, 99, 120, 900, 657)
console.log(total);


