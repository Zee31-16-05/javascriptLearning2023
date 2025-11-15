let arr2 = [1,2,"zeeshan",false,"football",22]
let arr3 = [1,2,"zeeshan", false,"football",22,"aman" ,34, true]
// console.log(arr3[7]);
// console.log(arr3[2]);
// console.log(arr3[4])


// push
// paranthesis
arr3.push("noorubhai")
arr3.push("ronaldo")
// console.log(arr3);
// console.log(arr3[9]);
// console.log(arr3[10]);

arr3.unshift("SRK")
arr3.unshift("KKR")

// console.log(arr3);
// console.log(arr3[1]);


// pop shift

// arr3.pop();
// console.log(arr3);

// arr3.shift();
// arr3.shift("");
// console.log(arr3);



//replace

let arr4 = [1,2,"zeeshan",false]
for(let i of arr4){
    console.log("ze",arr4[i]);
    
}


// Code Breakdown:
// You have an array arr4 = [1, 2, "zeeshan", false] with mixed types (numbers, a string, and a boolean).
// The for...of loop is being used to iterate over arr4, which means i takes on the values of the elements in the array.
// However, inside the console.log, you are using arr4[i], where i is treated like an index, which is not correct because i is actually the element itself (not the index).

Problem:
// In this line: console.log("ze", arr4[i]);, arr4[i] is incorrect because i is the actual value (not an index).
// If i is "zeeshan", for example, then arr4["zeeshan"] will be undefined because there's no property "zeeshan" in the array.

// for(let i in arr4){
//     console.log(arr4[i]);
    
// }

// arr4[3] = true
// console.log(arr4);


// ----------------------------------------------------------------

let obj = {
    name : "zeshan",
    age : 33,
    address : "sainath"
}

let obj2 = {
    name :"zeeshan",
    age:34,
    address:"sainath"
}

// console.log(obj.age)
// console.log(obj.address);
// console.log(obj2.name);
// console.log(obj2.address);
// console.log(obj2.age);

// NESTED Object

let obj3 = {
    name :"zeeshan",
    age:34,
    address:"sainath",
    address2 : {
        pincode : 400078,
        roomno : 22,
        team : {
            football : "messi",
            cricket : "virat"
        }
    }
}

// console.log(obj3.address2.team.cricket);
// console.log(obj3.address2.team.football);



