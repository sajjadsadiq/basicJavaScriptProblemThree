/* 
Basic Javascript Problem 01:
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes
*/

function convertHoursToMinutes(hours) {
  // checks if the input is a valid number
  if (typeof hours === "number")
    return "Invalid input. Please provide a valid number for hours.";

  // Convert hours to minutes (1 Hour = 60 Minutes)
  let minutes = hours * 60;
  return minutes;
}

const reslutMinutes = convertHoursToMinutes("sabbir");
console.log(reslutMinutes);
