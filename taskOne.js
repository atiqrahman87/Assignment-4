function cubeNumber(number) {
    if (typeof (number) !== 'number') {
        return "The value you entered is not a number"
    }

    else {
        return number * number * number
    }
}

// console.log(cubeNumber());