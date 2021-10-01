function palindrome(str) {
  let lowered = str.toLowerCase();
  let arr = lowered.split("");
  let regex = /^[a-z0-9]+$/i;
  let editedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i]) === true) {
      editedArr.push(arr[i]);
    }
  }
 
  var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

  if (editedArr.length % 2 === 0) {
    let firstHalf = editedArr.slice(0, editedArr.length/2);
    let secondHalf = editedArr.slice(editedArr.length/2, editedArr.length)
    let revSecondHalf = secondHalf.reverse();
    if (arraysMatch(firstHalf, revSecondHalf) === true) {
      return true;
    } else {
      return false;
    }
  } else {
    editedArr.splice((editedArr.length - 1)/2, 1)
    let firstHalf = editedArr.slice(0, editedArr.length/2);
    let secondHalf = editedArr.slice(editedArr.length/2, editedArr.length)
    let revSecondHalf = secondHalf.reverse();
    if (arraysMatch(firstHalf, revSecondHalf) === true) {
      return true;
    } else {
      return false;
    }
  }
}



console.log(palindrome("A man, a plan, a canal. Panama"));