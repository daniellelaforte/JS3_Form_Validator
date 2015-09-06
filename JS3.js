var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

var checkForPhoneNumber = function(number) {
	return (isNumber(number.charAt(0)) && isNumber(number.charAt(1)) && isNumber(number.charAt(2)) && isNumber(number.charAt(4)) && isNumber(number.charAt(5)) && isNumber(number.charAt(6)) && isNumber(number.charAt(8)) && isNumber(number.charAt(9)) && isNumber(number.charAt(10)) && isNumber(number.charAt(11)) );
}

var checkForZip = function(number) {
	if (number.length == 5)
	     return (isNumber(number.charAt(0)) && isNumber(number.charAt(1)) && isNumber(number.charAt(2)) && isNumber(number.charAt(3)) && isNumber(number.charAt(4)));

    else if (number.length == 10)
	     return (isNumber(number.charAt(0)) && isNumber(number.charAt(1)) && isNumber(number.charAt(2)) && isNumber(number.charAt(3)) && isNumber(number.charAt(4)) && isNumber(number.charAt(6)) && isNumber(number.charAt(7)) && isNumber(number.charAt(8)) && isNumber(number.charAt(9)) );

    else 
    	return false;

}


var number = prompt('Enter your phone number with dashes.');

alert(number.charAt(3) === '-' && number.charAt(7) === '-' && checkForPhoneNumber(number) && number.length == 12);

var number = prompt('Enter your birthdate (xx/xx/xx).');

alert(number.charAt(2) === '/' && number.charAt(5) === '/' && number.length == 8);

var number = prompt('Enter your zip code (xxxxx or xxxxx-xxxx).');

alert((number.length == 5 || (number.length == 10 && number.charAt(5) === '-')) && checkForZip(number));

var number = prompt('Enter your state abbreviation.');

alert(number.length == 2 && number.charAt(0) === number.charAt(0).toUpperCase() && number.charAt(1) === number.charAt(1).toUpperCase() );

var number = prompt('Are you married?');

alert(number.toUpperCase() === 'YES' || number.toUpperCase() === 'NO');