// implement forEach without using forEach. Use a callback function

// create an array
const arr1 = [1, 2, 3]
console.log("forEach:")
function myEach(callback, arr1){
for (let i = 0; i < arr1.length; i++){
  callback(arr1[i])
  
}
}

// define cb
function  printArr(num){
  console.log(num)
}

//printArr(arr1, count)

myEach(printArr, arr1)

// 2. implement map() without using map(), instead a callback function
console.log("\nmyMap():")
const mapArr = [1, 2, 3, 4]
//map has a index, and another parameter where the value is multiplied to another value
function myMap(callback, arr, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i], value)
  }
}
//define callback
function change(num, value) {
  num = num * value
  return num
}
console.log("Map array before")
myEach(printArr, mapArr)
myMap(change, mapArr, 2)
console.log("Map array after:")
myEach(printArr, mapArr)

//3. myFilter()
console.log("\nmyFilter:")
const filterArray = [1,2,3,4,5,6,7,8]
//filter() creates a new array that has the values that meet the condition.
function myFilter(callback, arr, condition){
  const filteredArr = []
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i],condition)){
      filteredArr.push(arr[i])
    }
  }
  return filteredArr
}
function checkValue(value, condition){
  if(value > condition){
    return true
  }
  else{
    return false
  }
}
console.log("Array before filter:")
myEach(printArr, filterArray)
console.log("New array after")
console.log(myFilter(checkValue, filterArray, 4))
//4. some(), at leaast one element has to meet the requirement in order to return true
console.log("\nsome():")
//Using filterArray again
function mySome(callback, arr, condition){
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i],condition)){
      return true
      break;
    }
    else{
      return false
    }
  }
}
//We can use the same function checkValue
console.log(mySome(checkValue, filterArray, 4))
//5. every() checks if every element meets the condition, all have to meet it in order to return true
console.log("\nmyEvery:")
function myEvery(callback, arr, condition){
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i],condition)){
      return true
    }
    else{
      return false
      break;
    }
  }
}
console.log(mySome(checkValue, filterArray, 4))
//6.Reduce goes thru all of the array, in this case to add all elements together
console.log("myReduce:")
const reduceArr = [1,2,3,4]
function myReduce(callback, arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total = total + callback(arr[i])
  }
  return total
}
function getTotal(value){
  return value
}
console.log("total value of array:", myReduce(getTotal, reduceArr))
//7. Includes, if one index includes a value, true is returned.
console.log("\nmyInclude:")
const myArr = [1,2,3,5,21]
function myIncludes(arr, value){
  let doesInclude = false;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      doesInclude = true
    }
  }
  return doesInclude
}
console.log("myArr:")
myEach(printArr, myArr)
console.log("Checking if myArr has 21:", myIncludes(myArr, 21))
console.log("Checking if myArr has 4:", myIncludes(myArr, 4))
//8. IndexOf() returns the index of a specified value
console.log("\nIndexOf, using the same array myArr:")
function myIndexOf(arr, value){
  let index = -1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      index = i
      break; //break to get first encounter
    }
  }
  return index
}
console.log("Getting index of 21 in myArray", myIndexOf(myArr, 21))
console.log("Checking if -1 is given when looking for 4", myIndexOf(myArr, 4))
//9. Push() adds a value to the end of an array
console.log("\nmyPush: Adding 4 to myArr")
console.log("myArr before:", myArr)
function myPush(arr, element){
  arr[arr.length] = element
}
myPush(myArr, 4)
console.log("myArr after:", myArr)
//10. lastIndexOf, similar to indexOf, but returns the LAST index of a certain value instead of first
console.log("\nmyUnshift() / lastIndexOf on dupArr")
dupArr = [1,2,2,2,3,4]
function myLastIndexOf(arr, value){
  let index = -1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      index = i
    }
  }
  return index
}
console.log("dupArr:", dupArr)
console.log("Index of last 2:", myLastIndexOf(dupArr, 2))
//11. Object.keys() returns the keys only
console.log("\ngrabKeys:")
const myObj = {
  a: "foobar",
  b: 21,
  c: true
}
function grabKeys(obj){
  for(keys in obj){
    console.log(keys)
  }
}
grabKeys(myObj)
//12. Object values returns the values only
console.log("\ngrabValues for myObj:")
function grabValues(obj){
  for(key in obj){
    let value = obj[key]
    console.log(value)
  }
}
grabValues(myObj)