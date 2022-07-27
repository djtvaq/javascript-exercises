//Take an array of data from the user
//Accept filters element from user
//Loop through the array of data and look for elements that match any of the filter elements
//Remove those elements from the array
//Return the new array


const removeFromArray = function (array, ...filter) {

    let filterArray = Array.from(filter)

//x = elements from array, if filterArray(element) does not have x, return true, it passes the filter test
//return difference = return all the elements that passed our filter test
    let difference = array.filter(x => !filterArray.includes(x));

return difference
 
}




// Do not edit below this line
module.exports = removeFromArray;
