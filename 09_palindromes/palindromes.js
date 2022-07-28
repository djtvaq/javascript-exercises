const palindromes = function (string) {
//take the inpur variable and split characters in array
//flip the array 
//compare if the flipped array matches the original array

let cleanString = string.replace(/[!,@,#,$,%,^,&,*,(,),?,.,',"," ", ,]/g,'')
let cleanArray = cleanString.split('')
let reverseArray= cleanArray.reverse()

if (cleanArray == reverseArray) {
    return true
} else {
    return false
}
};

// Do not edit below this line
module.exports = palindromes;
