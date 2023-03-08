
// array এর মধ্যে কিভাবে খুজে বের করা যায় সেটা বের করার জন্য এভাবে করতে হবে।
/* function megaName(items) {
    if (Array.isArray(items) == false) {
        return 'Please provide an Array'
    }
}
const name = ['david', 'dolar', 'dosanydakat', 'pasahowledar'];
const result = megaName("david");
console.log(result); */


// বড় যে লেখাটা সেটাকে খুজে বের করার জন্য।
/* function megaName(names) {
    if (Array.isArray(names) == false) {
        return 'Please provide an Array'
    }
    let maga = [];
    for (const name of names) {
        if (name.length > maga.length) {
            maga = name;
        }
    }
    return maga
}
const name = ['david', 'dolar', 'dosanydakat', 'pasahowledar'];
const result = megaName(name);
console.log(result); */



/* function megaName(names) {
    if (Array.isArray(names) == false) {
        return 'Please provide an Array'
    }
    let maga = [];
    for (const name of names) {
        if (name.length > maga.length) {
            maga = name;
        }
    }
    return maga
}
const name = ['david', 'dolar', 'dosanydakat', 'pasahowledar'];
const result = megaName(name);
// console.log(result);

const friends = ['david', 'dolar', 'dosanydakat', 'pasahowledar'];

if (friends.indexOf('data') != -1) {
    console.log('friend asa');
}
else {
    console.log('friend naira vai');
} */


// function megaName(names) {
//     if (Array.isArray(names) == false) {
//         return 'Please provide an Array'
//     }
//     let maga = [];
//     for (const name of names) {
//         if (name.length > maga.length) {
//             maga = name;
//         }
//     }
//     return maga
// }
// const name = ['david', 'dolar', 'dosanydakat', 'pasahowledar'];
// const result = megaName(name);
// console.log(result);

// const friends = ['david', 'dolar', 'dosanydakat', 'pasahowledar'];

// if (friends.indexOf('data') != -1) {
//     console.log('friend asa');
// }
// else {
//     console.log('friend naira vai');
// }


// const friends = ['david', 'dolarda', 'dosanydakat', 'pasahowledar'];
// if (friends.indexOf('dolarda') != -1) {
//     console.log('friends asa');
// }
// else {
//     console.log('friends nai ra vai');
// }



// const friends = ['david', 'dolarda', 'dosanydakat', 'pasahowledar'];
// if (friends.includes('dolarda')) {
//     console.log('oi khana jauiya jaba nah dada asa');
// }


// দুইটা এরেকে এক করে দেখাবে। 
/* const first = [1, 2, 3, 5];
const second = [7, 9, 8];
const add = first.concat(second);
console.log(add); */



