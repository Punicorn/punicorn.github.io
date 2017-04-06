function binarySearch(arr, target) {
  var half = 0;
  var left = 0;
  var right = arr.length - 1;
  while(true) {
    half = Math.floor((right + left) / 2);
    if(target < arr[half]) {
      right = half -1;
    } else if(target > arr[half]) {
      left = half + 1;
    } else {
      return half;
    }
    if(left > right) {
      return -1;
    }
  }
}

console.log(binarySearch([3,5,6,8,10,13], 13)); //5-th
