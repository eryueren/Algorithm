var array = [1, 22, 33, 44, 55, 66, 2];
var temp;

var bubbleSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(array));