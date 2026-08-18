import {fibonacciArrayedRecursive, mergeSortRecursive, fibonacci, fibonacciArrayed} from "./recursive"

test("Fibonacci 4 to return array with 4 indexes", () => {
    expect(fibonacciArrayedRecursive(4)).toEqual([0,1,1,2])
})
test("Fibonacci 7 to return an array with 7 indexes", () => {
    expect(fibonacciArrayedRecursive(7)).toEqual([0,1,1,2,3,5,8])
})
test("Fibonacci mustn't accept negative numbers and should return empty array", () => {
    expect(fibonacciArrayedRecursive(-5)).toEqual([])
})
test("Fibonacci must return empty array if it was 0", () => {
    expect(fibonacciArrayedRecursive(0)).toEqual([])
})
test("Merge sort with different 4 values to return sorted one", () => {
    expect(mergeSortRecursive([5,6,1,2])).toEqual([1,2,5,6])
})
test("Merge sort must be valid with negative numbers", () => {
    expect(mergeSortRecursive([-5,-1,5,4])).toEqual([-5,-1,4,5])
})
test("Fibonacci must work perfectly", () => {
    expect(fibonacci(4)).toEqual(2)
})
test("Arrayed Fibonacci with non-recursive with number 4 should return array with length 4 and the last one of array must be 2", () => {
    expect(fibonacciArrayed(4)).toEqual([0,1,1,2])
})
