function convertToRoman(num) {
    function convertToArrPlaces(num) {
        let sepStr = num.toString().split("");
        sepStr.reverse();
        let sepInt = sepStr.map(x => parseInt(x, 10))
        let modArr = [];
        let multiplier = 1;
        for (let i = 0; i < sepInt.length; i++) {
            modArr.push(sepInt[i] * multiplier)
            multiplier *= 10;
        }
        return modArr;
    }
    let placeArr = convertToArrPlaces(num);
    let romanArr = placeArr.map(elem => elem);

    const romanNum = [
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"]
    ]
    for (let i = 0; i < placeArr.length; i++) {
        for (let j = 0; j < romanNum.length; j++) {
            if (placeArr[i] <= 3000) {
                if ((placeArr[i] / romanNum[j][0] === 1) || (placeArr[i] / romanNum[j][0] === 2) || (placeArr[i] / romanNum[j][0] === 3)) {
                    romanArr.splice(i, 1, []);
                    for (let k = 0; k < (placeArr[i] / romanNum[j][0]); k++) {
                        romanArr[i].push(romanNum[j][1])
                    }
                } else if (placeArr[i] / romanNum[j][0] === 4) {
                    romanArr.splice(i, 1, []);
                    romanArr[i].push(romanNum[j][1]);
                    romanArr[i].push(romanNum[j + 1][1]);
                } else if (placeArr[i] / romanNum[j][0] === 5) {
                    romanArr.splice(i, 1, []);
                    romanArr[i].push(romanNum[j + 1][1]);
                } else if ((placeArr[i] / romanNum[j][0] === 6) || (placeArr[i] / romanNum[j][0] === 7) || (placeArr[i] / romanNum[j][0] === 8)) {
                    romanArr.splice(i, 1, []);
                    romanArr[i].push(romanNum[j + 1][1]);
                    for (let k = 5; k < (placeArr[i] / romanNum[j][0]); k++) {
                        romanArr[i].push(romanNum[j][1]);
                    }
                } else if (placeArr[i] / romanNum[j][0] === 9) {
                    romanArr.splice(i, 1, []);
                    romanArr[i].push(romanNum[j][1]);
                    romanArr[i].push(romanNum[j + 2][1]);
                }
            } else if (placeArr[i] > 3000) {
                romanArr.splice(i, 1, []);
                for (let k = 0; k < (placeArr[i] / 1000); k++) {
                    romanArr[i].push("M");
                }
            }
        }
    }
    romanArr.reverse();

    function removeNull(array) {
        return array.filter(x => x !== 0)
    };
    let nonZero = removeNull(romanArr);
    let combined = nonZero.flat();
    return combined.join("");
}

console.log(convertToRoman(3999));