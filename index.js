const weekDay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

const today = new Date();

const getHour = (hour) => {
    if (hour > 12) return `${hour - 12} PM`
    else return hour
}

const getCurrentDateAndTime = () => (
    `Today is: ${weekDay[today.getDay()]}. \nCurrent time is: ${getHour(today.getHours())} : ${today.getMinutes()} : ${today.getSeconds()}`
)

const q1 = () => {
    document.getElementById('q1').innerHTML = getCurrentDateAndTime();
}

const getCurrentDate = () => {
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    return mm + '-' + dd + '-' + yyyy;

}

const q2 = () => {
    document.getElementById('q2').innerHTML = getCurrentDate();
}

const multiply = () => {
    fn = document.getElementById('fn')
    sn = document.getElementById('sn')

    document.getElementById('q3').innerHTML = fn.value * sn.value
}

const devide = () => {
    fn = document.getElementById('fn')
    sn = document.getElementById('sn')
    document.getElementById('q3').innerHTML = fn.value / sn.value
}

const q4 = () => {
    document.getElementById('q4').innerHTML = window.location.href;
}

const reverseNumber = (num) => (
    parseInt(num.toString().split('').reverse().join(''))
)

console.log(reverseNumber(1257));


const secondLowestAndGreate = (arr) => {
    let result = [...arr];
    result.sort((a, b) => a - b);
    return `${result[1]},${result[result.length - 2]}`
}

console.log(secondLowestAndGreate([1, 2, 3, 4, 5]));

const getBetweenRange = (start, end) => {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }

    return result
}

console.log(getBetweenRange(2, 9));

const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right]
}

const mergeSort = (arr) => {
    const half = arr.length / 2

    // Base case
    if (arr.length < 2) {
        return arr
    }

    const left = arr.splice(0, half)
    return merge(mergeSort(left), mergeSort(arr))
}

console.log(mergeSort([34, 7, 23, 32, 5, 62]))

const largestOfFive = (array) => {
    let largest = array[0];
    for (let n of array) {
        if (n > largest)
            largest = n;
    }

    return largest
}

console.log('largest of five -5,-2,-6,0,-1: '+ largestOfFive([-5, -2, -6, 0, -1]))

const checkIsNaN = (input) => (
    isNaN(input)
)

console.log(checkIsNaN('not a number'))

const sameType = (value1, value2) => (
    typeof(value1) === typeof(value2)
)

console.log(sameType(1,'1'))