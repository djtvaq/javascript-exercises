const leapYears = function(year) {

        if (year % 4 === 0 && year % 400 === 0) {
            //400 800 1200 etc
            return true
        } else if (year % 4 === 0 && year % 100 !==0) {
            return true
        } else {
            return false
        }
 };

//1900 and 700 come back as true
// Do not edit below this line
module.exports = leapYears;

//if a year is div