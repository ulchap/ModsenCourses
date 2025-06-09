const binarySearch = (sortedArray, value) => {
    let len = sortedArray.length;
    let left = 0;
    let right = len - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (sortedArray[mid] > value) {
            right = mid - 1;
        }
        else if (sortedArray[mid] < value) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sortedArray, 7));