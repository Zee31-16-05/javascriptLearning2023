// let arr3 = [22,12,45]
// let result = arr3.map(function(element) { return element * 2})
// console.log(result);
// console.log(arr3);

// arr3.map(function (element){console.log(element)})  //22 12 45 "zee"

// function(element) {console.log(element)}

console.log("----------------------------------------------------------------");

// let result2 = arr3.map((element)=>{console.log(element)})

// callback function ek function hota h jisko apan doosre function mein
// pass karte hai as a parameter

// console.log("log 1");
// console.log("log 2");

// setTimeout(function(){console.log("log 3: Executed after 6 seconds")}, 6000);  // Delay is 3000 ms (3 seconds)
// setTimeout(function(){console.log("log 41")},2000)
// setTimeout(function (){console.log("Godsul")},4000)
// console.log("log 4");
// console.log("log 5");
// console.log("log 6");
// console.log("log 7");


// setTimeout(function(name,age){console.log(`my name is ${name} and age is ${age}`)},2000,"zeeshan",26)

// function add(a,b){
//     console.log(a+b)
// }
// setTimeout(add,3000,22,40)

// parameter 1st => Callback function 
// parameter 2nd => timer(delay in milliseconds)
//parameter 3rd => callback functions parameters(name and age)

let arr = [2,5,55,9,1,8,100,0]


function findMinMax(arr){ 
    let max = arr[0]
    let min = arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }
}
return [min,max]
}
// console.log(findMinMax(arr))

function twoArray(arr1,arr2){
 const result = findMinMax(arr1)
 console.log("result-1",result);
 
 const result2 = findMinMax(arr2)
 console.log("result-2",result2);

 if(result[0]>result2[0] && result[1]<result2[1]){
    return true
 }
 else return false
 
}
console.log(twoArray([3, 1], [4, 0]))