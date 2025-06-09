const hasDuplicates = (arr) => {
    const uniqueValues = new Set(arr);
    if (uniqueValues.size === arr.length){
        return false
    }
    return true
}

console.log(hasDuplicates([1, 2, 3, 4, 5])); 
console.log(hasDuplicates([1, 2, 3, 2, 5])); 