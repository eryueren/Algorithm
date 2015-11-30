var array = [2, 1, 55, 44, 121, 33];
var j, key;
var insertSort = function (arr) {
    //从第二个元素开始遍历
    for (var i = 1; i < arr.length; i++) {
        //取得
        j = i;
        key = arr[j];
        //循环 第一次循环来说 key=22  arr[j]=1 ,js是值传递不是引用传递
        while (--j > -1) {
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
            console.log( arr[j + 1]);
            console.log(arr);

        }
        arr[j + 1] = key;
        console.log( arr[j + 1]);
    }
    return arr;
}
console.log(insertSort(array));








