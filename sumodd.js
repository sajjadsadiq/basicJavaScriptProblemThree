/*
Problem 03:
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/

// Define the function findOddSum
function findOddSum(arr) {
    // Initialize a variable sum to store the sum of odd numbers
    let sum = 0;
  
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is odd using modulus operator (%)
      if (arr[i] % 2 !== 0) {
        // If it is odd, add it to the sum variable
        sum += arr[i];
      }
    }
  
    // Return the final sum of odd numbers
    return sum;
  }
  
  // Example usage
  const arr = [5, 7, 8, 10, 45, 30];
  const oddSum = findOddSum(arr);
  
  console.log("Sum of odd numbers:", oddSum); // Output: Sum of odd numbers: 57