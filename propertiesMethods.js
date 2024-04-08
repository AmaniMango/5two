let myArray1 = [1, 2, 3, 4, 5];

// 1. Console log the length of myArray1
console.log(myArray1); // Should print 5

console.log("length" + myArray1.length);


let myArray2 = [1, 2, 3];
myArray2.push(4);
// 2. Add the number 4 to the end of myArray2


console.log(myArray2); // Should print [1, 2, 3, 4]
console.log("length" + myArray2.length);




let myArray3 = [1, 2, 3, 4];
// 3. Remove the last element from myArray3
myArray3.pop(4);

console.log(myArray3); // Should print [1, 2, 3]




let myArray4 = [1, 2, 3, 4];
// 4. Remove the first element from myArray4
myArray4.shift();
console.log(myArray4); // Should print [2, 3, 4]



let myArray5 = [2, 3, 4];
// 5. Add the number 1 to the beginning of myArray5
myArray1.unshift("1");
console.log(myArray5); // Should print [1, 2, 3, 4]




// CHALLENGE
// Look up how a spread operator works.
//  - Try combing a couple of the arrays above using it.


