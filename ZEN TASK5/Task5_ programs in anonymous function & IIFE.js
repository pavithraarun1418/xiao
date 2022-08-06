
//1.Print odd numbers in an array
let arrayNumber = [1, 13, 25, 37,49]
let resultArray = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
        return item % 2 !== 0
    }))
})
(arrayNumber);
console.log("All odd numbers in an array: " + resultArray)

O/P: All odd numbers in an array: 1,13,25,37,49



//2.Convert all the strings to title caps in a string array
let stringArray = ['guvi', 'institute', 'is', 'very', 'good']
let resultStringArray = (function (stringArray) {
    return (stringArray.map((item) => {
        return item.toUpperCase()
    }))
})
(stringArray);
console.log("All upper case string in an array: " + resultStringArray)

O/P: All upper case string in an array: GUVI,INSTITUTE,IS,VERY,GOOD



//3.Sum of all numbers in an array
let arrayNumber = [1, 13, 25, 37,49]
let resultSumArray = (function (arrayNumber) {
    return (arrayNumber.reduce((currentTotal, item) => {
        return currentTotal + item

    }, 0))
})
(arrayNumber);
console.log("Sum of numbers in an array: " + resultSumArray)

O/P: Sum of numbers in an array: 208



//4.Return all the prime numbers in an array
let arrayNumber = [1, 13, 25, 37,49]
let resultPrimeArray = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }
        return true
    }))
})
(arrayNumber);
console.log("Prime numbers in an array: " + resultPrimeArray)

O/P: Prime numbers in an array: 1,13,37



//5.Return all the palindromes in an array
let arrayNumber = [1, 11, 30, 22,49]
let resultPalindromeArray = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
        let temp = item + ""
        if ((temp.split('').reverse().join('')) === item + "")
            return true
        return false
    }))
})
(arrayNumber);
console.log("Palindrome numbers in an array: " + resultPalindromeArray)

O/P: Palindrome numbers in an array: 1,11,22


//6.Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [18, 19, 20, 22, 26]

let resultMedian = function (arr1, arr2) {
    let result = []
    let lenArr1 = arr1.length
    let lenArr2 = arr2.length
    if (lenArr1 % 2 === 0) {
        console.log("Median of array 1: " + arr1[lenArr1 / 2])

    } else {

        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }

    if (lenArr2 % 2 === 0) {
        console.log("Median of array 2: " + arr2[lenArr2 / 2])

    } else {

        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }

    return
}(arr1, arr2)

O/P: Median of array 1: 5,   Median of array 2: 22



//7.Remove duplicates from an array
let arrayWithDup = [55, 77, 45, 11, 96, 45, 41, 9, 2, 6, 96, 1, 9,55]

let resultArrayWoDup = ((arrayWithDup, index) => {
    return [...new Set(arrayWithDup)]
})(arrayWithDup)
console.log("Array without Duplicates " + resultArrayWoDup)

O/P: Array without Duplicates 55,77,45,11,96,41,9,2,6,1



//8.Rotate an array by k times and return the rotated array

let arrforrotation = [1, 2, 3, 8, 9, 10]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array
})
(arrforrotation, 3)
console.log("Array roatated k times: " + resultArrayShifted)

O/P: Array roatated k times: 8,9,10,1,2,3