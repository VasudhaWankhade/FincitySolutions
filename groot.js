function findPies(arr, n) {
    let arr1 = []
    arr.forEach(function(el) {
        arr1.push(el)
    })
    let indexes = []
    if (arr1.includes(n)) {
        indexes.push(arr1.indexOf(n))
        console.log(indexes)
    }
    arr.sort((a, b) => a - b)
    indexes = []
    for (let i = 0; i < arr.length; i++) {
        //[1,2,3,4,6]
        for (let j = 0; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (sum == n) {
                let a = indexes.push(arr1.indexOf(arr[i]))
                let b = indexes.push(arr1.indexOf(arr[j]))
                if (!(indexes.includes(a) && indexes.includes(b))) {
                    console.log(indexes)
                }
            }
        }

    }


}
// [1, 2, 3, 4, 5, 6]
findPies([8, 4, 3, 2, 6, 5], 6)
    //        0  1  2  3  4
    // findPies([2, 6, 4, 1, 3], 4)