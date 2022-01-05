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