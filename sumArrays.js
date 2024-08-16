// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE

let x = [1, 2, 3];
let y = [4, 5, 6];
function sumArrays(x, y) {
    let outputArray = [];
    let sumIndex1 = 0;
    let sumIndex2 = 0;
    let sumIndex3 = 0;

    sumIndex1 = x[0] + y[0];
    sumIndex2 = x[1] + y[1];
    sumIndex3 = x[2] + y[2];

    outputArray[0] = sumIndex1;
    outputArray[1] = sumIndex2;
    outputArray[2] = sumIndex3;

    console.log(outputArray);
    return outputArray;
}

sumArrays(x, y);


// TEST:
// console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]