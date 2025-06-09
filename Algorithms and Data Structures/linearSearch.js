const linearSearch = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

const arr = [10, 20, 30, 40];
console.log(linearSearch(arr, 30));