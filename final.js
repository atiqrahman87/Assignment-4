function cubeNumber(number) {
    if (typeof (number) !== 'number') {
        return "The value you entered is not a number"
    }

    else {
        return number * number * number
    }
}

// console.log(cubeNumber());


function matchFinder(string1, string2) {
    if ((typeof (string1) !== 'string') || (typeof (string2) !== 'string')) {
        return 'either of the parameter is not a string'
    }

    else if (string1.includes(string2)) {
        return true
    }
    else {
        return false
    }


}

// console.log(matchFinder())



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




function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please provide an object"
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return (street + ',' + house + ',' + society)
    }

}
const objectList = {
    street: 10,
    house: "15A",
    society:"Earth Perfect"
}

// console.log(findAddress(objectList))



function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return "the first parameter array is an empty array"
    }

    else {
        let sum = 0;
        for (var i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i]
        }

        if (sum >= totalDue) {
            return true
        }

        else {
            return false
        }

    }
}

// let array = [];
// let number = 10;
// console.log(canPay(array, number));
