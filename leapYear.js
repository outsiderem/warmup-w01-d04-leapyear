const isLeapYear = function(){
const year = prompt('Enter year:');
if (year % 4 == 0 && year % 100 !== 0){return true;} 
else if (year %4 == 0 && year % 100 == 0 && year % 400 == 0){return true;} 
else return false;
}