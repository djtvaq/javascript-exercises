const removeFromArray = function([array], filter) {

    for (let i=0; i < array.length; i++) {
        if (arguments[i] === filter) {
            array.splice(i, 1)
            return array
        } else {
            return array
        }
    }

};

// Do not edit below this line
module.exports = removeFromArray;
