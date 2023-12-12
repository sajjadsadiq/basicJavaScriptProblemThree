/*
Problem Two: 02
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.

*/

function isLeapYear(year) {
  // check if a year is a leap year.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function findLeapYear(years) {
  // find leap years from the given array
  const leapYear = [];

  for (const year of years) {
    if (isLeapYear(year)) {
      leapYear.push(year);
    }
  }
  return leapYear;
}

//Example Usage
const inputYear = [2023, 2024, 2025, 2028, 2030];
const leapYearResult = findLeapYear(inputYear);

console.log(`The Leap Year: ${leapYearResult}`);

