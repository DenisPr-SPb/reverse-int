module.exports = function reverse (n) {
    const numToString = '' + n
    if (n > 0) {
        return numToString.split('').reverse().join('')
    } else {
        const posNum = numToString.replace('-', '')
        return posNum.split('').reverse().join('')
    }
}
