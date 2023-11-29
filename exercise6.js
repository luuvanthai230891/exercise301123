let n1 = 0;
let n2 = 1;
let n3 = n1 + n2;

let fibonacyString = n1 + " " + n2 + " ";

for (i = 2 ; i < 50 ; i++ ){
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
fibonacyString = fibonacyString + n3 + " ";
}
 console.log(fibonacyString);