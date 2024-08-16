// function add() {
//     let quantity = 6 + 6;
//     console.log(quantity);
// }
// add();



// function add(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//     return NaN;
// }
//     return num1 + num2;
// }

// add('10', 5);
// add(10, '5');



// function outerScopeFunc() {
//     let outerVar = 'xyzxyzxyzxyz';
//     function innerScopeFunc() {
//         console.log(outerVar);
//     }
//     innerScopeFunc();
// }
// outerScopeFunc();



// function sampleFunc() {
//     let innerVar = 'xyzxyzxyz';
//     console.log(innerVar);
// }
// function sampleFunc2() {
//     console.log(innerVar);
// }
// sampleFunc();
// sampleFunc2();



// function outerScopeFunc() {
//     function innerScopeFunc() {
//         let innerVar = 'xyzxyzxyz';
//     }
//     console.log(innerVar);
//     innerScopeFunc();
// }
// outerScopeFunc();




/* function playedInTournament(tournament, player) {
    let players = tournament.players;
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];
        if (currentPlayer === player) {
            return true;
        }
    }
    return false;
}

// let sampleTournament = {
//     win: true,
//     players: ['smirk', 'knight', 'fly']
// };
// console.log(playedInTournament(sampleTournament, 'smirk'));
// console.log(playedInTournament(sampleTournament, 'superb'));

let tournaments = [
    {win: true, players: ['smirk', 'knight', 'fly']},
    {win: true, players: ['superb', 'san', 'tired']},
    {win: true, players: ['smirk', 'knight', 'tired']},
    {win: false, players: ['san', 'superb', 'fly']},
    {win: true, players: ['smirk', 'san', 'fly']},
    {win: false, players: ['superb', 'knight', 'tired']},
];

function tournamentsPlayed(tournaments, player) {
    let playCount = 0;
    for (let i = 0; i <tournaments.length; i++) {
        let currentTournament = tournaments[i];
    }
    return playCount;
}

let currentTournament = tournaments[i];
let playerDidPlay = playedInTournament (currentTournament, player);
    if (playerDidPlay) {
        playCount += 1;
    }

console.log(tournamentsPlayed(tournaments, 'smirk'));
console.log(tournamentsPlayed(tournaments, 'superb'));
 */





// function call(){
//     console.log("start");
//     return true;    
//     console.log("end");    
// }
// f();


// function sum(x,y) {
//     console.log((x + y));    
// }
// sum(5,5);



let x = 10;

function foo() {
    let y = 10;
    console.log(`x in foo: ${x}`);
    console.log(`y in foo: ${y}`);
}

foo();

console.log(`x in global: ${x}`);
console.log(`y in global: ${y}`);