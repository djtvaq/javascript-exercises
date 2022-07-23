// take the string 
// concatenate the string in a loop, using num as the end condition

const repeatString = function (string, num) {
//TWO WAYS TO DO IT
    if (num < 0) {
        return 'ERROR'
    } else {
        return string.repeat(num)
    }
}



//     let emptyString = '';
//     if (num < 0) {
//         return 'ERROR'
//     } else {
//         while (num > 0) {
//             emptyString += string
//             num--
//         }
//     }
//     return emptyString;

// };

// Do not edit below this line
module.exports = repeatString;
