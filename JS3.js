var number = prompt('Enter your phone number with dashes.');

alert(number.charAt(3) === '-' && number.charAt(7) === '-');

var number = prompt('Enter your birthdate (xx/xx/xx).');

alert(number.charAt(2) === '/' && number.charAt(5) === '/');

var number = prompt('Enter your zip code (xxxxx or xxxxx-xxxx).');

alert(number.length == 5 || (number.length == 10 && number.charAt(5) === '-'));

var number = prompt('Enter your state abbreviation.');

alert(number.length == 2 && number.charAt(0) === number.charAt(0).toUpperCase() );

var number = prompt('Are you married?');

alert(number.toUpperCase() === 'YES' || number.toUpperCase() === 'NO');