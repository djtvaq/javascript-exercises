const reverseString = function(string) {
    let characters = string.split('')
    let reverseCharacters = characters.reverse()
    let stringReversed = reverseCharacters.join()

    return stringReversed

};

// Do not edit below this line
module.exports = reverseString;
