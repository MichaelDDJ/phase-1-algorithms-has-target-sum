function hasTargetSum(array, target) {
  let ans = false;
  for (const num of array) {
    const altNum = target - num;
    const indexOfLast = array.length -1;
    let i = array.indexOf(num) +1;
    while (i <= indexOfLast) {
      if (altNum == array[i]) {
        ans = true;
        return ans;
      }
      else {
        i++;
      }
    }
  }
  if (ans == true) {
    return true;
  }
  else {
    return false;
  }
}

console.log(hasTargetSum([1,2,3,4,5,6,7,8,9,10], 14));

/* 
  Write the Big O time complexity of your function here
*/

/* 
For each element subract number from target to get number needed for summation.
Compare that number to numbers in array.
  loop through array
  if alternatice number found return true
  if alternatice number not found move to next number
if out of number reutnr false
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
