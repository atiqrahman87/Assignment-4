function bestFriend(friendList) {
    let element = friendList[0];
    var largest = element.length;
    for (i = 0; i < friendList.length; i++) {
        if ((friendList[i]).length > largest) {
            largest = friendList[i].length
            final=friendList[i]

        }

    }
    return final
}
friedArray = ['abdul', 'sakura', 'abir', 'hasibullllll', 'mahmud']
console.log(bestFriend(friedArray));