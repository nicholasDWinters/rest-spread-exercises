
//What does this code return?
// new Set([1,1,2,2,3,4])
//would return {1,2,3,4}



//What does this code return?
// [...new Set("referee")].join("")
//would return 'ref'



//What does the map look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// 0: {Array(3) => true }
// 1: {Array(3) => false}


// write a function hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
    if (arr.length !== new Set(arr).size) {
        return true;
    } else {
        return false;
    }
}


// write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string

const vowelCount = (str) => {
    let vowels = 'aeiou';
    let arr = [...str.toLowerCase()];
    let vowelsMap = new Map();

    arr.forEach(function (letter) {
        if (vowels.indexOf(letter) !== -1) {
            if (vowelsMap.get(letter)) {
                let numTimes = vowelsMap.get(letter);
                vowelsMap.set(letter, (numTimes + 1));
            } else {
                vowelsMap.set(letter, 1);
            }
        }
    })
    return vowelsMap;
}