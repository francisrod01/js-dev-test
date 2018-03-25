
export const processNumber = (value) => {
    let output = ""

    if (!parseInt(value)) {
        return null
    }

    if (value % 3 === 0) {
        output += 'Fazz'
    } else if (value % 5 === 0) {
        output += 'Bizz'
    } else if (value % 7 === 0) {
        output += 'Barr'
    } else {
        output += value
    }

    return output
}
