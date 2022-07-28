const getTheTitles = function(a) {
    let bookTitles = []
    a.forEach(book => { bookTitles.push(book['title'])
        
    });

    return bookTitles

};

// Do not edit below this line
module.exports = getTheTitles;
