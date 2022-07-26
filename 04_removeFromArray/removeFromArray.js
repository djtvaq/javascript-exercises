const removeFromArray = function(array, filter) {

console.log(array)
console.log(filter)

let i = 0;

while (i < array.length) {

    if (array[i] === filter) {
        let splicedArray = array.splice(i,1)
        return array
    }
    i++
}
}


// Do not edit below this line
module.exports = removeFromArray;
