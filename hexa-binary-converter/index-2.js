// References
// @link https://www.rapidtables.com/convert/number/hex-to-decimal.html
// @link https://www.mathsisfun.com/hexadecimals.html


const hexaToBinary = (value) => {
    // second param to `parseInt(x, base) is `radix`, 
    // specifies the bae of the number
    const hexaParsed = parseInt(value, 16) // parse to hexa
    const binParsed = hexaParsed.toString(2) // parse to binary

    return binParsed
}

const binaryToHexa = (value) => {
    const binParsed = parseInt(value, 2)
    const hexaParsed = binParsed.toString(16).toUpperCase()

    return hexaParsed
}


// =========
//  Tests  //
// =========

const hexaNumber = 'f8'
const binaryOutput = hexaToBinary(hexaNumber)
const hexaOutput = binaryToHexa(binaryOutput)

console.log('[Hexa] initial number is: ', hexaNumber)
console.log('[Convert] Hexa to binary: ', binaryOutput)
console.log('[Convert] Binary to Hexa: ', hexaOutput)
