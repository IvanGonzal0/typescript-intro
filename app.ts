type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: number | string, input2: number | string, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' && resultConversion === 'as-number') {
        const result = input1 + input2
    } else {
        return input1.toString() + input2.toString()
    }
    return result
}


const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)