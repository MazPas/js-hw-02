const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"];
const n = 5;
const Words = [];

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > n) {
        Words.push(wordsArray[i]);
    }
}

console.log(Words);
