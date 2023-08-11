function sortMaker(arr) {
    if ((arr[0] >= 0) && (arr[1] >= 0)) {
        if (arr[0] > arr[1]) {
            return arr
        }
        else if ((arr[0]) == (arr[1])) {
            return "equal"
        }
        else {
            let temp = arr[0]
            arr[0] = arr[1]
            let newArr = [arr[0], temp]
            return newArr
        }

    }

    else {
        return "invalid Input"
    }

}

// console.log(sortMaker([]))


