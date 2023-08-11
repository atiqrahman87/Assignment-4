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
