const reverseString = function(string) {
   let splitString = string.split('');
   let reverseText = splitString.reverse();
   let joinString = reverseText.join('');
   return joinString;
};

// Do not edit below this line
module.exports = reverseString;
