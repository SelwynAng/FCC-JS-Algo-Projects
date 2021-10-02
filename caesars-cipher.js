function rot13(str) {
  let arr = str.split("");
  let regex = /^[A-Za-z]+$/
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let alphaArr = alphabet.split("");

  for (let i = 0; i < arr.length; i ++) {
    if (regex.test(arr[i]) === true) {
      if (alphaArr.indexOf(arr[i]) <= 12) {
        arr.splice(i, 1, alphaArr[alphaArr.indexOf(arr[i]) + 13])
      } else if (alphaArr.indexOf(arr[i]) > 12) {
        arr.splice(i, 1, alphaArr[alphaArr.indexOf(arr[i]) - 13])
      }
    }
  }
  return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))