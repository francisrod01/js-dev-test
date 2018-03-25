/**
 * @description Script to generate a random hexa number
 *
 * @link https://stackoverflow.com/a/1484514/3332734
 */


export const getRandomNumber = () => {
    const letters = '0123456789ABCDEF'
    let output = ''
    
    for (let i = 0; i < 6; i++) {
        output += letters[Math.floor(Math.random() * 16)]
    }

    return output
}
