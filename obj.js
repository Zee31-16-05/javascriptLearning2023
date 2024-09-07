let obj = {
    firstname : 'John',
    age : 34,
    is_user : true
}

// console.log(obj.age);
// console.log(obj.firstname);
// console.log(obj.is_user);


//another way to access object properties
// console.log(obj["firstname"]);
// console.log(obj["is_user"]);



// -------------------------------NESTED Object-----------------

let obj1 = {
    firstname : 'John',
    age : 26,
    address : {
        pincode : 400078,
        roomNO : "15A",
        society : "sainath"
    }
}

console.log(obj1.address);

// console.log("pincode",obj1.address.pincode)
console.log("roomno",obj1.address.roomNO);




