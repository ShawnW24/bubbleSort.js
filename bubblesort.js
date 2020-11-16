function bubbleSort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr [j+1], arr[j]];
            }
        }
    }
    return arr;
}

const arr = [1,4,15,46,79,2,123,45,6,23,456,582,21,24,75,152]
console.log(bubbleSort(arr));
console.log(arr);