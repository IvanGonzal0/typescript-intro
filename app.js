console.log('Esto es codigo en typescript');
function add(number1, number2, showResult, phrase) {
    console.log(typeof number1);
    console.log(typeof number2);
    console.log(typeof showResult);
    console.log(typeof resultPhrase);
    var result = number1 + number2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return number1 + number2;
    }
    return number1 + number2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
