const multiplesOf3and5= (limit) => {
  let arrayToAdd= [];

    for(let i=0; i<limit; i++){
        if( i%3 === 0 && i% 5){
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

//const result100= multipleAdder(1000, 3, 5);

//console.log(result100);