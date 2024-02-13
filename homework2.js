const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

const AllArray = arrayA.concat(arrayB.filter(items => !arrayA.includes(items)));

console.log(AllArray);
