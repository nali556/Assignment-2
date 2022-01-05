//We are going to use the default methods in this array
const arr1 = [1,2,3]
console.log("forEach, arr1:")
arr1.forEach(element => console.log(element));
console.log("\nMapping arr1:")
const map1 = arr1.map(x => x * 2);
console.log(map1)
console.log("filter")
const filterArray = [1,2,3,4,5,6,7,8]
console.log("array before filter:", filterArray)
const result = filterArray.filter(x => x > 4);
console.log("Filtered with greater than 4:", result)
console.log("some() should return true:")
const checkValue = (element) => element > 4;
console.log(filterArray.some(checkValue))
console.log("Every should be false:", filterArray.every(checkValue))
//Reduce array here
reduceArr = [1,2,3,4]
console.log("reduce(), array:", reduceArr)
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log("sum is:", reduceArr.reduce(reducer));
const myArr = [1,2,3,5,21]
console.log("myArr:", myArr)
console.log("includes() should return true for 21:", myArr.includes(21), "and false for 4:", myArr.includes(4))
console.log("Using indexOf() to find the index of 21 and 4, where 4 should be -1:", myArr.indexOf(21), myArr.indexOf(4))
console.log("Using push() to add 4 to myArr")
console.log(myArr)
myArr.push(4)
console.log(myArr)
dupArr = [1,2,2,2,3,4]
console.log("lastIndexOf, with dupArr:", dupArr)
console.log(dupArr.lastIndexOf(2))
const myObj = {
    a: "foobar",
    b: 21,
    c: true
}
console.log("Get the keys using Object.keys():", Object.keys(myObj))
console.log("Now getting the values using Object.values()", Object.values(myObj))