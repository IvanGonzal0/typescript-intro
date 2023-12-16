console.log('Esto es codigo en typescript');

function add(number1: number, number2: number, showResult: boolean, phrase: string) {
    console.log(typeof number1);
    console.log(typeof number2);
    console.log(typeof showResult);
    console.log(typeof resultPhrase);
    
    const result = number1 + number2;
    
    if (showResult) {
        console.log(phrase + result);
    }else{
        return number1 + number2;
    }
    return number1 + number2;
}

var number1 = 5;
var number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase)
console.log(result);
