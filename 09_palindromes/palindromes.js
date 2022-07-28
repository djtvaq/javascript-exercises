

const palindromes = function (string) {

    //take the inpur variable and split characters in array
    //flip the array 
    //compare if the flipped array matches the original array

    
    //remove all punctuation
    let cleanString = string.replace(/[!,@,#,$,%,^,&,*,(,),?,.,',"," ", ,]/g, '')
    console.log(cleanString)

    //turn string into array of characters
    let characterArray = cleanString.split('')
    console.log(characterArray)

    //make every character in array lowercase
    let cleanArray = characterArray.map(x => x.toLowerCase())
    console.log(cleanArray)

    //create new array to reverse 
    let copyCleanArray = characterArray.map(x => x.toLowerCase())
    console.log(copyCleanArray)

    //reverse the new array
    let reverseArray = copyCleanArray.reverse()

    let testVar1 = cleanArray.join('')
    let testVar2 = reverseArray.join('')


    if (testVar1 === testVar2) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
