/* CHALLENGE
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

/*APPROACH TAKEN: 
1) declare three-parameter function, so that the chosen divisors and limits can 
   each easily be changed, giving a flexible function
2) declare empty array to store numbers fitting the criteria
3) check if the current loop-number divides by BOTH chosen divisors (3+5).
   add to the storage array if so.
4) if current loop number does not divide by both divisors, check if it 
   divides by either: if so, add to our storage array.
5) add all the numbers fitting our criteria using array.reduce() method,
   storing the result to a variable named sum
6) return variable sum.
*/


const multipleAdder= (limit, divisor1, divisor2) => {
  let arrayToAdd= [];

    for(let i=0; i<limit; i++){
        if( i%divisor1 === 0 && i% divisor2){
            arrayToAdd.push(i);
        }else{
            if(i%3 === 0 || i%5 === 0){
                arrayToAdd.push(i);
                continue;
            }
        }
    }
    const sum = arrayToAdd.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber;
    });
    return sum; 
}

result100= multipleAdder(1000, 3, 5);

console.log(result100);

