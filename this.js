//default binding

// function zee(){
//     console.log(this.name + ' is calling')
// }

// let name = "zeeshan"
// zee()

//implicit binding

// function alert(){
//     console.log("zeee"+ this.age);
// }

// let myobj = {

//     age : 22,
//     alert : alert
// }

// myobj.alert()

//explicit binding

// ===========================Revision_++++++++================
// default binding

// let name = "zeeshan"

// function zee(){
//     console.log("my name is", this.name);
// }
// zee()


// Implicit binding
 function zee21(){
    console.log("his is zeeshan", this.name);
 }

 let myobj = {
    "name" : "zeesan",
    "sirname" : "khan",
    zee : zee21
 }

 myobj.zee()