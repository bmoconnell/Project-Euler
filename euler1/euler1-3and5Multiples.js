/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

const multipleAdder= (limit, divisor1, divisor2) => {
  let arrrayToAdd= []
    for(let i=0; i<limit; i++){
        if( i%divisor1 === 0 && i% divisor2){
            arrrayToAdd.push(i);
        }
    }
}
