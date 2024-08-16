// for (init; condition; increment) {
//     блок, който се изпълнява, докато condition
//     е истина
// }


// for (let i=0; i<6; i++) {
//     console.log(i);    
// }


// let prompt = require('readline-sync');
// let breed = prompt.question('What breed is your dog?');

// console.log(breed);

// let dogs = {
//     terrier: 'Suzy',
//     husky: 'Sir Sniffybums',
//     pug: 'Notorious PUG'
// };

// console.log("Your dog's name is" + dogs[breed] + "? How fascinating!");



// let bills = [1, 1, 5, 10, 20];
// let index = 0;

// while (index < bills.length) {
//     let currentBill = bills[index];
//     let indexPrint = 'I am on index' + index;
//     console.log(indexPrint);
//     let printedBill = 'I am currently on a $' + currentBill + 'bill!';
//     console.log(printedBill);
//     index++;
// }

    // while (index < bills.length) {
    //     console.log(bills[index]);
    //     index++;        
    // }


// let bills = [1, 1, 5, 10, 20];
// for (let index = 0; index < bills.length; index++) {
//     console.log(bills[index]);    
// }


// let bills = [1, 1, 5, 10, 20];
// for (let index = 0; index < bills.length; index++) {
//     if (bills[index] < 5) {
//         continue;
//     }
//     console.log(bills[index]);    
// }


// let bills = [1, 1, 5, 10, 20];
// for (let index = 0; index < bills.length; index++) {
//     if (bills[index] === 5) {
//         break;
//     }
//     console.log(bills[index]);    
// }


// let bills = [1, 1, 5, 10, 20];
// let total = 0;
// for (let i = 0; i < bills.length; i++) {
//     let currentValue = bills[i];
//     total += currentValue;
// }
// console.log(total);


// for (let i = 0; i < 9; i+=2) {
//     console.log(i);
// }


let catBreeds = ['Maine Coon', 'ragdoll'];
for (let i = 0; i < catBreeds.length; i++) {
    console.log(catBreeds[i]);
}