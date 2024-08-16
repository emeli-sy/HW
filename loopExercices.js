// let crownHeight = 6;
// let boreHeight = 2;
// let boreW = 3;
// let SpaceCount;

// for (let i = 1; i<=crownHeight; i++) {
//     spaceCount = Math.floor(crownHeight) - i;
//     console.log((" ".repeat(spaceCount) + "*".repeat(i*2-1)));    
// }

// spaceCount = Mathh.floor((crownHeight*2 - 1 - boreW) /2 );
// for (let i =1; i<=boreHeight; i++) {
//     console.log(" ".repeat(spaceCount) + "*".repeat(boreW));    
// }



// let userTries = 5;

// while (userTries>0) {
//     console.log(`Try: ${userTries}`);
//     userTries--;
// }



let machineNumber = Math.round(Math.random() * 10);
console.log(`machineNumber: ${machineNumber}`);

do {
    userNumber = Math.round(Math.random() * 10);
    console.log(`userNumber: ${userNumber}`);    
} while (userNumber != machineNumber)