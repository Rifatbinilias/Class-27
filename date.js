
const myFavDate = new Date('2006-02-03');
console.log(myFavDate);

const anotherDate = new Date(1971, 3, 16, 11, 50, 55, 80)
console.log(anotherDate);

if (myFavDate.getTime() < anotherDate.getDate()) {
    console.log('my fav time is earlier');
}