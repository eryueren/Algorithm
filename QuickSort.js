 //1、快速排序
 var startTime = new Date().getTime();//起始时间
 var quickSort = function (arr) {
     //过滤条件
     if (arr.length <= 1) {
         return arr;
     }
     //pivotIndex 中间数，pivot 基准数据（用来比较的一个数据）
     var pivotIndex = Math.floor(arr.length / 2),
         pivot = arr.splice(pivotIndex, 1)[0];
     //定义两个空数组，存储跟基准数据比较之后的数据
     var leftArr = [], rightArr = [];
     //循环比较
     for (var i = 0; i < arr.length; i++) {
         if (arr[i] < pivot) {
             leftArr.push(arr[i])
         } else {
             rightArr.push(arr[i]);
         }
     }
     //递归 重复这个操作，concat 是将基准数据与比较大的数据追加到left数组中
     return quickSort(leftArr).concat([pivot], rightArr);
 };
 //测试
 var startArr = [1, 22, 33, 44, 55, 66, 2];
 var endArr = quickSort(startArr);
 //输出
 var endTime = new Date().getTime();//执行结束时间
 console.log(endArr);
 console.log(endTime - startTime + "MS");
