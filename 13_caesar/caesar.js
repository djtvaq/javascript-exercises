const caesar = function(string, number) {


    let alphabetLowerCase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

    let alphabetUpperCase = alphabetLowerCase.map(x => x.toUpperCase())

    let stringCharacterArray = string.split('')
  
    let encryptedArray =[]

    for (let i=0; i <stringCharacterArray.length; i++) {

        if (stringCharacterArray[i] == stringCharacterArray[i].toLowerCase()){
            let characterIndex = alphabetLowerCase.indexOf(stringCharacterArray[i])
            let encryptedCharacter = alphabetLowerCase[characterIndex+number]

            encryptedArray.push(encryptedCharacter)

        } else if (stringCharacterArray[i] !== stringCharacterArray[i].toLowerCase()) {
            let characterIndex = alphabetUpperCase.indexOf(stringCharacterArray[i])
            let encryptedCharacter = alphabetUpperCase[characterIndex+number]

            encryptedArray.push(encryptedCharacter)
        } else {
            encryptedArray.push(stringCharacterArray[i])
        }

    }


    return `${encryptedArray.join('')}`
    //take a string
    //divide string into characters
    //replace characters with new ones accordng to your formula
    //rejoin the characters
    //output new string
};

// Do not edit below this line
module.exports = caesar;
