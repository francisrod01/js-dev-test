/**
 * @description Convert From/To Binary/Decimal/Hexadecimal in JavaScript
 * 
 * @link https://www.rapidtables.com/convert/number/hex-to-decimal.html
 * @link https://www.mathsisfun.com/hexadecimals.html
 * @link https://gist.github.com/faisalman/4213592
 */

export const convertBase = (num) => {
    return {
        from: (baseFrom) => {
            return {
                to: (baseTo) => {
                    return parseInt(num, baseFrom).toString(baseTo)
                }
            }
        }
    }
}

export const hexaToBinary = (value) => convertBase(value).from(16).to(2)
export const binaryToHexa = (value) => convertBase(value).from(2).to(16)
