// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:

let positiveEvenSum = 0;
for (let i=0; i<numbers.length; i++) {
    let pEnum = numbers[i];
    if (pEnum>=0 && pEnum%2===0) {
        positiveEvenSum+=i;
    }
}

console.log( `The sum of all positive even numbers in the array: ${positiveEvenSum}`);

// expected output: 14