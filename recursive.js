function fibonacciArrayedRecursive(n) {
    let arr = []
    if (n <= 0) return arr
    if (n === 1) {
        arr.push(0)
        return arr
    }
    if (n === 2) {
        arr.push(...[0,1])
        return arr
    }
    let neighbor = fibonacciArrayedRecursive(n - 1)
    let result = neighbor[n - 2] + neighbor[n - 3]
    arr.push(...neighbor)
    arr.push(result)
    return arr
}

function fibonacciArrayed(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        if(arr.length <= 1) {
            arr.push(i)
        } else {
            arr.push(arr[i - 2] + arr[i - 1])
        }
    }
    return arr
}
function fibonacci(n) {
    if (n === 1) return 0
    if (n === 2) return 1
    return fibonacci(n - 2) + fibonacci(n - 1)
}

// function mergeSortRecursive(array) {
//     if (array.length <= 1) return array
//     let sortedArr = []
//     let FirstHalf = []
//      let half = Math.floor(array.length / 2)
//     array.forEach((value, index) => {
//         if (index < half) FirstHalf.push(value)
//     })
//     let fixedFirst = mergeSortRecursive(FirstHalf)
//     console.log("1")
//     let secondHalf = []
//     array.forEach((value, index) => {
//         if (index >= half) { 
//             secondHalf.push(value)
//             console.log('2')
//         }
//     })
//     let fixedSecond = mergeSortRecursive(secondHalf)
//     for (let i = 0; i < fixedFirst.length; i++) {
//         if (fixedSecond.length === 0 || fixedFirst.length === 0) break
//         if (fixedFirst[0] < fixedSecond[0]) {
//             sortedArr.push(fixedFirst[0])
//             fixedFirst.splice(0,1)
//             i--
//         } else if (fixedSecond[0] < fixedFirst[0]) {
//             sortedArr.push(fixedSecond[0])
//             fixedSecond.splice(0,1)
//             i--
//         } else if (fixedSecond[0] === fixedFirst[0]) {
//             sortedArr.push(fixedFirst[0])
//             sortedArr.push(fixedSecond[0])
//             fixedFirst.splice(0,1)
//             fixedSecond.splice(0,1)
//             i--
//         }
//     }
//     if (fixedFirst.length >= 1 && fixedSecond.length === 0) {
//         sortedArr.push(...fixedFirst)

//     } else if (fixedSecond.length>= 1 && fixedFirst.length === 0) {
//         sortedArr.push(...fixedSecond)
//     }
//     return sortedArr
// }
// function mergeSortRecursive(array) {
//     if (array.length <= 1) return array
//     let half = Math.floor(array.length / 2)
//     let FirstHalf = []
//     for (let i = 0;i < half; i++) {
//         FirstHalf[i] = array[i]
//     }
//     let secondHalf = []
//     for (let i = half;i < array.length; i++) {
//         secondHalf[i - half] = array[i]
//     }
//     array.splice(0,array.length)
//     let fixedFirst = mergeSortRecursive(FirstHalf)
//     let fixedSecond = mergeSortRecursive(secondHalf)
//     for (let i = 0; i < fixedFirst.length; i++) {
//         if (fixedSecond.length === 0 || fixedFirst.length === 0) break
//         if (fixedFirst[0] < fixedSecond[0]) {
//             i--
//             array.push(fixedFirst[0])
//             fixedFirst.splice(0,1)
//         } else if (fixedSecond[0] < fixedFirst[0]) {
//             array.push(fixedSecond[0])
//             fixedSecond.splice(0,1)
//             i--
//         } else if (fixedSecond[0] === fixedFirst[0]) {
//             array.push(fixedFirst[0])
//             array.push(fixedSecond[0])
//             fixedFirst.splice(0,1)
//             fixedSecond.splice(0,1)
//             i--
//         }
//     }
//     if (fixedFirst.length >= 1 && fixedSecond.length === 0) {
//         array.push(...fixedFirst)

//     } else if (fixedSecond.length>= 1 && fixedFirst.length === 0) {
//         array.push(...fixedSecond)
//     }
//     return array
// }
function mergeSortRecursive(array) {
    if (array.length <= 1) return array
    let sortedArr = []
    let FirstHalf = []
     let half = Math.floor(array.length / 2)
    array.forEach((value, index) => {
        if (index < half) FirstHalf.push(value)
    })
    let fixedFirst = mergeSortRecursive(FirstHalf)
    let secondHalf = []
    array.forEach((value, index) => {
        if (index >= half) { 
            secondHalf.push(value)
        }
    })
    let fixedSecond = mergeSortRecursive(secondHalf)
    for (let i = 0; i < fixedFirst.length; i++) {
        if (fixedSecond.length === 0 || fixedFirst.length === 0) break
        if (fixedFirst[0] < fixedSecond[0]) {
            sortedArr.push(fixedFirst[0])
            fixedFirst.splice(0,1)
            i--
        } else if (fixedSecond[0] < fixedFirst[0]) {
            sortedArr.push(fixedSecond[0])
            fixedSecond.splice(0,1)
            i--
        } else if (fixedSecond[0] === fixedFirst[0]) {
            sortedArr.push(fixedFirst[0])
            sortedArr.push(fixedSecond[0])
            fixedFirst.splice(0,1)
            fixedSecond.splice(0,1)
            i--
        }
    }
    if (fixedFirst.length >= 1 && fixedSecond.length === 0) sortedArr.push(...fixedFirst)
    else if (fixedSecond.length >= 1 && fixedFirst.length === 0) sortedArr.push(...fixedSecond)
    return sortedArr
}
export {fibonacciArrayedRecursive, mergeSortRecursive, fibonacci, fibonacciArrayed}
