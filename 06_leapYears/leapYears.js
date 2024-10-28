const leapYears = function(year) {
   let isYearDivisibleByFour = year % 4 === 0;
   let century = year % 100 === 0;
   let isYearDivisibleByFourHundred = year % 400 === 0;

   if (isYearDivisibleByFour && (!century || isYearDivisibleByFourHundred)) {
       return true;
   } else {
       return false;
   }
};

// Do not edit below this line
module.exports = leapYears;
