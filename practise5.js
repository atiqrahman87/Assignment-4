function numbers(arr) {
    let newArray = [];
    for (i = 0; i < arr.length; i++)
        if (arr[i] >= 0) {
            newArray.push(arr[i])
        }
        else break
        return newArray
}

numberArray = [1, 2, 3, 5, -1, 0, -2, 3];
console.log(numbers(numberArray));
