const caesar = function (string, number) {


    let alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let alphabetUpperCase = alphabetLowerCase.map(x => x.toUpperCase())

    let stringCharacterArray = string.split('')

    let encryptedArray = []


    for (let i = 0; i < stringCharacterArray.length; i++) {


        if (alphabetLowerCase.includes(stringCharacterArray[i].toLowerCase())) {

            if (stringCharacterArray[i] == stringCharacterArray[i].toLowerCase()) {
                let characterIndex = alphabetLowerCase.indexOf(stringCharacterArray[i])
                let loopedCharacterIndex = (characterIndex+number)%alphabetLowerCase.length


                let encryptedCharacter = alphabetLowerCase[loopedCharacterIndex]

                encryptedArray.push(encryptedCharacter)

            } else if (stringCharacterArray[i] !== stringCharacterArray[i].toLowerCase()) {
                let characterIndex = alphabetUpperCase.indexOf(stringCharacterArray[i])
                let loopedCharacterIndex = (characterIndex+number)%alphabetUpperCase.length
                let encryptedCharacter = alphabetUpperCase[loopedCharacterIndex]

                encryptedArray.push(encryptedCharacter)
            }

        } else {
            encryptedArray.push(stringCharacterArray[i])
        }

    }
    console.log(encryptedArray)

    return `${encryptedArray.join('')}`
    //take a string
    //divide string into characters
    //replace characters with new ones accordng to your formula
    //rejoin the characters
    //output new string
};

// Do not edit below this line
module.exports = caesar;


//count = (count + randomNumber) % colours.length

// new inxed = (current index + number) % length


//lets say we have z in position 25, and we want to add 2
//25+2= 27
//27 %26 = 1

// lets say we have a in position 0, and wany to add -2
//25 + -2 = 23
// 23 % 26 = 3

//to make negatives work
//currentindex % alphabetindex) +alphabetuindex) %alpbahetindex)
//26 % -2 + -2


// we are in postion 0 (a) and watn to go back 2 (y)
// so the number we are looking for is 24
//currentIndex(00)+(-2%26)
//currentIndex(oo)+(26+(-2%26))

// we are in postion 0 (a) and watn to go back 28(x or y)
// so the number we are looking for is 24
//currentIndex(00)+(-28%26)
//currentIndex(oo)+(26+(-28%26))

//currentIndex =(alphabet.length+(number%alphabet.length))

//foo[(i % foo.count + foo.count) % foo.count])

//alphabetLowerCase[(number % alphabetLowerCase[i]) % alphabetLowerCase[i]]

//exambple, we have lwoercase b [1] and want to -2, to z[25]
//encryptedCharacter = (-2 % 1 + 1) % 1