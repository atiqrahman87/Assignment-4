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

