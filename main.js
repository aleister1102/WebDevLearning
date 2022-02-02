function findEqualValues(array1, array2) {
    var result = array1.filter(function (element) {
        return array2.has(element);
    })
    if (result == undefined) {
        return [];
    }
    return result;
}
console.log(findEqualValues([1, 2, 3], [2, 3]));